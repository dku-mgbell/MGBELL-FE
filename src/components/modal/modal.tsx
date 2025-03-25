import { ReactNode } from 'react';
import useModal from '@/hooks/useModal';
import { motion } from 'framer-motion';
import Button from '../button/text-button/button';
import { styles } from './styles.css';

export default function Modal({
  content,
  confirmEvent,
  noPadding,
}: {
  content: ReactNode;
  confirmEvent?: () => void;
  noPadding?: boolean;
}) {
  const { close } = useModal();

  const handleConfirmButtonClick = () => {
    if (confirmEvent) confirmEvent();
    close();
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          ease: 'easeOut',
          duration: 0.15,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.75,
        transition: {
          ease: 'easeIn',
          duration: 0.15,
        },
      }}
      className={styles.container({ noPadding })}
    >
      <div className={styles.content({ noPadding })}>{content}</div>
      <div className={styles.buttonContainer}>
        <Button
          value="닫기"
          onClick={close}
          theme={confirmEvent ? 'inactive-primary' : 'primary'}
          height="small"
        />
        {confirmEvent && (
          <Button
            value="확인"
            onClick={handleConfirmButtonClick}
            height="small"
          />
        )}
      </div>
    </motion.div>
  );
}
