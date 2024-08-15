import Image from 'next/image';

interface AuthLabelProps {
  description: string;
  iconSrc?: string;
}

const AuthLabel: React.FC<AuthLabelProps> = ({ description, iconSrc }) => {
  return (
    <div className='mb-3 flex items-center justify-center space-x-2'>
      {iconSrc && (
        <div className='relative h-8 w-8'>
          <Image src={iconSrc} alt='Label Icon' layout='fixed' width={32} height={32} objectFit='contain' />
        </div>
      )}
      <p className='text-lg text-black'>{description}</p>
    </div>
  );
};

export default AuthLabel;
