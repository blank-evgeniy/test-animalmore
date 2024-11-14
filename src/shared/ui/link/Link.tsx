import Link from 'next/link';

interface AppLinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

export const AppLink = ({ children, href }: AppLinkProps) => {
  return (
    <Link
      className="text-gray transition-colors hover:text-pink-accent"
      href={href}
    >
      {children}
    </Link>
  );
};
