import { getPagesFromDatabase, getPageInfo } from "@/app/notion_api/access";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
      <h1>{pageInfo.title}</h1>
      <h3>投稿日：{pageInfo.date}</h3>
      <h3>著者：{pageInfo.author}</h3>

      <Markdown
        children={md}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
                <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    language={match[1]}
                    style={vscDarkPlus}
                >
                    {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </>
  );
}
            //   <SyntaxHighlighter
            //     {...rest}
            //     PreTag="div"
            //     children={String(children).replace(/\n$/, "")}
            //     language={match[1]}
            //     style={vscDarkPlus}
            //   />