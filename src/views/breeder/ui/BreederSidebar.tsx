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
    <aside className={twMerge('mt-3 md:w-[200px]', className)}>
      <nav>
        <ul className="flex gap-2 overflow-x-auto md:flex-col">
          {links.map((link) => (
            <li key={link.name}>
              <Link className="text-[22px] font-semibold" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            className="flex items-center gap-1 text-[22px] font-semibold"
            href={'/'}
          >
            Отзывы
            <Badge>{commentsCount}</Badge>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default BreederSidebar;
