import Image from 'next/image';
import Link from 'next/link';

const AuthNavbar: React.FC = () => {
  return (
    <nav className='fixed left-0 right-0 top-0 z-20 flex items-center justify-between bg-[#00cba9] px-4 py-2 shadow-md'>
      <div className='flex items-center'>
        <div className='relative h-9 w-9'>
          <Image
            src='/images/sigmaq_logo.png'
            alt='Sigma Icon'
            width={36}
            height={36}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className='flex items-center space-x-1'>
        <Link href='/auth/login'>
          <button className='rounded-md border border-[#00cba9] bg-gray-200 px-4 py-2 font-semibold text-[#00cba9] hover:bg-gray-300'>
            Sign In
          </button>
        </Link>
        <Link href='/auth/register'>
          <button className='rounded-md border border-[#00cba9] bg-gray-200 px-4 py-2 font-semibold text-[#00cba9] hover:bg-gray-300'>
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavbar;
