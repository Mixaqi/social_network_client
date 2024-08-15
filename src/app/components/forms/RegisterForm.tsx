'use client';
import { EMAIL_REGEX } from '@/app/constants/regexs';
import { useTogglePasswordVisibility } from '@/app/utils/passwordMatchValidator';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AuthButton from '@/app/components/forms/formComponents/authButton';
import AuthInputField from '@/app/components/forms/formComponents/authInputField';
import AuthLabel from '@/app/components/forms/labels/authLabel';

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
      <AuthLabel description='Create your account' iconSrc='/images/user_icon.svg' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-6'>
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
            }}
            error={errors.password}
            showPasswordToggle={true}
            togglePasswordVisibility={togglePasswordVisibility}
            showPassword={showPassword}
          />

          <AuthInputField
            label='Confirm Password'
            id='confirmedPassword'
            type='password'
            placeholder='Confirm Password'
            iconSrc='/images/key.svg'
            register={register}
            validation={{
              required: 'Confirming password is required',
              validate: validateConfirmedPassword,
            }}
            error={errors.confirmedPassword}
            showPasswordToggle={true}
            togglePasswordVisibility={togglePasswordVisibility}
            showPassword={showPassword}
          />

          <div className='space-y-2'>
            <AuthButton
              label='Sign up with GitHub'
              onClick={() => console.log('GitHub Sign up')}
              className='bg-black hover:bg-gray-800 hover:shadow-xl focus:shadow-xl focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
              iconSrc='/images/github_icon.svg'
            />

            <AuthButton
              label='Sign Up'
              type='submit'
              className='bg-green-600 hover:bg-green-700 hover:shadow-xl focus:shadow-xl focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
            />
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
