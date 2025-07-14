'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useGetBagRating } from '@/hooks/query/bag/useGetBagRating';
import ReviewList from './_components/review-list';
import ReviewRating from './_components/review-rating';

export default function Page({
  params: { goodsId },
}: {
  params: { goodsId: string };
}) {
  const { data, isLoading } = useGetBagRating({ goodsId });
  const [imageCheck, setImageCheck] = useState(false);

  const handleImageCheck = () => {
    setImageCheck(!imageCheck);
  };

  if (isLoading) return null;

  return (
    <div className="flex flex-col gap-[20px]">
      <ReviewRating data={data!} />
      <div className="flex justify-between">
        <strong>최근 리뷰 {data?.totalCount ?? 0}개</strong>
        <label className="clickable text-gray5 text-b3 flex items-center gap-[4px]">
          <Checkbox checked={imageCheck} onCheckedChange={handleImageCheck} />
          사진 리뷰만 보기
        </label>
      </div>
      <ReviewList goodsId={goodsId} imageCheck={imageCheck} />
    </div>
  );
}
