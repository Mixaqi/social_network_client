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
    {iconSrc && <img src={iconSrc} alt='Button Icon' className='mr-2 h-5 w-5' />}
    {label}
    {isLoading ? 'Loading...' : children}
  </button>
);

export default AuthButton;
