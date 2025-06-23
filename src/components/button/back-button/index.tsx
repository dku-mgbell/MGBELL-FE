'use client';

import { useRouter } from 'next/navigation';
import { cva } from 'class-variance-authority';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import { cn } from '@/lib/utils';
import IconButton from '../icon-button';

const buttonVariants = cva(
  'clickable absolute left-[15px] top-[calc(12px+env(safe-area-inset-top))] z-[999] w-[18px] h-[24px] bg-transparent',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        white: 'bg-white w-[42px] h-[42px] [&>svg]:ml-[-3px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export default function BackButton({
  link,
  onClick,
  variant = 'default',
}: {
  link?: string;
  onClick?: () => void;
  variant?: 'default' | 'white';
}) {
  const route = useRouter();

  const handleBackButtonClick = () => {
    if (link) {
      route.push(link);
    } else if (onClick) {
      onClick();
    } else {
      route.back();
    }
  };

  return (
    <IconButton
      className={cn(buttonVariants({ variant }))}
      onClick={handleBackButtonClick}
      icon={<ChevronLeftIcon width={18} height={17} />}
    />
  );
}
