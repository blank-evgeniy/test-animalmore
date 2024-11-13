import Link from 'next/link';
import { NavLink, NavLinks } from '../model/links';
import { twMerge } from 'tailwind-merge';

interface NavbarProps {
  links?: NavLink[];
  className?: string;
}

export const Navbar = ({ links = NavLinks, className }: NavbarProps) => {
  return (
    <nav className={twMerge('flex gap-6', className)}>
      {links.map((link) => (
        <Link className="text-[22px]" key={link.name} href={link.href}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
