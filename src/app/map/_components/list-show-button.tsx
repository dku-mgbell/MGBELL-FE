import ListIcon from '@/assets/svg/ListIcon';
import { Button } from '@/components/ui/button';

export default function ListShowButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      className="pl-[15px] pr-[18px] py-[10px] rounded-full absolute z-[99] bottom-[calc(env(safe-area-inset-bottom)+100px)]  left-[50%] transform-[translateX(-50%)]"
      onClick={onClick}
      variant="secondary"
      size="fit"
    >
      <ListIcon />
      리스트 보기
    </Button>
  );
}
