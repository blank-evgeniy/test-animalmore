import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
  href: string;
  label: string;
}

interface BreadcrumbsProps {
  className: string;
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <nav className={className} aria-label="Breadcrumb">
      <ol className="text-lg text-text-secondary">
        {items.map((item, index) => (
          <li key={index} className="inline">
            {index > 0 && ' / '}
            <Link href={item.href} className="">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
