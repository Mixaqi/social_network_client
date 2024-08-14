'use client';
import React from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EMAIL_REGEX } from '@/app/constants/regexs';
import { useTogglePasswordVisibility } from '@/app/utils/passwordMatchValidator';

interface RegisterFormData {
  email: string;
  password: string;
  confirmedPassword: string;
}

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const { showPassword, togglePasswordVisibility } = useTogglePasswordVisibility();

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
  };

  const validateConfirmedPassword = (value: string) => {
    return value === watch('password') || 'Passwords do not match';
  };

  return (
    <div className='w-full max-w-md rounded-xl bg-white bg-opacity-80 p-6 shadow-xl sm:p-10'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-6'>
          <div>
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
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: EMAIL_REGEX,
                        message: 'Invalid email address',
                      },
                    })}
                    type='email'
                    id='email'
                    name='email'
                    className={`block w-full rounded-md border text-sm focus:border-green-500 focus:ring-green-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder='email_example@gmail.com'
                  />
                </div>
                {errors.email && (
                  <p className='mt-2 text-sm text-red-600'>{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>
          <div>
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
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long',
                      },
                    })}
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    name='password'
                    className={`block w-full rounded-md border text-sm focus:border-green-500 focus:ring-green-500 ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder='Password'
                  />
                  <button
                    type='button'
                    onClick={togglePasswordVisibility}
                    className='absolute inset-y-0 right-0 flex items-center pr-3'
                  >
                    <img
                      src={`/images/${showPassword ? 'eye_slash.svg' : 'eye.svg'}`}
                      alt='Toggle Password Visibility'
                      className='h-6 w-6 text-gray-500'
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className='mt-2 text-sm text-red-600'>{errors.password.message}</p>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center space-x-3'>
              <img
                src='/images/key.svg'
                alt='Confirmed Password Icon'
                className='h-6 w-6 text-gray-500'
                style={{ marginTop: '0.8rem' }}
              />
              <div className='flex-1'>
                <label htmlFor='confirmedPassword' className='block text-sm font-medium text-gray-700'>
                  Confirm Password
                </label>
                <div className='relative mt-1 rounded-md shadow-sm'>
                  <input
                    {...register('confirmedPassword', {
                      required: 'Confirming password is required',
                      validate: validateConfirmedPassword,
                    })}
                    type={showPassword ? 'text' : 'password'}
                    id='confirmedPassword'
                    name='confirmedPassword'
                    className={`block w-full rounded-md border text-sm focus:border-green-500 focus:ring-green-500 ${
                      errors.confirmedPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder='Confirm Password'
                  />
                  <button
                    type='button'
                    onClick={togglePasswordVisibility}
                    className='absolute inset-y-0 right-0 flex items-center pr-3'
                  >
                    <img
                      src={`/images/${showPassword ? 'eye_slash.svg' : 'eye.svg'}`}
                      alt='Toggle Password Visibility'
                      className='h-6 w-6 text-gray-500'
                    />
                  </button>
                </div>
                {errors.confirmedPassword && (
                  <p className='mt-2 text-sm text-red-600'>{errors.confirmedPassword.message}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full items-center justify-center rounded-md bg-green-600 px-4 py-2 font-semibold text-white shadow-lg outline-none transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-xl focus:shadow-xl focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>

      <div className='mt-6 flex items-center justify-center'>
        <Link href='/auth/login' className='font-medium text-green-600 hover:text-green-500'>
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
