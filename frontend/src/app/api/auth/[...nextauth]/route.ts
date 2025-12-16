import NextAuth, { NextAuthOptions, DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

// --- PHẦN 1: Mở rộng kiểu dữ liệu (Types) ---
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

// Hàm tiện ích để lấy URL Backend chuẩn (bỏ dấu / ở cuối)
const getPayloadUrl = () => {
  const url = process.env.PAYLOAD_URL || process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000';
  return url.replace(/\/$/, "");
};

// --- PHẦN 2: Cấu hình chính của NextAuth ---
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({ 
      clientId: process.env.GOOGLE_CLIENT_ID || "", 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "" 
    }),
    FacebookProvider({ 
      clientId: process.env.FACEBOOK_CLIENT_ID || "", 
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "" 
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: { 
        email: { label: 'Email', type: 'text' }, 
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        try {
          const payloadUrl = getPayloadUrl();
          console.log(`[NextAuth] Authorizing credentials for: ${credentials.email} at ${payloadUrl}`);

          const res = await fetch(`${payloadUrl}/api/users/login?depth=1`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
          });

          if (!res.ok) {
            const error = await res.text();
            console.error(`[NextAuth] Login failed status: ${res.status}`, error);
            return null;
          }

          const data = await res.json();
          
          if (data?.user && data.token) {
            // Trả về user object cùng với token từ Payload
            return { ...data.user, payloadToken: data.token };
          }
          return null;
        } catch (e) { 
          console.error("[NextAuth] Authorize error:", e);
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
          const payloadUrl = getPayloadUrl();
          console.log(`[NextAuth] SSO SignIn (${account?.provider}) for: ${user.email} at ${payloadUrl}`);

          const res = await fetch(`${payloadUrl}/api/sso-login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email, name: user.name }),
          });

          if (!res.ok) {
            console.error(`[NextAuth] SSO failed status: ${res.status}`);
            return false; // Chặn đăng nhập nếu backend từ chối
          }

          const data = await res.json();
          
          // Cập nhật các thông tin cho 'user' object để truyền cho callback 'jwt'
          user.payloadToken = data.token;
          user.id = data.user.id;
          user.role = data.user.role;
          user.avatar = data.user.avatar;
          user.dob = data.user.dob;

          return true; // Cho phép đăng nhập
        } catch (e) { 
          console.error("[NextAuth] SSO sign in error:", e);
          return false; // Chặn đăng nhập nếu có lỗi mạng
        }
      }
      return true; // Cho phép đăng nhập bằng credentials
    },

    // Callback này được gọi sau khi đăng nhập thành công, để tạo JWT token
    async jwt({ token, user }) {
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
      if (session.user && token) {
        // @ts-ignore
        session.user.id = token.id as string;
        // @ts-ignore
        session.user.avatar = token.avatar;
        // @ts-ignore
        session.user.role = token.role;
        // @ts-ignore
        session.user.dob = token.dob;
      }
      session.payloadToken = token.payloadToken;

      return session;
    },
  },
  // Debug mode giúp xem log chi tiết trên Vercel
  debug: process.env.NODE_ENV === 'development', 
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login', 
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };