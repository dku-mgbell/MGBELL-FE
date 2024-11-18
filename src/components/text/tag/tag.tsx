import { tag } from './styles.css';

export default function Tag({
  content,
  theme,
  shadow,
}: {
  content: string;
  theme?: 'default' | 'white' | 'gray' | 'primary';
  shadow?: boolean;
}) {
  return (
    <span className={tag({ theme: theme ?? 'default', shadow })}>
      {content}
    </span>
  );
}
