import { Sheet } from 'react-modal-sheet';
import './styles.css';

interface BottomSheetProps
  extends Omit<React.ComponentProps<typeof Sheet>, 'onClose'> {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  height?: number;
  isHidden?: boolean;
}

export default function BottomSheet({
  setOpen,
  height,
  snapPoints,
  isHidden,
  initialSnap,
  children,
  ...props
}: BottomSheetProps) {
  return (
    <Sheet
      onClose={() => {
        setOpen(false);
      }}
      snapPoints={snapPoints ?? [height ?? 200, 0]}
      initialSnap={initialSnap ?? snapPoints?.[0] ?? 0}
      className={isHidden ? 'hidden' : ''}
      {...props}
    >
      <Sheet.Backdrop
        style={{
          width: '100%',
          maxWidth: 450,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
        }}
      />
      <div className="max-w-[450px] w-full relative h-full mx-auto z-[9999]">
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content disableDrag>
            <div style={{ height: '100%', overflow: 'auto' }}>{children}</div>
          </Sheet.Content>
        </Sheet.Container>
      </div>
    </Sheet>
  );
}
