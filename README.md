# Notion Blog
Notion APIとNext.jsを使ったブログサイト

![image](https://github.com/user-attachments/assets/c9a53dd9-7b61-4160-94d3-bd4b3eb9eee2)


## 機能
- Notionのデータベースから作成したページをフロントエンドで受け取り、表示する  
  [ブログサイトはこちら](https://my-blog-27z2.vercel.app/)

## 使用したライブラリ
### [notion-to-md](https://github.com/souvikinator/notion-to-md)
Notionのページをマークダウンにパースするためのライブラリです。

### [react-markdown](https://github.com/remarkjs/react-markdown)
マークダウンをHTMLにパースするためのライブラリです。

### [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
マークダウンのソースコードの部分を、VSCode風に装飾してくれるライブラリです。

### [@notionhq/client](https://github.com/makenotion/notion-sdk-js)
Notion APIにリクエストを送る際のクライアントです。
