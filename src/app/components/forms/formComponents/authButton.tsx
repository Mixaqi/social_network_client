import Image from 'next/image';

interface AuthButtonProps {
  label: string;
  iconSrc?: string;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  children?: React.ReactNode;
  className: string;
  onClick?: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  label,
  iconSrc,
  type = 'button',
  isLoading,
  children,
  className,
  onClick,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`flex w-full items-center justify-center rounded-md px-4 py-2 font-semibold text-white shadow-lg outline-none transition duration-150 ease-in-out ${className}`}
  >
    {iconSrc && (
      <div className='relative mr-2 h-5 w-5'>
        <Image src={iconSrc} alt='Button Icon' fill style={{ objectFit: 'contain' }} priority />
      </div>
    )}
    {label}
    {isLoading ? 'Loading...' : children}
  </button>
);

export default AuthButton;
