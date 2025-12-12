import type { Endpoint } from 'payload';
import { Payload } from 'payload';
import type { Where } from 'payload';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

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

  return await payload.create({
    collection: 'users',
    data: {
      email,
      name,
      password: Math.random().toString(36).slice(-10),
      // @ts-ignore
      _verified: true,
    },
    depth: 1,
  });
}

export const ssoLoginEndpoint: Endpoint = {
  path: '/sso-login',
  method: 'post',
  handler: async (req: NextRequest) => {
    const { payload } = req;
    const body = await req.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
    }

    try {
      const user = await findOrCreateUser(payload, email, name || email.split('@')[0]);
      const token = jwt.sign({ id: user.id, collection: 'users' }, payload.secret, { expiresIn: '30d' });
      return NextResponse.json({ user, token }, { status: 200 });
    } catch (error) {
      console.error('SSO Login Endpoint Error:', error);
      return NextResponse.json({ message: 'An error occurred during SSO login.' }, { status: 500 });
    }
  },
};