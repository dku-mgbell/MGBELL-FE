'use client';

import { useRouter } from 'next/navigation';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import IconButton from '../icon-button';

export default function BackButton({ link }: { link?: string }) {
  const route = useRouter();

  const handleBackButtonClick = () => {
    if (link) {
      route.push(link);
    } else {
      route.back();
    }
  };

  return (
    <IconButton
      className="absolute left-[15px] top-[calc(12px+env(safe-area-inset-top))] z-[999] w-[18px] h-[24px] bg-transparent"
      onClick={handleBackButtonClick}
      icon={<ChevronLeftIcon width={18} height={17} />}
    />
  );
}
