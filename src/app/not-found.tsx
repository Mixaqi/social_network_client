'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Custom404: React.FC = () => {
  const router = useRouter();

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[#00cba9] text-center text-white'>
      <h1 className='text-6xl font-bold'>404</h1>
      <p className='mt-4 text-lg'>Oops! The page you're looking for doesn't exist.</p>
      <Link
        href='/'
        className='mt-6 rounded-md bg-white px-4 py-2 text-lg font-semibold text-[#00cba9] shadow-md transition hover:bg-gray-100'
      >
        Go Home
      </Link>
      <button
        onClick={() => router.back()}
        className='mt-2 text-lg font-semibold text-white underline transition hover:text-gray-200'
      >
        Go Back
      </button>
    </div>
  );
};

export default Custom404;
