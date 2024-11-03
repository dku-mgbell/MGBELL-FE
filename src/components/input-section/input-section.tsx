import { ReactNode } from 'react';
import * as styles from './styles.css';

export default function InputSection({
  title,
  icon,
  children,
  border,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  border?: boolean;
}) {
  return (
    <div className={styles.inputSection} key={title}>
      <div className={styles.inputTitleContainer({ border })}>
        {icon} {title}
      </div>
      {children}
    </div>
  );
}
