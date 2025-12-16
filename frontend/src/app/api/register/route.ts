import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    console.log("1. Register API route hit."); 
    const { email, password, name } = await req.json();
    console.log("2. Received data:", { email, name }); 

    if (!email || !password || !name) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Lấy URL của Backend Payload
    // Lưu ý: Đảm bảo biến này KHÔNG có dấu / ở cuối trong cấu hình Vercel
    const payloadUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users`;
    console.log("3. Sending request to Payload at:", payloadUrl); 

    const response = await fetch(payloadUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });

    console.log("4. Received response from Payload. Status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Payload registration error:', errorData);
      return NextResponse.json({ message: 'Registration failed', errors: errorData.errors }, { status: response.status });
    }

    console.log("5. Registration successful."); 
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('CRITICAL ERROR in register route:', error); 
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}