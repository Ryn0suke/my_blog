import type { Metadata } from 'next';
import './globals.css';

import Header from '@/components/header';
import ButtonList from '@/components/buttonList';
import MyIcon from '@/components/myIcon';

import NotionInfoProvider from './providers/notionInfoProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //ButtonListコンポーネントの中のボタンを動的に変更するため、Layoutでデータをフェッチする

  return (
    <html lang='ja'>
      <body className='bg-emerald-100'>
        <div>
          {/* ヘッダー部分 */}
          <Header />

          <NotionInfoProvider>
            {/* メニューボタン */}
            <ButtonList/>
            <div className='flex flex-col md:flex-row justify-center gap-4 p-4'>
              {/* 中身の要素が入る部分 */}
              <div className='flex-1'>{children}</div>

              {/* アイコン */}
              <MyIcon />

            </div>
          </NotionInfoProvider>

        </div>
      </body>
    </html>
  );
}