import LocationIcon from '@/assets/svg/LocationIcon';
import IconButton from '@/components/button/icon-button/button';

export default function LocationButton({ onClick }: { onClick: () => void }) {
  return (
    <div style={{ zIndex: 9999, position: 'absolute', bottom: 100, left: 25 }}>
      <IconButton icon={<LocationIcon />} onClick={onClick} />
    </div>
  );
}
