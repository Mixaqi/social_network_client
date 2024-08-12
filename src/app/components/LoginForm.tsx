import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 px-4'>
      <div className='w-full max-w-md rounded-xl bg-white bg-opacity-80 p-6 sm:p-10 shadow-xl'>
        <form action='#'>
          <div className='space-y-6'>
            <div className='flex items-center space-x-3'>
              <img
                src='/images/envelope.svg'
                alt='Email Icon'
                className='h-6 w-6 text-gray-500'
                style={{ marginTop: '0.8rem' }}
              />
              <div className='flex-1'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <div className='relative mt-1 rounded-md shadow-sm'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='block w-full rounded-md border-gray-300 text-sm focus:border-green-500 focus:ring-green-500'
                    placeholder='email_example@gmail.com'
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center space-x-3'>
              <img
                src='/images/key.svg'
                alt='Password Icon'
                className='h-6 w-6 text-gray-500'
                style={{ marginTop: '0.8rem' }}
              />
              <div className='flex-1'>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                  Password
                </label>
                <div className='relative mt-1 rounded-md shadow-sm'>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    required
                    className='block w-full rounded-md border-gray-300 text-sm focus:border-green-500 focus:ring-green-500'
                    placeholder='Password'
                  />
                </div>
              </div>
            </div>
            <div>
              <a
                href='#'
                className='flex justify-center items-center rounded-md bg-green-600 px-4 py-2 font-semibold text-white shadow-lg outline-none transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-xl focus:shadow-xl focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
              >
                Sign In
              </a>
            </div>
          </div>
        </form>
        <div className='flex justify-center items-center mt-6'>
          <a href="#" className="font-medium text-green-600 hover:text-green-500">Already have an account?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
