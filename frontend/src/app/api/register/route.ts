import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    console.log("1. Register API route hit."); 
    const { email, password, name } = await req.json();
    console.log("2. Received data:", { email, name }); 

    if (!email || !password || !name) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const baseUrl = process.env.PAYLOAD_URL || process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000';
    const cleanBaseUrl = baseUrl.replace(/\/$/, ""); 
    const payloadUrl = `${cleanBaseUrl}/api/users`;


    console.log("3. Sending request to Payload at:", payloadUrl); 

    const response = await fetch(payloadUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });

    console.log("4. Received response from Payload. Status:", response.status);

    if (!response.ok) {
      // Thử parse JSON, nếu server Payload trả về HTML lỗi (ví dụ 404/500 html) thì catch lỗi
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        console.error("Failed to parse error JSON from Payload");
        return NextResponse.json({ message: 'Registration failed (Unknown Error)' }, { status: response.status });
      }

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