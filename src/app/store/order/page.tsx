'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/button/text-button/button';
import { Intersection } from '@/components/intersection/intersection';
import {
  initializeMessaging,
  issueFcmToken,
  onMessageListener,
} from '@/hooks/notification/firebase';
import { useRegisterFCMToken } from '@/hooks/query/notification/useRegisterFCMToken';
import { useAcceptOrderByOwner } from '@/hooks/query/order/owner/useAcceptOrderByOwner';
import { useCompleteOrderByOwner } from '@/hooks/query/order/owner/useCompleteOrderByOwner';
import { useGetOrderListByOwner } from '@/hooks/query/order/owner/useGetOrderListByOwner';
import { useRefuseOrderByOwner } from '@/hooks/query/order/owner/useRefuseOrderByOwner';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useModal from '@/hooks/useModal';
import {
  CancelReason,
  OrderState,
  OrderStateNameByOwner,
  OwnerOrderDetail,
  PaymentName,
} from '@/types/order';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { formatDateTime } from '@/utils/formatDateTime';
import Aside from './(components)/aside/aside';
import * as styles from './styles.css';

export default function Page({
  searchParams: { state },
}: {
  searchParams: { state?: OrderState | '' };
}) {
  const orderListState = useGetOrderListByOwner({ size: 5, state });
  const { list, intersection, isLoading, isError } =
    useInfiniteScroll<OwnerOrderDetail>(orderListState);
  const [orderList, setOrderList] = useState<OwnerOrderDetail[]>();
  const { mutate: postRefuseOrder } = useRefuseOrderByOwner();
  const { mutate: postAcceptOrder } = useAcceptOrderByOwner();
  const { mutate: postCompleteOrder } = useCompleteOrderByOwner();
  const { mutate: registerFCMToken } = useRegisterFCMToken();
  const { open } = useModal();
  // const audio = new Audio('/notification-sound.mp3');
  // const [playNotificationSound, setPlayNotificationSound] = useState(false);

  useEffect(() => {
    const messaging = initializeMessaging();
    const fcmToken = localStorage.getItem('fcmToken');
    if (messaging) {
      issueFcmToken(messaging).then(() => {
        if (fcmToken) registerFCMToken(fcmToken);
      });
      onMessageListener(messaging).then((payload) => {
        // eslint-disable-next-line no-console
        console.log(payload);
      });
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/firebase-messaging-sw.js')
          .then((registration) => {
            // eslint-disable-next-line no-console
            console.log(
              'Service Worker registered with scope:',
              registration.scope,
            );
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('Service Worker registration failed:', error);
          });
        navigator.serviceWorker.addEventListener('message', () => {
          const audio = new Audio('/notification-sound.mp3');
          audio.play();
        });
      }
    }
  }, []);

  useEffect(() => {
    setOrderList(list);
  }, [list, state]);

  // useEffect(() => {
  //   if (list)
  //     setPlayNotificationSound(
  //       list.some((item) => {
  //         return item.orderState === 'REQUESTED';
  //       }),
  //     );
  // }, [list]);

  // useEffect(() => {
  //   if (playNotificationSound) {
  //   const audio = new Audio('/notification-sound.mp3');
  //     if (typeof window !== 'undefined') {
  //       audio
  //         .play()
  //         .then(() => console.log('Audio is playing'))
  //         .catch((error) => console.error('Audio play error:', error));
  //     }
  //   }
  // }, [playNotificationSound]);

  const handleRefuseButtonClick = (orderId: number) => {
    open({
      content: (
        <div className={styles.refuseModal}>
          <p>거절 이유를 선택해주세요.</p>
          {Object.entries(CancelReason).map(([id, value]) => (
            <label key={id}>
              <input value={id} type="radio" name="cancel-reason" />
              <span style={{ marginLeft: 10 }}>{value}</span>
            </label>
          ))}
        </div>
      ),
      confirmEvent: () => {
        const checkedInput = document.querySelector(
          'input[type=radio][name=cancel-reason]:checked',
        ) as HTMLInputElement;
        if (checkedInput) {
          postRefuseOrder({ orderId, refusalReason: checkedInput.value });
        }
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

  if (isLoading || !orderList) return <> </>;
  if (isError) {
    window.location.href = '/register/store';
  }

  return (
    <>
      <Aside state={state} />
      <div className={styles.content}>
        {orderList!.map((order) => (
          <div key={order.orderId} className={styles.orderItem}>
            <div className={styles.orderNumberSection}>
              <p className={styles.orderNumber}>{order.orderId}</p>
              <p className={styles.pickUpTime}>{order.pickupTime} 픽업</p>
            </div>
            <div className={styles.orderContentSection}>
              <div className={styles.orderContentHeader}>
                <p className={styles.tag}>
                  {OrderStateNameByOwner[order.orderState]}
                </p>
                <p className={styles.tag}>
                  {formatDateTime(order.orderedTime)} 주문
                </p>
                <p className={styles.tag}>{PaymentName[order.payment]}</p>
              </div>
              <p>
                [마감백 {order.amount}개] {commaizeNumber(order.subTotal)}원
              </p>
              <p>연락처: {order.phoneNumber}</p>
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
    </>
  );
}
