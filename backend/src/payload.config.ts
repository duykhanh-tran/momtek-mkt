import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical' 
import sharp from 'sharp';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
// Collections
import Users from './collections/Users';
import { Media } from './collections/Media';
import Posts from './collections/Posts';
import { Categories } from './collections/Categories'
import { FormSubmissions } from './collections/FormSubmissions'
import  Karaoke_Tracks  from './collections/Karaoke_Tracks';
import  Pronunciation_Exercises  from './collections/Pronunciation_Exercises';
import Quizzes from './collections/Quizzes';
import Topics from './collections/Topics';
import Videos from './collections/Videos';
import Workbooks from './collections/Workbooks';
import Units from './collections/Units';
// Endpoints
import { ssoLoginEndpoint } from './endpoints/sso-login';
// Cloudinary
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';

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
    Karaoke_Tracks,
    Pronunciation_Exercises,
    Quizzes,
    Topics,
    Videos,
    Workbooks,
    Units,
  ],
  cors: [
    process.env.CORS_ORIGINS || '', 
    'http://localhost:3000', 
  ].filter(Boolean),

  csrf: [
    process.env.CORS_ORIGINS || '', 
    'http://localhost:3000',
  ].filter(Boolean),
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
     vercelBlobStorage({
      collections: {
        media: true, 
      },
      token: process.env.BLOB_READ_WRITE_TOKEN, 
    }),
  ],
});

