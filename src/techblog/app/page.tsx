import { getPagesFromDatabase, getDataFromDatabase } from "./notion_api/access";
import { NotionProperties } from "./types/notion";
import BlogCard from "@/components/blogCard";

export default async function Home() {
  const postsProperties: NotionProperties[] = await getDataFromDatabase();
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsProperties.map((value, index) => (
          <div key={value.id}>
            <BlogCard property={value} />
          </div>
        ))}
      </div>
    </div>
  );
}
