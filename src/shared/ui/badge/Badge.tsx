import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={twMerge(
        'inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-accent text-sm text-white',
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
