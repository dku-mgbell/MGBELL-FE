'use client';

import { useParams, useRouter } from 'next/navigation';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import CheckIcon from '@/assets/svg/CheckIcon';
import * as styles from './styles.css';

export default function Page() {
  const route = useRouter();
  const { id } = useParams();

  return (
    <StepsLayout
      buttonContent="확인"
      onNextStep={() => {
        route.push(`/bag/order/info?id=${id}`);
      }}
    >
      <div className={styles.sheet}>
        {/* TODO 일러스트 추가 */}
        <header className={styles.header}>
          <CheckIcon theme="secondary" size={24} />
          안내 사항
        </header>
        <p className={styles.message}>
          이 박스에는 식품이 랜덤으로 들어가 있습니다.
          <br />
          만약 알레르기나 성분이 걱정된다면 “확인” 버튼을{' '}
          <u>
            <strong>클릭 후 요청사항에 작성 부탁드립니다.</strong>
          </u>
          <br />
          ex 새우 알러지가 있어요, 과일 알러지가 있어요.
          <br />
          <br />
          <strong>*매장 수락시 취소는 불가능합니다.</strong>
        </p>
      </div>
    </StepsLayout>
  );
}
