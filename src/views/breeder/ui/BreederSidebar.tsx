import { twMerge } from 'tailwind-merge';
import { SidebarLink, SidebarLinks } from '../model/links';
import Link from 'next/link';
import Badge from '@/shared/ui/badge/Badge';

interface BreederSidebarProps {
  links?: SidebarLink[];
  className?: string;
}

const BreederSidebar = ({
  links = SidebarLinks,
  className,
}: BreederSidebarProps) => {
  const commentsCount = 5;

  return (
    <aside className={twMerge('md:w-[200px]', className)}>
      <nav className="flex gap-2 overflow-x-auto md:flex-col">
        {links.map((link) => (
          <Link
            className="text-[22px] font-semibold"
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
        <Link
          className="flex items-center gap-1 text-[22px] font-semibold"
          href={'/'}
        >
          Отзывы
          <Badge>{commentsCount}</Badge>
        </Link>
      </nav>
    </aside>
  );
};

export default BreederSidebar;
