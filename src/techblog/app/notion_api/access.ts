import { NotionProperties, NotionTag } from '../types/notion';

import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({notionClient: notion});

//データベースに登録されているページの情報を取得
//記事のタイトル, 作成日, 最終更新日, プライベートかどうか,
export async function getDataFromDatabase(): Promise<[NotionProperties[], string[]]> {
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID !== undefined ? process.env.DATABASE_ID : '',
  });

  //ブログのタグのリストを作るために作成
  //重複を許したくないためSetを使用する
  const tags = new Set<string>();

  const postsProperties = response.results.map((value) => {
    try {
      if('properties' in value) {
        if(!('select' in value.properties.author)) return null;
        if(value.properties.author.select === null) return null;
        if(!('name' in value.properties.author.select)) return null;
        if(!('date' in value.properties.createdate)) return null;
        if(value.properties.createdate.date === null) return null;
        if(!('number' in value.properties.private)) return null;
        if(!('title' in value.properties.title)) return null;
        if(!('multi_select' in value.properties.types)) return null;


        //ブログ記事の基本情報
        const id:string = value.id;
        const name:string = value.properties.author.select.name;
        const createdate:string = value.properties.createdate.date.start;
        //const isPrivate:boolean = value.properties.private.number;

        let title:string;
        if (Array.isArray(value.properties.title.title)) {
          title = value.properties.title.title[0]?.plain_text || '';
        } else {
          title = ''; // 配列でない場合のデフォルト値
        }

        let types:string[];
        if (Array.isArray(value.properties.types.multi_select)) {
          types = value.properties.types.multi_select.map((item:NotionTag) => item.name);
        } else {
          types = []; // 配列でない場合のデフォルト値
        } 
        //ブログ記事のタグ
        //const types:string[] = value.properties.types.multi_select.map((item:NotionTag) => item.name);
                
        types.forEach((type) => tags.add(type));

        return {id, name, createdate, title, types};
      }


    } catch (e:unknown) {
      console.error(e);
      return null;
    }
  });

  const filteredPosts = postsProperties.filter((item): item is NotionProperties => item !== null);

  return [filteredPosts, Array.from(tags)];
}

export async function getPagesFromDatabase(id:string) {
  const mdblocks = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}

type NotionPostInfo = {
    title:  string | undefined;
    date: string | undefined;
    author: string | undefined
  };

export async function getPageInfo(pageId: string): Promise<NotionPostInfo> {
  const response = await notion.pages.retrieve({ page_id: pageId });

  if('properties' in response) {
    const pageInfo = response.properties;

    if(!('title' in pageInfo.title)) return {title:'', date: '', author: ''};
    if(!('date' in pageInfo.createdate)) return {title:'', date: '', author: ''};
    if(!('select' in pageInfo.author)) return {title:'', date: '', author: ''};


    const title = pageInfo.title.title[0]?.plain_text;
    const date = pageInfo.createdate.date?.start;
    const author = pageInfo.author.select?.name;
    return { title, date, author };
  }
  return { title: '', date: '', author: '' };
}