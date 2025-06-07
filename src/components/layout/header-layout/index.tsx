import { ReactNode } from 'react';
import Link from 'next/link';
import { padding } from '@/styles/constant';
import PreviousButton from './previous-button';

export default function HeaderLayout({
  children,
  title,
  previousPageLink,
  previousButtonClickEvent,
  style,
}: {
  children: ReactNode;
  title: string;
  previousPageLink?: string;
  previousButtonClickEvent?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        padding: `calc(env(safe-area-inset-top) + 10px) ${padding.layoutX} calc(env(safe-area-inset-bottom) + 20px) ${padding.layoutX}`,
        ...style,
      }}
    >
      <header className="fixed h-[48px] w-full px-[20px] py-[10px] bg-white max-w-[450px] left-1/2 -translate-x-1/2 flex items-center top-[env(safe-area-inset-top)]">
        {previousButtonClickEvent && (
          <PreviousButton previousButtonClickEvent={previousButtonClickEvent} />
        )}
        {previousPageLink && (
          <Link href={previousPageLink}>
            <PreviousButton />
          </Link>
        )}
        <strong className="fixed left-1/2 -translate-x-1/2 text-h4 ml-[-5px]">
          {title}
        </strong>
      </header>
      <main className="pt-[48px]">{children}</main>
    </div>
  );
}
