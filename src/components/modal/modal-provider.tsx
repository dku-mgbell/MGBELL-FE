'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModalStateStore } from '@/hooks/stores/useModalStateStore';
import Modal from './modal';
import { styles } from './styles.css';

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const { modalState } = useModalStateStore();

  useEffect(() => {
    setPortalElement(document.getElementById('modal-root'));
  }, []);

  return (
    <>
      {children}
      {portalElement &&
        modalState.visible &&
        createPortal(
          <div className={styles.wrapper}>
            <Modal {...modalState} />
          </div>,
          portalElement!,
        )}
    </>
  );
}
