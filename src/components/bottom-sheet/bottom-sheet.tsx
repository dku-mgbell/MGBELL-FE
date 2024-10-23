import { ReactNode } from 'react';
import { Sheet } from 'react-modal-sheet';

export default function BottomSheet({
  isOpen,
  setOpen,
  content,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: ReactNode;
}) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => {
        setOpen(false);
      }}
      snapPoints={[200, 0]}
    >
      <Sheet.Backdrop
        onTap={() => {
          setOpen(false);
        }}
        style={{ backgroundColor: 'transparent' }}
      />
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{content}</Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
