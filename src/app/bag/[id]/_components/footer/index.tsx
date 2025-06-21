import { useEffect } from 'react';
import Counter from '@/components/ui/counter';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { useGetBagDetailStore } from '../../_stores/useGetBagDetailStore';
import Container from './container';
import OrderButton from './order-button';

export default function Footer() {
  const { bagDetail } = useGetBagDetailStore();
  const { setBagAmount } = useBagOrderState();

  useEffect(() => {
    setBagAmount(0);
  }, []);

  return (
    <Container>
      <Counter
        setValue={setBagAmount}
        maxCount={bagDetail ? bagDetail.amount : 0}
        className="w-[170px]"
      />
      <OrderButton />
    </Container>
  );
}
