import LocationIcon from '@/assets/svg/LocationIcon';
import IconButton from '@/components/button/icon-button/button';

export default function LocationButton() {
  return (
    <div style={{ zIndex: 9999, position: 'absolute', bottom: 50, left: 25 }}>
      <IconButton icon={<LocationIcon />} />
    </div>
  );
}