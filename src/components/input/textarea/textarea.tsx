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
  onChange,
  value,
  ...props
}: {
  theme?: 'default' | 'error' | 'outline-secondary';
  className?: string;
  maxLength?: number;
  getContent?: Dispatch<SetStateAction<string>>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
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
          if (maxLength) {
            if (content.length < maxLength) {
              setContent(e.target.value);
            } else {
              setContent(e.target.value.slice(0, maxLength));
            }
          }
          if (onChange) onChange(e);
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
