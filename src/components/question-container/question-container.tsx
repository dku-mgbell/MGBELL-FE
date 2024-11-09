import { ReactNode } from 'react';
import { styles } from './styles.css';

export default function QuestionContainer({
  title,
  desc,
  content,
  contentMarginTop,
}: {
  title: string | ReactNode;
  desc?: string | ReactNode;
  content: ReactNode;
  contentMarginTop?: number;
}) {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>{title}</strong>
      {desc && <p className={styles.desc}>{desc}</p>}
      <div style={{ marginTop: contentMarginTop ?? 8 }}>{content}</div>
    </div>
  );
}
