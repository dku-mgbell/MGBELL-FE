import React from 'react';
import StarIcon from '@/assets/svg/StarIcon';

interface StarScoreProps {
  score: number;
  size?: number;
}

export default function StarScore({ score, size = 16 }: StarScoreProps) {
  const fullStars = Math.floor(score);
  const hasPartialStar = score % 1 > 0;
  const partialPercentage = hasPartialStar ? (score % 1) * 100 : 0;

  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: 5 }).map((_, idx) => {
        let percentage = 0;
        if (idx < fullStars) {
          percentage = 100;
        } else if (idx === fullStars && hasPartialStar) {
          percentage = partialPercentage;
        }
        // eslint-disable-next-line react/no-array-index-key
        return <StarIcon key={idx} percentage={percentage} size={size} />;
      })}
    </div>
  );
}
