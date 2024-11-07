'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import BagImage from '@/assets/images/store/bag.png';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import CheckIcon from '@/assets/svg/CheckIcon';
import * as styles from './styles.css';

export default function Page() {
  const route = useRouter();
  const params = useParams();

  return (
    <StepsLayout
      buttonContent="확인"
      onNextStep={() => {
        route.push(`/bag/order/info/${params.id}`);
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={BagImage.src}
          width={BagImage.width}
          height={BagImage.height}
          alt="bag illustration"
        />
      </div>
      <div className={styles.sheet}>
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
