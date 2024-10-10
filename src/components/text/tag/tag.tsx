import { tag } from './styles.css';

export default function Tag({
  content,
  theme,
}: {
  content: string;
  theme?: 'default' | 'white' | 'gray' | 'primary';
}) {
  return <span className={tag({ theme: theme ?? 'default' })}>{content}</span>;
}
