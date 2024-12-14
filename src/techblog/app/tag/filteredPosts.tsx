"use client";

import { useContext } from "react";
import { NotionContext } from "@/app/providers/notionInfoProvider";
import { NotionProperties } from "@/app/types/notion";
import BlogCard from "@/components/blogCard";

export default function FilteredPosts({ tag }: { tag: string }) {
  const data = useContext(NotionContext);
  
  const postsProperties = data
    ? data[0].filter((property: NotionProperties) => property.types.includes(tag))
    : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {postsProperties.map((value) => (
        <div key={value.id}>
          <BlogCard property={value} />
        </div>
      ))}
    </div>
  );
}
