'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import TimeIcon from '@/assets/svg/TimeIcon';
import { usePostBagOrder } from '@/hooks/query/order/usePostBagOrder';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import { useBagOrderState } from '@/hooks/stores/useBagOrderStateStore';
import { useGetBagDetail } from '@/hooks/query/bag/useGetBagDetail';
import Textarea from '@/components/input/textarea/textarea';
import MessageIcon from '@/assets/svg/MessageIcon';
import CardIcon from '@/assets/svg/CardIcon';
import BagIcon from '@/assets/svg/BagIcon';
import * as styles from './(components)/input-section/styles.css';
import InputSection from './(components)/input-section/input-section';

export default function Page() {
  const params = useParams();
  const { data, isLoading } = useGetBagDetail(Number(params.id));
  const { bagAmount } = useBagOrderState();
  const [time, setTime] = useState('');
  const [timeError, setTimeError] = useState(false);
  const { mutate: postOrder } = usePostBagOrder();
  const [requestMessage, setRequestMessage] = useState('');

  if (isLoading) return <> </>;

  const orderData = {
    매장: data!.storeName,
    픽업장소: data!.address,
    결제수단: '현장결제',
    마감백개수: bagAmount,
    결제금액: `${data!.salePrice! * bagAmount}원`,
  };

  const handleOrderButtonClick = () => {
    if (time) {
      postOrder({
        storeId: data!.storeId,
        pickupTime: time,
        request: requestMessage,
        amount: bagAmount,
        payment: 'SPOT',
      });
    } else {
      setTimeError(true);
    }
  };

  return (
    <StepsLayout
      onNextStep={handleOrderButtonClick}
      buttonContent={`${data!.salePrice! * bagAmount}원 · 주문하기`}
    >
      <InputSection
        title="픽업시간 설정"
        icon={<TimeIcon width={18} height={19} />}
      >
        <p className={styles.pickupMessage}>
          픽업가능시간: {data?.startAt} ~ {data?.endAt}
        </p>
        <input
          type="time"
          className={styles.input({ error: timeError })}
          placeholder="픽업"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </InputSection>
      <InputSection title="요청사항" icon={<MessageIcon />}>
        <Textarea
          placeholder="매장 요청 사항을 50자 이내로 작성해주세요. (선택)"
          maxLength={50}
          getContent={setRequestMessage}
        />
      </InputSection>
      <InputSection title="결제방법" icon={<CardIcon />}>
        <input
          className={styles.input()}
          disabled
          placeholder="현장 결제로 진행해주시면 됩니다."
        />
      </InputSection>
      <InputSection title="주문상세" icon={<BagIcon color="black" />} border>
        <div className={styles.orderTable}>
          {Object.entries(orderData).map(([key, value]) => (
            <div key={key} className={styles.tableRow}>
              <p className={styles.tableKey}>{key}</p>
              <p className={styles.tableValue}>{value}</p>
            </div>
          ))}
        </div>
      </InputSection>
      <p className={styles.message}>
        주문 내역은 마이페이지에서 확인 가능합니다.
      </p>
    </StepsLayout>
  );
}