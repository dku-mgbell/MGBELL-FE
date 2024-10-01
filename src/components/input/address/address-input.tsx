'use client';

import DaumPostcode from 'react-daum-postcode';
import useModal from '@/hooks/useModal';
import { common } from '@/styles/common.css';
import { useEffect, useState } from 'react';
import { useTempDataStore } from '@/hooks/stores/useTempDataStore';
import { Address } from '@/types/address';
import Input from '../input';

export default function AddressInput() {
  const { open, close } = useModal();
  const [address, setAddress] = useState('');
  const { tempData, setTempData } = useTempDataStore();

  const handleInputClick = () => {
    open({
      content: (
        <DaumPostcode
          onComplete={(data: Address) => {
            setTempData(data.address);
            close();
          }}
        />
      ),
    });
  };

  useEffect(() => {
    if (tempData) setAddress(tempData);
  }, [tempData]);

  return (
    <>
      <Input
        placeholder="클릭하여 주소를 입력해주세요."
        onClick={handleInputClick}
        className={common.pointer}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Input placeholder="세부 주소 입력" />
    </>
  );
}
