import ThumbsUpIcon from '@/assets/svg/ThumbsUpIcon';
import Chip from '@/components/ui/chip';
import { SatisFactionReason, SatisfiedReasonName } from '@/types/review';

export default function ReviewSatisfactionList({
  satisfactions,
}: {
  satisfactions: SatisFactionReason[];
}) {
  return (
    <div className="flex flex-wrap gap-[10px]">
      {satisfactions.map((satisfaction) => (
        <Chip key={satisfaction} className="flex gap-[4px] font-medium">
          <ThumbsUpIcon />
          {SatisfiedReasonName[satisfaction]}
        </Chip>
      ))}
    </div>
  );
}
