import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/button/button';
import {
  signUpInfoDefaultValue,
  useSignUpInfoStore,
} from '@/hooks/stores/useSignUpInfoStore';
import { content } from './styles.css';
import { styles } from '../(steps)/styles.css';

export default function SignUpLayout({
  children,
  isNextStepAllowed,
  onNextStep,
  buttonContent,
  title,
}: {
  children: ReactNode;
  isNextStepAllowed: boolean;
  onNextStep: () => void;
  buttonContent?: string;
  title: string;
}) {
  const { signUpInfo } = useSignUpInfoStore();
  const router = useRouter();

  useEffect(() => {
    if (signUpInfo === signUpInfoDefaultValue) {
      router.push('/sign-up');
    }
  }, []);

  return (
    <>
      <div className={content}>
        <strong className={styles.title}>{title}</strong>
        {children}
      </div>
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
