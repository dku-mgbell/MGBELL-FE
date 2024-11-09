'use client';

import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import Button from '@/components/button/text-button/button';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { useGetUserOrderDetail } from '@/hooks/query/order/useGetUserOrderDetail';
import InputSection from '@/components/input-section/input-section';
import OrderDetailTable from '@/components/order-detail-table/order-detail-table';
import BagIcon from '@/assets/svg/BagIcon';
import useModal from '@/hooks/useModal';
import { useCancelOrderByUser } from '@/hooks/query/order/useCancelOrderByUser';
import OrderItem from './(components)/order-item/order-item';
import * as styles from './styles.css';

export default function Page({ params }: { params: { id: number } }) {
  const { data, isLoading } = useGetUserOrderDetail(params.id);
  const { mutate: cancelOrder } = useCancelOrderByUser();
  const route = useRouter();
  const { open } = useModal();

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

  const handleCancelButtonClick = () => {
    open({
      content: '주문을 취소하시겠습니까?',
      confirmEvent: () => cancelOrder(data!.orderId),
    });
  };

  return (
    <HeaderLayout title="주문내역" previousPageLink="/order">
      <OrderItem data={data!} />
      <div className={styles.buttonContainer}>
        {data?.orderState === 'REQUESTED' && (
          <div className={styles.multipleButtonContainer}>
            <button
              type="button"
              className={styles.multipleButton}
              onClick={handleCancelButtonClick}
            >
              취소하기
            </button>
            <span>|</span>
            <button
              type="button"
              className={styles.multipleButton}
              onClick={() => window.open('https://pf.kakao.com/_ZDJzn')}
            >
              문의하기
            </button>
          </div>
        )}
        {data?.orderState === 'ACCEPTED' && (
          <Button
            value="문의하기"
            theme="outline-gray"
            onClick={() => window.open('https://pf.kakao.com/_ZDJzn')}
          />
        )}
        {data?.orderState === 'COMPLETED' && !data?.reviewed && (
          <Button
            value="리뷰 작성"
            theme="outline-secondary"
            onClick={() => {
              route.push(`/bag/review/post?orderId=${data!.orderId}`);
            }}
          />
        )}
      </div>
      <InputSection title="주문상세" icon={<BagIcon color="black" />} border>
        <OrderDetailTable orderData={orderData} />
      </InputSection>
    </HeaderLayout>
  );
}
