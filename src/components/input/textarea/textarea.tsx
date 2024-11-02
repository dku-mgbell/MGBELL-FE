import React, {
  Dispatch,
  SetStateAction,
  TextareaHTMLAttributes,
  useEffect,
  useState,
} from 'react';

import * as styles from './styles.css';

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  theme,
  className,
  maxLength,
  getContent,
  ...props
}: {
  theme?: 'default' | 'error' | 'outline-secondary';
  className?: string;
  maxLength?: number;
  getContent?: Dispatch<SetStateAction<string>>;
} & InputProps) {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (getContent) getContent(content);
  }, [content]);

  return (
    <div className={styles.container}>
      <textarea
        className={`${styles.textarea({ theme: theme ?? 'default' })} ${className}`}
        value={content}
        onChange={(e) => {
          if (content.length < 50) {
            setContent(e.target.value);
          } else {
            setContent(e.target.value.slice(0, content.length));
          }
        }}
        {...props}
      />
      {maxLength && (
        <div className={styles.count}>
          {content?.length ?? 0} / {maxLength}
        </div>
      )}
    </div>
  );
}
