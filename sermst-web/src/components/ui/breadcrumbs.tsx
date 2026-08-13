import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 overflow-x-auto whitespace-nowrap pb-2 md:pb-0 no-scrollbar">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 shrink-0">
          {idx > 0 && <ChevronRight className="w-4 h-4 text-slate-300" />}
          {idx === items.length - 1 ? (
            <span className="text-brand-900 font-bold">{item.label}</span>
          ) : (
            <Link 
              href={item.href} 
              className="hover:text-accent-pink transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
