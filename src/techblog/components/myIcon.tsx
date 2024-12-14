export default function MyIcon() {
  return(
    <div className='flex-shrink-0 w-full md:w-1/4'>
      <div className='sticky top-4 mx-auto text-center block max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
        <span className='block text-2xl'>ryutopia</span>
        <a href='/about'>
          <img src='/ryu_circle.png' width='30%' className='mx-auto'></img>
        </a>
        <span className='block font-bold text-xl'>About</span>
        <a href='https://x.com/?lang=ja'><span className='block bg-red-200 hover:bg-red-400 w-full'>X</span></a>
        <a href='https://github.com/Ryn0suke'><span className='block bg-blue-200 hover:bg-blue-400 w-full'>GitHub</span></a>
        <a href='https://ryueng.com'><span className='block bg-green-200 hover:bg-green-400 w-full'>English App</span></a>
        <a href='/about'><span className='block bg-yellow-200 hover:bg-yellow-400 w-full'>About me</span></a>
      </div>
    </div>
  );
}