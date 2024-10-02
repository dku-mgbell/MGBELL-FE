import DaumPostcode from 'react-daum-postcode';
import useModal from '@/hooks/useModal';
import { common } from '@/styles/common.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTempDataStore } from '@/hooks/stores/useTempDataStore';
import { Address } from '@/types/address';
import Input from '../input';

export default function AddressInput({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const { open, close } = useModal();
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const { tempData, setTempData } = useTempDataStore();
  const [addressError, setAddressError] = useState(false);

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
        onFocus={handleInputClick}
        className={common.pointer}
        value={address}
        theme={addressError ? 'error' : 'default'}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Input
        name="address"
        placeholder="세부 주소 입력"
        onChange={(e) => {
          if (address.length > 0) {
            setAddressError(false);
            setDetailAddress(e.target.value);
            onChange({
              ...e,
              target: {
                ...e.target,
                name: 'address',
                value: `${address} ${e.target.value}`,
              },
            });
          } else {
            setAddressError(true);
          }
        }}
        value={detailAddress}
      />
    </>
  );
}
