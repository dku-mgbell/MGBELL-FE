'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/button/button';
import { styles } from './styles.css';

export default function StepsLayout({
  children,
  isNextStepAllowed,
  onNextStep,
  buttonContent,
  title,
  initialRoute,
  isValueEmpty,
}: {
  children: ReactNode;
  isNextStepAllowed: boolean;
  onNextStep: () => void;
  buttonContent?: string;
  title?: string;
  initialRoute?: string;
  isValueEmpty?: boolean;
}) {
  const router = useRouter();

  useEffect(() => {
    if (isValueEmpty === true && initialRoute) {
      router.push(initialRoute);
    }
  }, []);

  return (
    <>
      <div className={styles.content}>
        {title && <strong className={styles.title}>{title}</strong>}
        {children}
      </div>
      {!isNextStepAllowed ? (
        <Button value={buttonContent ?? '다음'} theme="inactive" />
      ) : (
        <Button value={buttonContent ?? '다음'} onClick={onNextStep} />
      )}
    </>
  );
}
