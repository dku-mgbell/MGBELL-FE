'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModalStateStore } from '@/hooks/stores/useModalStateStore';
import Modal from './index';

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const {
    modalState: { visible, ...props },
  } = useModalStateStore();

  useEffect(() => {
    setPortalElement(document.getElementById('modal-root'));
  }, []);

  return (
    <>
      {children}
      {portalElement &&
        visible &&
        createPortal(<Modal {...props} />, portalElement)}
    </>
  );
}
