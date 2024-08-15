interface AuthLabelProps {
  description: string;
  iconSrc?: string;
}

const AuthLabel: React.FC<AuthLabelProps> = ({ description, iconSrc }) => {
  return (
    <div className='mb-3 flex items-center justify-center space-x-2'>
      {iconSrc && <img src={iconSrc} alt='Label Icon' className='h-8 w-8' />}
      <p className='text-lg text-black'>{description}</p>
    </div>
  );
};

export default AuthLabel;
