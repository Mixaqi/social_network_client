'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Custom404: React.FC = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#00cba9] text-white text-center'>
      <h1 className='text-6xl font-bold'>404</h1>
      <p className='text-lg mt-4'>Oops! The page you're looking for doesn't exist.</p>
      <Link
        href='/'
        className='mt-6 text-lg font-semibold bg-white text-[#00cba9] px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition'
      >
        Go Home
      </Link>
      <button
        onClick={() => router.back()}
        className='mt-2 text-lg font-semibold text-white underline hover:text-gray-200 transition'
      >
        Go Back
      </button>
    </div>
  );
};

export default Custom404;
