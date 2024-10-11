import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import { useRouter } from 'next/navigation';
import IconButton from '../icon-button/button';

export default function BackButton() {
  const route = useRouter();
  return (
    <IconButton
      style={{
        position: 'absolute',
        left: 25,
        top: 10,
        zIndex: 999,
        width: 39,
        height: 39,
      }}
      onClick={() => {
        route.back();
      }}
      icon={<ChevronLeftIcon width={18} height={17} />}
    />
  );
}
