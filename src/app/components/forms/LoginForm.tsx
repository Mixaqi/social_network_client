'use client';
import { useLoginUserMutation } from '@/app/api/authApi';
import AuthLabel from '@/app/components/forms/labels/authLabel';
import { EMAIL_REGEX } from '@/app/constants/regexs';
import { useTogglePasswordVisibility } from '@/app/utils/passwordMatchValidator';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AuthButton from '@/app/components/forms/formComponents/authButton';
import AuthInputField from '@/app/components/forms/formComponents/authInputField';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const { showPassword, togglePasswordVisibility } = useTogglePasswordVisibility();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='w-full max-w-md rounded-xl bg-white bg-opacity-80 p-6 shadow-xl sm:p-10'>
      <AuthLabel description='Please log in to your account' iconSrc='/images/user_icon.svg' />

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <AuthInputField
          label='Email'
          id='email'
          type='email'
          placeholder='email_example@gmail.com'
          iconSrc='/images/envelope.svg'
          register={register}
          validation={{
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Invalid email address',
            },
          }}
          error={errors.email}
        />

        <AuthInputField
          label='Password'
          id='password'
          type='password'
          placeholder='Password'
          iconSrc='/images/key.svg'
          register={register}
          validation={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
            maxLength: {
              value: 64,
              message: 'Password cannot exceed 64 characters',
            },
          }}
          error={errors.password}
          showPasswordToggle={true}
          togglePasswordVisibility={togglePasswordVisibility}
          showPassword={showPassword}
        />

        <div className='space-y-1'>
          <AuthButton
            label='Sign in with GitHub'
            onClick={() => {
              const provider = 'github';
              window.location.href = `https://github.com/login/oauth/authorize?client_id=Ov23lixxG2PWaJNVT8qH&redirect_uri=http://localhost:8080/oauth/callback?provider=${provider}&scope=user:email`;
            }}
            className='bg-black hover:bg-gray-800 hover:shadow-xl focus:shadow-xl focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
            iconSrc='/images/github_icon.svg'
          />

          <AuthButton
            label='Sign In'
            type='submit'
            isLoading={isLoading}
            className='bg-green-600 hover:bg-green-700 hover:shadow-xl focus:shadow-xl focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
          />
        </div>
      </form>

      <div className='mt-6 flex items-center justify-center'>
        <Link href='/auth/register' className='font-medium text-green-600 hover:text-green-500'>
          Don't have an account yet?
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
