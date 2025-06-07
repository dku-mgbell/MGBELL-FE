'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StepsLayoutProps {
  children: React.ReactNode;
  isNextButtonEnabled?: boolean;
  nextButtonText?: string;
  nextPage?: string;
  onNextButtonClick?: () => void;
  title?: string;
  className?: string;
}

export default function StepsLayout(props: StepsLayoutProps) {
  const router = useRouter();

  const handleNextButtonClick = () => {
    if (props.nextPage) {
      router.push(props.nextPage);
      return;
    }
    if (props.onNextButtonClick) {
      props.onNextButtonClick();
    }
  };

  return (
    <>
      <div
        className={cn('flex flex-col gap-[20px] mt-[20px]', props.className)}
      >
        <strong className="text-b1">{props.title}</strong>
        {props.children}
      </div>
      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] px-[20px] py-[16px] bg-white">
        <Button
          disabled={!props.isNextButtonEnabled}
          onClick={handleNextButtonClick}
        >
          {props.nextButtonText ?? '다음'}
        </Button>
      </footer>
    </>
  );
}
