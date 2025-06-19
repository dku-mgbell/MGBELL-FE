import LocationIcon from '@/assets/svg/LocationIcon';
import IconButton from '@/components/button/icon-button';

export default function LocationButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute z-[99] bottom-[100px] left-[25px]">
      <IconButton icon={<LocationIcon />} onClick={onClick} />
    </div>
  );
}
