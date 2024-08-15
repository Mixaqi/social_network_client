interface AuthLabelProps {
  description: string;
  iconSrc?: string;
}

const AuthLabel: React.FC<AuthLabelProps> = ({ description, iconSrc }) => {
  return (
    <div className='flex items-center justify-center space-x-2 mb-3'>
      {iconSrc && (
        <img src={iconSrc} alt='Label Icon' className='h-8 w-8' />
      )}
      <p className='text-black text-lg'>{description}</p>
    </div>
  );
};

export default AuthLabel;
