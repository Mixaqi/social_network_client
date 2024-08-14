import React from 'react';
import { FieldError } from 'react-hook-form';

interface AuthInputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  iconSrc: string;
  register: Function;
  validation?: Record<string, any>;
  error?: FieldError;
  showPasswordToggle?: boolean;
  togglePasswordVisibility?: React.MouseEventHandler<HTMLButtonElement>;
  showPassword?: boolean;
}

const AuthInputField: React.FC<AuthInputFieldProps> = ({
  label,
  id,
  type,
  placeholder,
  iconSrc,
  register,
  validation,
  error,
  showPasswordToggle,
  togglePasswordVisibility,
  showPassword,
}) => (
  <div className='relative mb-4'>
    <label htmlFor={id} className='mb-1 block text-sm font-medium text-gray-700'>
      {label}
    </label>
    <div className='relative'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <img src={iconSrc} alt={`${label} Icon`} className='h-5 w-5 text-gray-400' />
      </div>
      <input
        {...register(id, validation)}
        type={showPasswordToggle && showPassword ? 'text' : type}
        id={id}
        name={id}
        className={`block w-full rounded-md border py-2 pl-10 pr-10 text-sm focus:border-green-500 focus:ring-0 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder={placeholder}
      />
      {showPasswordToggle && (
        <button
          type='button'
          onClick={togglePasswordVisibility}
          className='absolute inset-y-0 right-0 flex items-center pr-3'
        >
          <img
            src={showPassword ? '/images/eye_slash.svg' : '/images/eye.svg'}
            alt='Toggle Password Visibility'
            className='h-5 w-5 text-gray-500'
          />
        </button>
      )}
    </div>
    {error && <p className='mt-1 text-xs text-red-600'>{error.message}</p>}
  </div>
);

export default AuthInputField;
