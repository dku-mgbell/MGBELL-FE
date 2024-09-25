import { ReactNode } from 'react';
import Button from '@/components/button/button';
import { content } from './styles.css';

export default function SignUpLayout({
  children,
  isNextStepAllowed,
  onNextStep,
  buttonContent,
}: {
  children: ReactNode;
  isNextStepAllowed: boolean;
  onNextStep: () => void;
  buttonContent?: string;
}) {
  return (
    <>
      <div className={content}>{children}</div>
      {!isNextStepAllowed ? (
        <Button
          value={buttonContent ?? '다음'}
          theme="inactive"
          onClick={() => {}}
        />
      ) : (
        <Button value={buttonContent ?? '다음'} onClick={onNextStep} />
      )}
    </>
  );
}
