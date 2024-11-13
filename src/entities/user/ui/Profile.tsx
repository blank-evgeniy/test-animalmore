import Image from 'next/image';
import avatarImage from '@/shared/assets/mockImages/Avatar.jpg';
import { twMerge } from 'tailwind-merge';

interface ProfileProps {
  className?: string;
}

export const Profile = ({ className }: ProfileProps) => {
  //вместо данных с бэка
  const user = {
    image: avatarImage,
    name: 'Инесса',
  };

  return (
    <div className={twMerge('flex items-center gap-2', className)}>
      <Image
        className="h-10 w-10 rounded-[13px] object-cover"
        src={user.image}
        alt={user.name}
      />
      <p className="text-text-dark font-medium">{user.name}</p>
    </div>
  );
};
