import { getPagesFromDatabase } from "@/app/notion_api/access";

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id;

    const md = getPagesFromDatabase(id);

    return(
        <>
            <div>My Post: {id}</div>
            <div>{md}</div>
        </>
    )
  }