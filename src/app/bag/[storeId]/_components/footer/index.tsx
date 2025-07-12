import { useEffect } from 'react';
import Counter from '@/components/ui/counter';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { useStoreDetailStore } from '../../_stores/useStoreDetailStore';
import Container from './container';
import OrderButton from './order-button';

export default function Footer() {
  const { storeDetail } = useStoreDetailStore();
  const { setBagAmount } = useBagOrderState();

  useEffect(() => {
    setBagAmount(0);
  }, []);

  return (
    <Container>
      <Counter
        defaultValue={0}
        setValue={setBagAmount}
        maxCount={storeDetail ? storeDetail.quantity : 0}
        className="w-[170px]"
      />
      <OrderButton />
    </Container>
  );
}
