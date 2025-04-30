import { ReactNode } from 'react';
import { Sheet } from 'react-modal-sheet';
import * as styles from './styles.css';

export default function BottomSheet({
  isOpen,
  setOpen,
  content,
  height,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: ReactNode;
  height?: number;
}) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => {
        setOpen(false);
      }}
      snapPoints={[height ?? 200, 0]}
    >
      <Sheet.Backdrop
        onTap={() => {
          setOpen(false);
        }}
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          maxWidth: 450,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div className={styles.bottomSheetContainer}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div style={{ height: '100%', overflow: 'auto' }}>{content}</div>
          </Sheet.Content>
        </Sheet.Container>
      </div>
    </Sheet>
  );
}
