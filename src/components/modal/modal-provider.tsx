'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModalStateStore } from '@/hooks/stores/useModalStateStore';
import Modal from './modal';
import { styles } from './styles.css';

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const {
    modalState: { visible, content, confirmEvent, noPadding },
  } = useModalStateStore();

  useEffect(() => {
    setPortalElement(document.getElementById('modal-root'));
  }, []);

  return (
    <>
      {children}
      {portalElement &&
        visible &&
        createPortal(
          <div className={styles.wrapper}>
            <Modal
              content={content}
              confirmEvent={confirmEvent}
              noPadding={noPadding}
            />
          </div>,
          portalElement!,
        )}
    </>
  );
}
