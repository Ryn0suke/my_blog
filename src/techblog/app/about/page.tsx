export default function Page() {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>About Me</h1>
        
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-700 mb-4'>基本情報</h2>
        <p className='text-gray-600 mb-2'><strong>名前:</strong> ryutopia</p>
        <p className='text-gray-600 mb-2'><strong>専攻:</strong> セキュリティ情報学</p>
        <p className='text-gray-600 mb-2'><strong>研究:</strong> 位置情報のプライバシーに関する研究</p>
        <p className='text-gray-600'><strong>趣味:</strong> 麻雀・筋トレ</p>
      </section>
  
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-700 mb-4'>プログラミング経験</h2>
          
        <article className='mb-6'>
          <h3 className='text-xl font-medium text-gray-800'>英単語学習アプリ</h3>
          <p className='text-gray-600 mb-2'>
            <a href='https://ryueng.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                英単語学習アプリ
            </a>を作成しました。フロントエンドに<strong>React</strong>と<strong>TypeScript</strong>、バックエンドに<strong>Ruby on Rails</strong>を使用して開発しました。
              自宅のラズパイをWebサーバーにして運用しています。
          </p>
          <img src='ラズパイ.jpg' alt='ラズパイの写真' className='rounded-lg shadow-md max-w-full h-auto mt-4' />
        </article>
  
        <article className='mb-6'>
          <h3 className='text-xl font-medium text-gray-800'>ブログサイト</h3>
          <p className='text-gray-600'>
            <strong>Next.js</strong>と<strong>TypeScript</strong>を使用して作成しました。
              Notion APIを活用し、Notionからマークダウンファイルを読み込んで公開しています。
          </p>
        </article>
  
        <article>
          <h3 className='text-xl font-medium text-gray-800'>その他</h3>
          <p className='text-gray-600'>
              研究では<strong>Python</strong>を使ったデータ分析や機械学習を行っています。
              また、アルバイトでは<strong>Python</strong>や<strong>C++</strong>を使って研究コードを書いています。
          </p>
        </article>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-700 mb-4'>資格</h2>
        <article className='mb-6'>
          <ul className='list-disc list-inside text-gray-600'>
            <li className='mb-2'>
              <strong>TOEIC公開テスト:</strong> 895点取得（2023年3月）
            </li>
            <li>
              <strong>応用情報技術者試験:</strong> 合格（2024年7月）
            </li>
          </ul>
        </article>
      </section>

    </div>
  );
}
  