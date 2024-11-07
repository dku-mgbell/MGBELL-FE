import { ReactNode } from 'react';
import { styles } from './styles.css';

export default function QuestionContainer({
  title,
  desc,
  content,
}: {
  title: string | ReactNode;
  desc?: string | ReactNode;
  content: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>{title}</strong>
      {desc && <p className={styles.desc}>{desc}</p>}
      {content}
    </div>
  );
}
