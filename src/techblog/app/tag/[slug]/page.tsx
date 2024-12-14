import FilteredPosts from '../filteredPosts';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const tag = decodeURIComponent((await params).slug);

  return (
    <div className='container mx-auto'>
      <FilteredPosts tag={tag} />
    </div>
  );
}
