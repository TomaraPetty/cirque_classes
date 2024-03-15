import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col gap-2 p-5 max-w-xs bg-slate-800'>
        <div className='text-center my-4 text-white'>
          <h1>Cirque Classes</h1>
        </div>
        <div>
          <Link
            href='/'
            className='text-white bg-slate-900 my-4 p-3 rounded-lg block'
          >
            Monday
          </Link>
        </div>
        <div>
          <Link
            href='/'
            className='text-white bg-slate-900 my-4 p-3 rounded-lg block'
          >
            Tuesday
          </Link>
        </div>
        <div>
          <Link
            href='/'
            className='text-white bg-slate-900 my-4 p-3 rounded-lg block'
          >
            Wednesday
          </Link>
        </div>
        <div>
          <Link
            href='/'
            className='text-white bg-slate-900 my-4 p-3 rounded-lg block'
          >
            Thursday
          </Link>
        </div>
      </div>
    </main>
  );
}
