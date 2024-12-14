import { NextResponse } from 'next/server';
import { getDataFromDatabase } from '@/app/notion_api/access';

export async function GET() {
  const [postsProperties, tags] = await getDataFromDatabase();
  
  return NextResponse.json({ postsProperties: postsProperties, tags: tags });
}