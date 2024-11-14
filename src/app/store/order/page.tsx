'use client';

import Button from '@/components/button/text-button/button';
import { useGetOrderListByOwner } from '@/hooks/query/order/owner/useGetOrderListByOwner';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { OrderState, OwnerOrderDetail, PaymentName } from '@/types/order';
import { Intersection } from '@/components/intersection/intersection';
import { commaizeNumber } from '@/utils/commaizeNumber';
import useModal from '@/hooks/useModal';
import { useRefuseOrderByOwner } from '@/hooks/query/order/owner/useRefuseOrderByOwner';
import Input from '@/components/input/input';
import { useAcceptOrderByOwner } from '@/hooks/query/order/owner/useAcceptOrderByOwner';
import { useCompleteOrderByOwner } from '@/hooks/query/order/owner/useCompleteOrderByOwner';
import { formatDateTime } from '@/utils/formatDateTime';
import Aside from './(components)/aside/aside';
import * as styles from './styles.css';

export default function Page({
  searchParams: { state },
}: {
  searchParams: { state: OrderState };
}) {
  const orderListState = useGetOrderListByOwner({ size: 5 });
  const { list, intersection, isLoading } =
    useInfiniteScroll<OwnerOrderDetail>(orderListState);
  const { mutate: postRefuseOrder } = useRefuseOrderByOwner();
  const { mutate: postAcceptOrder } = useAcceptOrderByOwner();
  const { mutate: postCompleteOrder } = useCompleteOrderByOwner();
  const { open } = useModal();

  const handleRefuseButtonClick = (orderId: number) => {
    open({
      content: (
        <div className={styles.refuseModal}>
          <p>거절 이유를 입력해주세요.</p>
          <Input id="modalInput" placeholder="ex.재고 소진" />
        </div>
      ),
      confirmEvent: () => {
        const modalInput = document.getElementById(
          'modalInput',
        ) as HTMLInputElement;
        postRefuseOrder({ orderId, refusalReason: modalInput.value });
      },
    });
  };

  const handleOrderButtonClick = ({
    orderId,
    message,
    event,
  }: {
    orderId: number;
    message: string;
    event: (orderId: number) => void;
  }) => {
    open({
      content: message,
      confirmEvent: () => {
        event(orderId);
      },
    });
  };

  const buttonContent = {
    REQUESTED: {
      name: '수락',
      message: '주문을 수락하시겠습니까?',
      event: postAcceptOrder,
    },
    ACCEPTED: {
      name: '주문완료',
      message: '주문을 완료하시겠습니까?',
      event: postCompleteOrder,
    },
  };

  if (isLoading) return <> </>;

  return (
    <div className={styles.container}>
      <Aside state={state} />
      <div className={styles.content}>
        {list!.map((order) => (
          <div key={order.orderId} className={styles.orderItem}>
            <div className={styles.orderNumberSection}>
              <p className={styles.orderNumber}>{order.orderId}</p>
              <p className={styles.pickUpTime}>{order.pickupTime} 픽업</p>
            </div>
            <div className={styles.orderContentSection}>
              <div className={styles.orderContentHeader}>
                <p className={styles.tag}>
                  {formatDateTime(order.orderedTime)} 주문
                </p>
                <p className={styles.tag}>{PaymentName[order.payment]}</p>
              </div>
              <p>
                [마감백 {order.amount}개] {commaizeNumber(order.subTotal)}원
              </p>
              <p>연락처: 010-1234-5678</p>
              {order.request && <p>요청사항: {order.request}</p>}
            </div>
            <div className={styles.buttonContainer}>
              {(order.orderState === 'ACCEPTED' ||
                order.orderState === 'REQUESTED') && (
                <Button
                  value={buttonContent[order.orderState].name}
                  size="fit"
                  theme="secondary"
                  style={{ padding: '30px', height: 'fit-content' }}
                  onClick={() => {
                    handleOrderButtonClick({
                      orderId: order.orderId,
                      message:
                        buttonContent[
                          order.orderState as 'ACCEPTED' | 'REQUESTED'
                        ].message,
                      event:
                        buttonContent[
                          order.orderState as 'ACCEPTED' | 'REQUESTED'
                        ].event,
                    });
                  }}
                />
              )}
              {order.orderState === 'REQUESTED' && (
                <Button
                  value="거절"
                  size="fit"
                  theme="red"
                  style={{ padding: '30px', height: 'fit-content' }}
                  onClick={() => {
                    handleRefuseButtonClick(order.orderId);
                  }}
                  id="refuse"
                />
              )}
            </div>
          </div>
        ))}
        <Intersection ref={intersection} />
      </div>
    </div>
  );
}
