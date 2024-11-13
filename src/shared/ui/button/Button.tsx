import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ className, children, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex content-center items-center gap-3 rounded-lg bg-gradient-to-r from-pink to-yellow px-4 py-2 text-white',
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
