import { NotionProperties } from "@/app/types/notion";

export default function BlogCard({ property }: { property: NotionProperties }) {
  return (
    <div className="max-w-sm h-80 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      <a href={`/blog/${property.id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
          {property.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        著者：{property.name}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        投稿日：{property.createdate}
      </p>
      <a
        href={`/blog/${property.id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-red dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
