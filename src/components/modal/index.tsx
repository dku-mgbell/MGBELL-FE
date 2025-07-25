import { motion } from 'framer-motion';
import { ModalProps } from '@/hooks/stores/useModalStateStore';
import { cn } from '@/lib/utils';
import useModal from '@/hooks/useModal';
import { Button } from '../ui/button';

export default function Modal({
  title,
  description,
  content,
  confirmEvent,
  className,
  showButton,
  onlyConfirmButton,
  confirmButtonText,
  cancelButtonText,
  setOpen,
  autoCloseOnConfirm = true,
}: Omit<ModalProps, 'visible'>) {
  const { close: closeModalInStore } = useModal();

  const close = () => {
    if (setOpen) {
      setOpen(false);
      return;
    }
    closeModalInStore();
  };

  const handleConfirmButtonClick = () => {
    if (confirmEvent) confirmEvent();
    if (autoCloseOnConfirm) close();
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/20 flex justify-center items-center z-[999999]">
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
        className={cn(
          'max-w-[390px] w-[90vw] max-h-[80vh] rounded-[20px] overflow-hidden p-[30px] bg-white flex flex-col gap-[30px]',
          className,
        )}
      >
        {content ? (
          <div className="text-b1 text-gray1 text-center">{content}</div>
        ) : (
          (title || description) && (
            <div className="flex flex-col gap-[4px] text-center">
              {title && <p className="text-h4 text-gray1">{title}</p>}
              {description && (
                <p className="text-b2 text-gray4">{description}</p>
              )}
            </div>
          )
        )}

        {showButton !== false && (
          <div className="flex gap-[15px]">
            {onlyConfirmButton || (
              <Button
                onClick={close}
                variant={confirmEvent ? 'primary-light' : 'primary'}
                className="flex-1"
              >
                {cancelButtonText || '닫기'}
              </Button>
            )}
            {confirmEvent && (
              <Button onClick={handleConfirmButtonClick} className="flex-1">
                {confirmButtonText || '확인'}
              </Button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
