import { useRouter } from 'next/navigation';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import IconButton from '../icon-button/button';

export default function BackButton({ link }: { link?: string }) {
  const route = useRouter();
  return (
    <IconButton
      style={{
        position: 'absolute',
        left: 15,
        top: 'calc(5px + env(safe-area-inset-top))',
        zIndex: 999,
        width: 39,
        height: 39,
      }}
      onClick={() => {
        if (link) {
          route.push(link);
        } else {
          route.back();
        }
      }}
      icon={<ChevronLeftIcon width={18} height={17} />}
    />
  );
}
