import { getPagesFromDatabase, getPageInfo } from '@/app/notion_api/access';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const md = await getPagesFromDatabase(id);
  const pageInfo = await getPageInfo(id);

  return (
    <>
      <div className='max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg'>
        <h1>{pageInfo.title}</h1>
        <h3>投稿日：{pageInfo.date}</h3>
        <h3>著者：{pageInfo.author}</h3>

        <Markdown
          components={{
            code({ children, className, ...rest }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag='div'
                  language={match[1]}
                  style={vscDarkPlus}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {md}
        </Markdown>
      </div>

    </>
  );
}