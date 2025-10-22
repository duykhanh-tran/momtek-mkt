import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical' 
import sharp from 'sharp';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';


import Users from './collections/Users';
import { Media } from './collections/Media';
import Posts from './collections/Posts';
import { Categories } from './collections/Categories'
import { FormSubmissions } from './collections/FormSubmissions'
import { ssoLoginEndpoint } from './endpoints/sso-login';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
dotenv.config({ path: path.resolve(dirname, '../.env') });

export default buildConfig({
  admin: {
    user: Users.slug, 
  },
  editor: lexicalEditor({}), 
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '', 
  }),
  collections: [
    Users, 
    Media,
    Posts,
    Categories,
    FormSubmissions,
  ],
  endpoints: [
    ssoLoginEndpoint,
  ], 
  secret: process.env.PAYLOAD_SECRET || '', 
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'), 
  },
  sharp, 
  plugins: [
    payloadCloudPlugin(), 
  ],
});

