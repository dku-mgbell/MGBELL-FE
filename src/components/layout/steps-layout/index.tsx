'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { styles } from './styles.css';

export default function StepsLayout({
  children,
  isNextStepAllowed,
  onNextStep,
  buttonContent,
  title,
  initialRoute,
  isValueEmpty,
  isPadding,
  isFullHeightContent,
}: {
  children: ReactNode;
  isNextStepAllowed?: boolean;
  onNextStep: () => void;
  buttonContent?: string;
  title?: string;
  initialRoute?: string;
  isValueEmpty?: boolean;
  isPadding?: boolean;
  isFullHeightContent?: boolean;
}) {
  const router = useRouter();

  useEffect(() => {
    if (isValueEmpty === true && initialRoute) {
      router.push(initialRoute);
    }
  }, []);

  return (
    <div className={styles.container({ isPadding })}>
      <div
        className={styles.content}
        style={{ flex: isFullHeightContent ? 1 : 'none' }}
      >
        {title && <strong className={styles.title}>{title}</strong>}
        {children}
      </div>
      <div className={styles.buttonContainer}>
        <Button
          disabled={isNextStepAllowed === false}
          onClick={onNextStep}
          type="submit"
        >
          {buttonContent ?? '다음'}
        </Button>
      </div>
    </div>
  );
}
