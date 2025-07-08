'use client';

import BagIcon from '@/assets/svg/BagIcon';
import LabeledField from '@/components/ui/labeled-field';
import { useGetUserOrderDetail } from '@/hooks/query/order/useGetUserOrderDetail';
import { getFullDateTime } from '@/utils/getFullDateTime';
import OrderDetailTable from '@/components/order-detail-table';
import { Order } from '../_components/order-item';

export default function Page({ params }: { params: { id: string } }) {
  const { data, isLoading } = useGetUserOrderDetail(params.id);

  if (isLoading) return <> </>;

  const orderData = {
    매장: data!.storeName,
    픽업장소: data!.storeAddress,
    결제수단: '현장결제',
    '마감백 개수': data!.quantity,
    픽업시간: getFullDateTime(data!.pickupTime),
    결제금액: `${data!.totalPrice ? data!.totalPrice.toLocaleString() : '0'}원`,
    요청사항: data!.memo,
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
