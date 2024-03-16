import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col gap-2 p-5 max-w-xs w-full rounded-lg bg-[#210070]'>
        <div className='flex flex-col items-center justify-center'>
          <Image
            src='/logo_white.png'
            alt='Cirque Physio Logo'
            className='dark:invert'
            width={150}
            height={50}
            priority
          />
        </div>
        <div className='text-center text-xl font-bold italic tracking-wide my-4 text-[#2ee2ff]'>
          <h1>WEEKLY SCHEDULE</h1>
        </div>
        <div>
          <Link
            href='/'
            className='text-[#210070] font-bold tracking-wide bg-[#2ee2ff] my-4 p-3 rounded-lg block'
          >
            Monday:
          </Link>
        </div>
        <div>
          <Link
            href='/'
            className='text-[#210070] font-bold tracking-wide bg-[#2ee2ff] my-4 p-3 rounded-lg block'
          >
            Tuesday:
          </Link>
        </div>
        <div>
          <Link
            href='/'
            className='text-[#210070] font-bold tracking-wide bg-[#2ee2ff] my-4 p-3 rounded-lg block'
          >
            Wednesday:
          </Link>
        </div>
        <div>
          <Link
            href='/'
            className='text-[#210070] font-bold tracking-wide bg-[#2ee2ff] my-4 p-3 rounded-lg block'
          >
            Thursday:
          </Link>
        </div>
      </div>
    </main>
  );
}
