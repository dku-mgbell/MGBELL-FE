import { ReactNode } from 'react';
import useModal from '@/hooks/useModal';
import Button from '../button/button';
import { styles } from './styles.css';

export default function Modal({ content }: { content: ReactNode }) {
  const { close } = useModal();
  return (
    <div className={styles.container}>
      <div>
        {content}
        <Button value="닫기" onClick={close} />
      </div>
    </div>
  );
}
