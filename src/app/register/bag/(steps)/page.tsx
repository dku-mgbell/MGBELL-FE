'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import BagImage from '@/assets/images/store/bag.png';
import { common } from '@/styles/common.css';
import QuestionContainer from '@/components/question-container/question-container';
import * as styles from './styles.css';
import Qna from './(components)/qna';

export default function Page() {
  const route = useRouter();

  return (
    <StepsLayout
      isNextStepAllowed
      onNextStep={() => {
        route.push('/register/bag/info');
      }}
      buttonContent="마감백 설정하기"
      theme="secondary"
    >
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <Image
            src={BagImage.src}
            width={264}
            height={300}
            alt="마감백 이미지"
          />
          <p
            className={common.text({ color: 'gray' })}
            style={{ lineHeight: 1.5 }}
          >
            당일 남은 음식들을 랜덤으로!
            <br /> 우리가게
            <span className={common.text({ color: 'primary' })}>
              &nbsp;&apos;마감백&lsquo;
            </span>
            을 만드세요!
          </p>
        </div>
        <QuestionContainer title="마감백이란?" content={<Qna />} />
      </div>
    </StepsLayout>
  );
}
