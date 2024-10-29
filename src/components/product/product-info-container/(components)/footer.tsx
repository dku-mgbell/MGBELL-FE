import StarIcon from '@/assets/svg/StarIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import ProductInfoContainer from '@/components/product/product-info-footer/product-info-footer';
import { BagInfo } from '@/types/bag';

export default function ProductInfoFooter({
  info: { salePrice, costPrice, startAt, endAt },
}: {
  info: Pick<BagInfo, 'salePrice' | 'costPrice' | 'startAt' | 'endAt'>;
}) {
  return (
    <ProductInfoContainer
      salePrice={salePrice!}
      costPrice={costPrice!}
      firstRow={{
        icon: <TimeIcon width={20} height={19.2} />,
        text: `마감 픽업 시간: ${startAt}~${endAt}`,
      }}
      secondRow={{ icon: <StarIcon theme="red" />, text: '4.9' }} // TODO: 평점 제거 & 리뷰 개수 연동
      noPadding
    />
  );
}
