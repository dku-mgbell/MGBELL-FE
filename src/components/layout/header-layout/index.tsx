import { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { padding } from '@/styles/constant';
import PreviousButton from './previous-button';

interface HeaderLayoutProps {
  children: ReactNode;
  title: string;
  previousPage?: string;
  previousButtonClickEvent?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

export default function HeaderLayout(props: HeaderLayoutProps) {
  return (
    <div
      style={{
        padding: `calc(env(safe-area-inset-top) + 10px) ${padding.layoutX} calc(env(safe-area-inset-bottom) + 20px) ${padding.layoutX}`,
        ...props.style,
      }}
    >
      <header className="fixed h-[48px] w-full px-[20px] py-[10px] bg-white max-w-[450px] left-1/2 -translate-x-1/2 flex items-center top-[env(safe-area-inset-top)]">
        {props.previousButtonClickEvent && (
          <PreviousButton
            previousButtonClickEvent={props.previousButtonClickEvent}
          />
        )}
        {props.previousPage && (
          <Link href={props.previousPage}>
            <PreviousButton />
          </Link>
        )}
        <strong className="fixed left-1/2 -translate-x-1/2 text-h4 ml-[-5px]">
          {props.title}
        </strong>
      </header>
      <main className={cn('pt-[38px]', props.className)}>{props.children}</main>
    </div>
  );
}
