import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export enum ButtonSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
}

const Button = ({
  className,
  children,
  size = ButtonSize.MD,
  ...otherProps
}: ButtonProps) => {
  const twSize =
    size === ButtonSize.LG
      ? 'px-8 py-4'
      : size === ButtonSize.MD
        ? 'px-6 py-3'
        : 'px-4 py-2';

  return (
    <button
      className={twMerge(
        'flex content-center items-center gap-3 rounded-lg bg-gradient-to-r from-pink to-yellow text-white hover:opacity-90',
        twSize,
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
