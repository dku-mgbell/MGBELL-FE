'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/button/text-button/button';
import Input from '@/components/input/input';
import Textarea from '@/components/input/textarea/textarea';
import QuestionContainer from '@/components/question-container/question-container';
import { useGetBagInfoByOwner } from '@/hooks/query/bag/useGetBagInfoByOwner';
import { usePatchBag } from '@/hooks/query/bag/usePatchBag';
import useModal from '@/hooks/useModal';
import { common } from '@/styles/common.css';
import { MyBagInfoResponse } from '@/types/bag';
import { commaizeNumber } from '@/utils/commaizeNumber';
import * as styles from './styles.css';

export default function Page() {
  const [bagInfo, setBagInfo] = useState<MyBagInfoResponse>();
  const { data, isLoading } = useGetBagInfoByOwner();
  const route = useRouter();
  const { open } = useModal();
  const [inputPrice, setInputPrice] = useState({
    price: '',
    active: false,
  });
  const { mutate: patchBagInfo } = usePatchBag();
  useEffect(() => {
    if (data) setBagInfo(data);
  }, [data]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setBagInfo({ ...bagInfo!, [name]: value });
  };

  const handleSubmitButtonClick = () => {
    if (
      bagInfo &&
      bagInfo.bagName.length &&
      bagInfo.description.length &&
      bagInfo.amount &&
      bagInfo.salePrice > 0 &&
      bagInfo.startAt &&
      bagInfo.endAt
    ) {
      patchBagInfo({
        bagName: bagInfo.bagName,
        description: bagInfo.description,
        costPrice: bagInfo.costPrice,
        salePrice: bagInfo.salePrice,
        onSale: bagInfo.onSale,
        startAt: bagInfo.startAt,
        endAt: bagInfo.endAt,
        amount: bagInfo.amount,
      });
    } else {
      open({ content: '공란이 존재합니다.' });
    }
  };

  if (isLoading) return <> </>;

  const priceInputList = [data!.salePrice, 900, 3900, 5900, 7900];

  return (
    <div className={styles.container}>
      <div className={common.box}>
        <QuestionContainer
          title="마감백 이름"
          content={
            <Input
              name="bagName"
              value={bagInfo?.bagName}
              onChange={handleInputChange}
            />
          }
        />
      </div>
      <div className={common.box}>
        <QuestionContainer
          title="마감백 설명"
          content={
            <Textarea
              name="description"
              value={bagInfo?.description}
              maxLength={200}
              onChange={handleInputChange}
            />
          }
        />
      </div>
      <div className={common.box}>
        <QuestionContainer
          title="마감백 수량"
          content={
            <Input
              name="amount"
              type="number"
              value={bagInfo?.amount}
              onChange={handleInputChange}
            />
          }
        />
      </div>
      <div className={common.box}>
        <QuestionContainer
          title="픽업 가능 시간"
          content={
            <div className={styles.timeInputContainer}>
              <input
                name="startAt"
                onChange={handleInputChange}
                type="time"
                defaultValue={bagInfo?.startAt}
              />
              <span>~</span>
              <input
                name="endAt"
                onChange={handleInputChange}
                type="time"
                defaultValue={bagInfo?.endAt}
              />
            </div>
          }
        />
      </div>
      <div className={common.box}>
        <QuestionContainer
          title="마감백 가격"
          content={
            <div className={styles.priceContainer}>
              {priceInputList
                .filter((v, i) => (i === 0 ? true : v !== data!.salePrice))
                .map((price, index) => (
                  <label key={`input-${price}`}>
                    <input
                      type="radio"
                      name="price"
                      value={price}
                      defaultChecked={index === 0}
                      onChange={(e) => {
                        setInputPrice({ price: '', active: false });
                        setBagInfo((prev) => ({
                          ...prev!,
                          salePrice: +e.target.value,
                          costPrice: +e.target.value * 2,
                        }));
                      }}
                    />
                    {index === 0 && '현재 설정된 가격: '}
                    {commaizeNumber(price!)}원 (원가{' '}
                    {commaizeNumber(price! * 2)}원 이상)
                  </label>
                ))}
              <label>
                <input
                  type="radio"
                  name="price"
                  checked={inputPrice.active}
                  onChange={() => {
                    setInputPrice({ price: '', active: true });
                  }}
                />
                <input
                  type="number"
                  placeholder="직접 입력"
                  value={inputPrice.price}
                  onClick={() => {
                    setInputPrice({
                      active: true,
                      price: '',
                    });
                  }}
                  onChange={(e) => {
                    if (inputPrice.active)
                      setInputPrice({ active: true, price: e.target.value });
                    setBagInfo({
                      ...bagInfo!,
                      salePrice: +e.target.value,
                      costPrice: +e.target.value * 2,
                    });
                  }}
                />
                원 (원가 {+inputPrice.price * 2}원 이상)
              </label>
            </div>
          }
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          value="취소"
          theme="gray"
          onClick={() => {
            route.push('/store/sale');
          }}
        />
        <Button value="적용" onClick={handleSubmitButtonClick} />
      </div>
    </div>
  );
}
