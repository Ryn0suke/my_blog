'use client';
import { NotionContext } from './providers/notionInfoProvider';
import BlogCard from '@/components/blogCard';

import { useContext } from 'react';

export default function Home() {
  const data = useContext(NotionContext);

  const postsProperties = data !== null ? data[0] : [];

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {postsProperties.map((value) => (
          <div key={value.id}>
            <BlogCard property={value} />
          </div>
        ))}
      </div>
    </div>
  );
}
