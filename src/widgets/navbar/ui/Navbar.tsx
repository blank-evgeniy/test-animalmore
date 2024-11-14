import Link from 'next/link';
import { NavLink, NavLinks } from '../model/links';
interface NavbarProps {
  links?: NavLink[];
  className?: string;
}

export const Navbar = ({ links = NavLinks, className }: NavbarProps) => {
  return (
    <nav className={className}>
      <ul className="flex gap-6 overflow-x-auto">
        {links.map((link) => (
          <li key={link.name}>
            <Link className="whitespace-nowrap text-[22px]" href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
