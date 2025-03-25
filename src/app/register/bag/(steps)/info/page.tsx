'use client';

import { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/input/input';
import Textarea from '@/components/input/textarea/textarea';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import QuestionContainer from '@/components/question-container/question-container';
import { useBagInfoStateStore } from '@/hooks/stores/useBagInfoStore';
import * as styles from '../styles.css';
import PriceSection from './(components)/price-section/price-section';

export default function Page() {
  const route = useRouter();
  const { bagInfoState, setBagInfoState } = useBagInfoStateStore();
  const { bagName, description, salePrice, costPrice } = bagInfoState;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setBagInfoState({ ...bagInfoState, [name]: value });
  };

  const handleNextButtonClick = () => {
    route.push('/register/bag/activate');
  };

  const isFormFilled = !!bagName && !!description && !!salePrice && !!costPrice;

  return (
    <StepsLayout
      isNextStepAllowed={isFormFilled}
      onNextStep={handleNextButtonClick}
      theme="secondary"
    >
      <div className={styles.container}>
        <QuestionContainer
          title="마감백 이름"
          desc="마감백의 이름을 지어주세요!"
          content={
            <Input
              name="bagName"
              placeholder="ex) 베이커리 마감백"
              value={bagName ?? ''}
              onChange={handleInputChange}
            />
          }
        />
        <QuestionContainer
          title="마감백 추가 설명"
          desc="마감백에 담길 매장의 음식을 자세히 설명해주세요 :)"
          content={
            <Textarea
              name="description"
              placeholder="ex) 유기농으로 당일 생산된 쫄깃쫄깃한 빵이 담길 수 있어요!"
              value={description ?? ''}
              onChange={handleInputChange}
              maxLength={300}
            />
          }
        />
        <QuestionContainer title="마감백 가격" content={<PriceSection />} />
      </div>
    </StepsLayout>
  );
}
