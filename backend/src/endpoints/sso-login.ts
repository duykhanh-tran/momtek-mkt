import type { Endpoint } from 'payload';
import type { Payload } from 'payload';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

// Hàm tìm hoặc tạo User mới
async function findOrCreateUser(payload: Payload, email: string, name: string) {
  const findUser = await payload.find({
    collection: 'users',
    where: { email: { equals: email } },
    limit: 1,
    depth: 1,
  });

  if (findUser.docs.length > 0) {
    return findUser.docs[0];
  }

  // Tạo password ngẫu nhiên (vì user SSO không dùng pass)
  const randomPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

  return await payload.create({
    collection: 'users',
    data: {
      email,
      name,
      password: randomPassword,
      // @ts-ignore: Bỏ qua check type nếu trường _verified chưa được định nghĩa trong Type
      _verified: true,
    },
    depth: 1,
  });
}

export const ssoLoginEndpoint: Endpoint = {
  path: '/sso-login',
  method: 'post',
  // Sử dụng 'any' cho req để tránh lỗi TypeScript không tìm thấy 'payload' trong Request
  handler: async (req: any) => {
    // Ép kiểu thủ công để lấy payload instance
    const payload = req.payload as Payload;

    if (!payload) {
        return NextResponse.json({ message: 'Payload instance not found in request' }, { status: 500 });
    }

    try {
      const body = await req.json();
      const { email, name } = body;

      if (!email) {
        return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
      }

      // 1. Tìm hoặc tạo user
      const user = await findOrCreateUser(payload, email, name || email.split('@')[0]);

      // 2. Tạo JWT Token (để Frontend dùng làm session)
      // Lưu ý: payload.secret là bắt buộc để sign token
      const token = jwt.sign(
        { 
            id: user.id, 
            collection: 'users',
            email: user.email 
        }, 
        payload.secret, 
        { expiresIn: '30d' }
      );

      // 3. Trả về kết quả
      return NextResponse.json({ 
        user, 
        token,
        message: 'SSO Login successful' 
      }, { status: 200 });

    } catch (error) {
      console.error('SSO Login Endpoint Error:', error);
      return NextResponse.json({ message: 'An error occurred during SSO login.' }, { status: 500 });
    }
  },
};