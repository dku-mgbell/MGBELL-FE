'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import QuestionContainer from '@/components/question-container/question-container';
import { useRegisterBag } from '@/hooks/query/store/useRegisterBag';
import { common } from '@/styles/common.css';
import {
  defaultBagInfo,
  useBagInfoStateStore,
} from '@/hooks/stores/useBagInfoStore';
import OnSaleButton from './(components)/on-sale-button/on-sale-button';
import SaleTimeSelector from './(components)/sale-time-selector/sale-time-selector';

export default function Page() {
  const route = useRouter();
  const { bagInfoState } = useBagInfoStateStore();
  const { mutate } = useRegisterBag();
  const {
    bagName,
    description,
    costPrice,
    salePrice,
    amount,
    onSale,
    startAt,
    endAt,
  } = bagInfoState;

  const handleNextButtonClick = () => {
    const bagInfo = {
      bagName,
      description,
      costPrice: Number(costPrice),
      salePrice: Number(salePrice),
      amount,
      pickupTime: {
        onSale,
        startAt,
        endAt,
      },
    };
    mutate(bagInfo);
  };

  useEffect(() => {
    if (bagInfoState === defaultBagInfo) route.push('/register/bag/info');
  }, []);

  return (
    <StepsLayout
      isNextStepAllowed
      onNextStep={handleNextButtonClick}
      theme="secondary"
      buttonContent="등록"
    >
      <div className={common.flexBox({ gap: 45 })}>
        <QuestionContainer
          title="판매 여부"
          desc="당일 마감백 판매 여부를 선택해주세요."
          content={<OnSaleButton />}
        />
        <QuestionContainer
          title="판매 시간"
          desc="픽업을 원하는 시간을 설정해주세요."
          content={<SaleTimeSelector />}
        />
      </div>
    </StepsLayout>
  );
}
