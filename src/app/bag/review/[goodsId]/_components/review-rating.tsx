import { ReviewRatingResponse, ReviewScoreName } from '@/types/review';
import StarScore from '@/components/star-score';

export default function ReviewRating({ data }: { data: ReviewRatingResponse }) {
  return (
    <div className="flex bg-gray10 py-[10px] rounded-[10px]">
      <div className="flex flex-col gap-[10px] w-[115px] items-center justify-center">
        <strong className="text-h3">{data.averageRating.toFixed(1)}</strong>
        <StarScore score={data.averageRating} />
        <p className="text-b3 text-gray4">{data.totalCount}개의 평가</p>
      </div>
      <div className="w-full flex flex-1 flex-col gap-[12px] px-[12px]">
        {Object.entries(ReviewScoreName)
          .reverse()
          .map(([id, name]) => {
            const score = Number(id) as keyof typeof ReviewScoreName;
            const ratingCount = data[`rating${score}Count`] as number;
            return (
              <div
                key={id}
                className="grid grid-cols-[42px_1fr_18px] w-full items-center gap-[6px]"
              >
                <p className="text-b3 text-[#3F3029]">{name}</p>
                <div className="bg-gray8 h-[6px] rounded-full">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{
                      width:
                        data.totalCount === 0
                          ? 0
                          : `${(100 / data.totalCount) * ratingCount}%`,
                    }}
                  />
                </div>
                <p className="text-b3 text-gray4">{ratingCount ?? 0}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
