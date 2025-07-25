'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const pathname = usePathname();
  const navContent = {
    order: {
      name: '주문',
    },
    sale: {
      name: '판매',
    },
    settings: {
      name: '설정',
    },
  };
  return (
    <nav className="fixed top-[60px] h-[60px] bg-[#FFF5E7] w-full flex justify-between items-center">
      {Object.entries(navContent).map(([id, nav]) => (
        <Link
          key={id}
          href={`/store/${id}`}
          className={cn(
            'clickable flex-1 text-center text-gray4 font-bold text-h4',
            pathname.includes(id) && 'text-primary',
          )}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
}
