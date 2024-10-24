import StarIcon from '@/assets/svg/StarIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import ProductInfoContainer from '@/components/product/info-container/ProductInfoContainer';
import { BagInfo } from '@/types/bag';

export default function MapProductInfoContainer({
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
        text: `픽업 시간: ${startAt}~${endAt}`,
      }}
      secondRow={{ icon: <StarIcon theme="red" />, text: '4.9' }}
      noPadding
    />
  );
}
