'use client';

import BagIcon from '@/assets/svg/BagIcon';
import LabeledField from '@/components/ui/labeled-field';
import { useGetUserOrderDetail } from '@/hooks/query/order/useGetUserOrderDetail';
import { commaizeNumber } from '@/utils/commaizeNumber';
import OrderDetailTable from '@/components/order-detail-table';
import { Order } from '../_components/order-item';

export default function Page({ params }: { params: { id: number } }) {
  const { data, isLoading } = useGetUserOrderDetail(params.id);

  if (isLoading) return <> </>;

  const orderData = {
    매장: data!.storeName,
    픽업장소: data!.address,
    결제수단: '현장결제',
    마감백개수: `${data!.amount}개`,
    픽업시간: data!.pickupTime,
    결제금액: `${commaizeNumber(data!.subTotal)}원`,
    요청사항: data!.request,
  };

  return (
    <>
      <div className="mb-[20px]">
        <Order.DetailItem data={data!} />
      </div>
      <LabeledField
        label={
          <p className="flex items-center gap-[6px] font-bold">
            <BagIcon color="black" /> 주문상세
          </p>
        }
      >
        <OrderDetailTable data={orderData} />
      </LabeledField>
    </>
  );
}
