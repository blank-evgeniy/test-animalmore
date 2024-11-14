import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { twMerge } from 'tailwind-merge';

interface SlideButtonProps {
  className?: string;
  onClick?: () => void;
  direction?: 'right' | 'left';
}

const SlideButton = ({
  onClick,
  direction = 'left',
  className,
}: SlideButtonProps) => {
  let twStyle =
    'flex h-8 w-8 items-center justify-center rounded-full bg-white z-10';

  if (direction === 'right') {
    twStyle = twMerge(twStyle, 'rotate-180');
  }

  return (
    <button
      onClick={onClick}
      className={twMerge(twStyle, className)}
      style={{
        filter: 'drop-shadow(0px 0px 3.20412px rgba(0, 0, 0, 0.15))',
      }}
    >
      <ArrowIcon />
    </button>
  );
};

export default SlideButton;
