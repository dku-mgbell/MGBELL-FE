'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/button/text-button/button';
import { styles } from './styles.css';

export default function StepsLayout({
  children,
  isNextStepAllowed,
  onNextStep,
  buttonContent,
  title,
  initialRoute,
  isValueEmpty,
  theme,
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
  theme?: 'primary' | 'secondary';
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
        {isNextStepAllowed === false ? (
          <Button
            value={buttonContent ?? '다음'}
            theme={theme ? `inactive-${theme}` : `inactive-primary`}
          />
        ) : (
          <Button
            value={buttonContent ?? '다음'}
            onClick={onNextStep}
            theme={theme ?? 'primary'}
          />
        )}
      </div>
    </div>
  );
}
