import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import useModal from '@/hooks/useModal';
import Button from '../button/text-button/button';
import { styles } from './styles.css';

export default function Modal({ content }: { content: ReactNode }) {
  const { close } = useModal();

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
      className={styles.container}
    >
      <div>
        <div className={styles.content}>{content}</div>
        <Button value="닫기" onClick={close} />
      </div>
    </motion.div>
  );
}
