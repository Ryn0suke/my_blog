'use client';
import { NotionContext } from '@/app/providers/notionInfoProvider';
import Link from 'next/link';
import { useContext } from 'react';

export default function ButtonList() {
  const data = useContext(NotionContext);
  let tags: string[];
  if(data !== null) {
    tags = data[1];
  } else {
    tags = [];
  }
  return(
    <div className='w-full text-center flex flex-wrap justify-center gap-4 p-4 bg-yellow-100'>
      <Link href='/' className='bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-block'>Home</Link>
      {
        tags.map((value, index) => (
          <Link
            key={index}
            href={`/tag/${value}`}
            className='bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-block'
          >
            {value}
          </Link>
        ))
      }
    </div>
  );
}