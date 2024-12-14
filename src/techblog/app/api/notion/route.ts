import { NextResponse } from 'next/server';
import { getDataFromDatabase } from '@/app/notion_api/access';

export async function GET() {
  try {
    const [postsProperties, tags] = await getDataFromDatabase();

    return NextResponse.json({ postsProperties, tags });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from the database.' },
      { status: 500 }
    );
  }
}
