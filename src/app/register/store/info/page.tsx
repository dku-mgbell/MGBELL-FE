'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import AddressInput from '@/components/input/address/address-input';
import Input from '@/components/input/input';
import PhotoUpload from '@/components/input/photo/photo-upload/photo-upload';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import QuestionContainer from '@/components/question-container/question-container';
import { useRegisterStore } from '@/hooks/query/store/useRegisterStore';
import { useStoreRegisterStore } from '@/hooks/stores/useStoreRegisterStore';
import { UserAddressState } from '@/types/address';
import { useAuth } from '@/hooks/useAuth';
import StoreSelector from '../(components)/store-selector/store-selector';
import { styles } from './styles.css';

export default function Page() {
  const { storeState, setStoreState } = useStoreRegisterStore();
  const { mutate } = useRegisterStore();
  const { redirectLoginPage } = useAuth();
  const [addressInputValue, setAddressInputValue] =
    useState<UserAddressState>();
  const [imageFiles, setImageFiles] = useState<File[]>();
  const {
    storeName,
    ownerName,
    contact,
    businessRegiNum,
    address,
    longitude,
    latitude,
    storeType,
  } = storeState;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStoreState({ ...storeState, [e.target.name]: e.target.value });
  };

  const handleNextButtonClick = () => {
    mutate(storeState);
  };

  const isFormFilled =
    storeName.length > 0 &&
    ownerName.length > 0 &&
    contact.length > 0 &&
    businessRegiNum.length > 0 &&
    address.length > 0 &&
    !!longitude &&
    !!latitude &&
    !!imageFiles &&
    !!storeType;

  useEffect(() => {
    redirectLoginPage();
  }, []);

  useEffect(() => {
    setStoreState({
      ...storeState,
      address: `${addressInputValue?.address}${addressInputValue?.detail ? ` ${addressInputValue?.detail}` : ''}`,
      longitude: addressInputValue?.longitude ?? '',
      latitude: addressInputValue?.latitude ?? '',
    });
  }, [addressInputValue]);

  useEffect(() => {
    setStoreState({ ...storeState, images: imageFiles ?? [] });
  }, [imageFiles]);

  return (
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
              name="storeName"
              placeholder="ex) 마감베이커리 죽전점"
              onChange={handleInputChange}
              value={storeState.storeName}
            />
          }
        />
        <QuestionContainer
          title="사업주"
          content={
            <Input
              name="ownerName"
              placeholder="사업주 성함을 입력해주세요"
              onChange={handleInputChange}
              value={storeState.ownerName}
            />
          }
        />
        <QuestionContainer
          title="사업자등록번호"
          content={
            <Input
              name="businessRegiNum"
              placeholder="사업자등록번호를 입력해주세요"
              onChange={handleInputChange}
              value={storeState.businessRegiNum}
            />
          }
        />
        <QuestionContainer
          title="매장 연락처"
          content={
            <Input
              name="contact"
              placeholder="ex) 03112345678"
              onChange={handleInputChange}
              value={storeState.contact}
            />
          }
        />
        <QuestionContainer
          title="매장 주소"
          desc="클릭하여 주소를 입력해주세요!"
          content={
            <AddressInput
              updateAddress={setAddressInputValue}
              showDetailInput
            />
          }
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
          title="매장 사진"
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
          content={<PhotoUpload updateImageFiles={setImageFiles} />}
        />
      </div>
    </StepsLayout>
  );
}
