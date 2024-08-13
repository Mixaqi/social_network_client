import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center bg-gray-100'>
      <div className="absolute inset-0 z-0 bg-[url('/images/wave.svg')] bg-contain bg-fixed bg-bottom bg-no-repeat"></div>
      <div className='relative z-10 w-full max-w-md'>{children}</div>
    </div>
  );
};

export default AuthLayout;
