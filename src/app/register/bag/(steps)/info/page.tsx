'use client';

import Textarea from '@/components/input/textarea/textarea';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import QuestionContainer from '@/components/question-container/question-container';
import { useRouter } from 'next/navigation';
import { styles } from '../styles.css';
import PriceSection from './(components)/price-section/price-section';
import AmountSection from './(components)/amount-section/amount-section';

export default function Page() {
  const route = useRouter();

  const handleNextButtonClick = () => {
    route.push('/register/bag/activate');
  };

  return (
    <StepsLayout
      isNextStepAllowed
      onNextStep={handleNextButtonClick}
      theme="secondary"
    >
      <div className={styles.container}>
        <QuestionContainer
          title="마감백 추가 설명"
          desc="마감백에 담길 매장의 음식을 자세히 설명해주세요 :)"
          content={
            <Textarea
              placeholder="ex) 유기농으로 당일 생산된 쫄깃쫄깃한 빵이 담길 수 있어요!"
              theme="outline-secondary"
            />
          }
        />
        <QuestionContainer title="마감백 가격" content={<PriceSection />} />
        <QuestionContainer
          title="마감백 판매 갯수"
          desc="하루에 몇 개의 마감백을 판매할건가요?"
          content={<AmountSection />}
        />
      </div>
    </StepsLayout>
  );
}
