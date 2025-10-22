import NextAuth, { NextAuthOptions, DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface User {
    payloadToken?: string; 
    id: string; 
    role?: string; 
    dob?: string; 
    avatar?: { url?: string };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    payloadToken?: string; 
    id: string; 
    role?: string; 
    dob?: string; 
    avatar?: { url?: string };
  }
}

declare module 'next-auth' { 
  interface Session {
    payloadToken?: string;
    user: { 
      id: string; 
      role?: string; 
      dob?: string; 
      avatar?: { url?: string }; 
    } & DefaultSession['user'];
  }
}

// --- PHẦN 2: Cấu hình chính của NextAuth ---
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_CLIENT_SECRET! }),
    FacebookProvider({ clientId: process.env.FACEBOOK_CLIENT_ID!, clientSecret: process.env.FACEBOOK_CLIENT_SECRET! }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: { email: { label: 'Email', type: 'text' }, password: { label: 'Password', type: 'password' }},
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          // Lưu ý: Đảm bảo biến môi trường PAYLOAD_URL được đặt đúng
          const res = await fetch(`${process.env.PAYLOAD_URL}/api/users/login?depth=1`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
          });
          if (!res.ok) return null;
          const data = await res.json();
          if (data?.user && data.token) {
            // Trả về user object cùng với token từ Payload
            return { ...data.user, payloadToken: data.token };
          }
          return null;
        } catch (e) { 
          console.error("Authorize error:", e);
          return null; 
        }
      },
    }),
  ],
  callbacks: {
    // Callback này xử lý việc tạo tài khoản trên Payload khi đăng nhập bằng Google/Facebook
    async signIn({ user, account }) {
      if (account?.provider !== 'credentials' && user.email) {
        try {
          const res = await fetch(`${process.env.PAYLOAD_URL}/api/sso-login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email, name: user.name }),
          });
          if (!res.ok) throw new Error('Payload SSO login failed');
          const data = await res.json();
          
          // Cập nhật các thông tin cho 'user' object để truyền cho callback 'jwt'
          user.payloadToken = data.token;
          user.id = data.user.id;
          user.role = data.user.role;
          user.avatar = data.user.avatar;
          user.dob = data.user.dob;

          return true; // Cho phép đăng nhập
        } catch (e) { 
          console.error("SSO sign in error:", e);
          return false; // Chặn đăng nhập nếu có lỗi
        }
      }
      return true; // Cho phép đăng nhập bằng credentials
    },

    // Callback này được gọi sau khi đăng nhập thành công, để tạo JWT token
    async jwt({ token, user }) {
      // Khi đăng nhập lần đầu, 'user' object từ 'authorize' hoặc 'signIn' sẽ có mặt
      if (user) {
        token.id = user.id;
        token.payloadToken = user.payloadToken;
        token.role = user.role;
        token.avatar = user.avatar;
        token.dob = user.dob;
      }
      return token;
    },

    // Callback này tạo object session được trả về cho client
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.avatar = token.avatar;
        session.user.role = token.role;
        session.user.dob = token.dob;
      }
      session.payloadToken = token.payloadToken;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login', 
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };