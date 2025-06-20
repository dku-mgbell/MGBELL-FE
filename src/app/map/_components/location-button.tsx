import LocationIcon from '@/assets/svg/LocationIcon';
import IconButton from '@/components/button/icon-button';

export default function LocationButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute z-[99] right-[25px] top-[calc(12px+env(safe-area-inset-top))]">
      <IconButton icon={<LocationIcon />} onClick={onClick} />
    </div>
  );
}
