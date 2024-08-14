import { useState, MouseEvent } from 'react';

export const useTogglePasswordVisibility = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return { showPassword, togglePasswordVisibility };
};
