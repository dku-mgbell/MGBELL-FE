import { ReactNode } from 'react';
import Link from 'next/link';
import { padding } from '@/styles/constant';
import PreviousButton from './previous-button';

export default function HeaderLayout({
  children,
  title,
  previousPageLink,
  previousButtonClickEvent,
  paddingBottom,
}: {
  children: ReactNode;
  title: string;
  previousPageLink?: string;
  previousButtonClickEvent?: () => void;
  paddingBottom?: boolean;
}) {
  return (
    <div
      style={{
        padding: `calc(env(safe-area-inset-top) + 10px) ${padding.layoutX} ${paddingBottom === false ? '0px' : 'calc(env(safe-area-inset-bottom) + 20px)'} ${padding.layoutX}`,
      }}
    >
      <header className="fixed h-[48px] w-full ml-[-20px] px-[20px] py-[10px] bg-white max-w-[450px] mx-auto flex items-center top-[env(safe-area-inset-top)]">
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
      <main className="pt-[24px]">{children}</main>
    </div>
  );
}
