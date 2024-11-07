import StarIcon from '@/assets/svg/StarIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import ProductInfoContainer from '@/components/product/product-info-footer/product-info-footer';
import { BagInfo } from '@/types/bag';
import ReviewButton from './review-button';

export default function ProductInfoFooter({
  info: { salePrice, costPrice, startAt, endAt },
  reviewButton,
}: {
  info: Pick<BagInfo, 'salePrice' | 'costPrice' | 'startAt' | 'endAt'>;
  reviewButton: { storeId?: number; reviewCnt: number };
}) {
  return (
    <ProductInfoContainer
      salePrice={salePrice!}
      costPrice={costPrice!}
      firstRow={{
        icon: <TimeIcon width={20} height={19.2} />,
        text: `마감 픽업 시간: ${startAt}~${endAt}`,
      }}
      secondRow={{
        icon: <StarIcon theme="red" />,
        text: (
          <ReviewButton
            storeId={reviewButton.storeId}
            reviewCnt={reviewButton.reviewCnt}
          />
        ),
      }}
      noPadding
    />
  );
}
