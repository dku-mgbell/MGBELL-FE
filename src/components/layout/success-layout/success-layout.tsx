import { ReactNode } from 'react';
import CheckIcon from '@/assets/svg/CheckIcon';
import * as styles from './styles.css';

export default function SuccessLayout({
  title,
  message,
  theme,
}: {
  title: string;
  message: string | ReactNode;
  theme?: 'primary' | 'secondary';
}) {
  return (
    <div className={styles.container}>
      <CheckIcon theme={theme ?? 'primary'} />
      <h2>
        <strong>{title}</strong>이
        <br />
        완료되었습니다.
      </h2>
      <p className={styles.message}>{message}</p>
    </div>
  );
}
