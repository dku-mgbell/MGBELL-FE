'use client';

import Input from '@/components/input/input';
import { ChangeEvent, useEffect } from 'react';
import { useStoreRegisterStore } from '@/hooks/stores/useStoreRegisterStore';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import QuestionContainer from '@/components/question-container/question-container';
import AddressInput from '@/components/input/address/address-input';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import { useRegisterStore } from '@/hooks/query/store/useRegisterStore';
import { useAuth } from '@/hooks/useAuth';
import { StoreID } from '@/types/store';
import StoreSelector from './(components)/store-selector/store-selector';
import ImageUploader from './(components)/image-uploader/image-uploader';
import { styles } from './styles.css';

export default function Page() {
  const { storeState, setStoreState } = useStoreRegisterStore();
  const { mutate } = useRegisterStore();
  const { redirectLoginPage } = useAuth();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStoreState({ ...storeState, [e.target.name]: e.target.value });
  };

  const handleNextButtonClick = () => {
    mutate({
      name: storeState.name,
      address: storeState.address,
      storeType: storeState.storeType as StoreID,
    });
  };

  const isFormFilled =
    !!storeState.address.length &&
    !!storeState.name.length &&
    !!storeState.storeType;

  useEffect(() => {
    redirectLoginPage();
  }, []);

  return (
    <HeaderLayout title="매장 등록">
      <StepsLayout
        isNextStepAllowed={isFormFilled}
        onNextStep={handleNextButtonClick}
        buttonContent="등록"
      >
        <div className={styles.container}>
          <QuestionContainer
            title="매장 이름"
            desc="체인점일 경우, 지점명까지 입력해주세요!"
            content={
              <Input
                name="name"
                placeholder="ex) 나리네 상점 / 보정동점"
                onChange={handleInputChange}
                value={storeState.name}
              />
            }
          />
          <QuestionContainer
            title="매장 주소"
            desc="클릭하여 주소를 입력해주세요!"
            content={<AddressInput onChange={handleInputChange} />}
          />
          <QuestionContainer
            title="매장 업종 선택"
            desc={
              <>
                나의 매장에 해당되는 항목을 체크해주세요.
                <span className={styles.primaryText}>(택1)</span>
              </>
            }
            content={
              <StoreSelector
                checked={storeState.storeType}
                onChange={handleInputChange}
              />
            }
          />
          <QuestionContainer
            title="매장 음식 사진"
            desc={
              <>
                <span className={styles.darkGrayText}>
                  우리의 멋진 매장을 홍보할 음식 사진이 필요해요.
                </span>
                <br />
                지금 당장 업로드 할 사진이 생각나지 않으신다면 비워두셔도
                괜찮습니다! 저희 마감벨이 SNS를 통해 가장 예쁘게 나온 사진을
                업로드 해놓겠습니다!
                <span className={styles.primaryText}>
                  (3장의 사진이 필요해요.)
                </span>
              </>
            }
            content={<ImageUploader />}
          />
        </div>
      </StepsLayout>
    </HeaderLayout>
  );
}
