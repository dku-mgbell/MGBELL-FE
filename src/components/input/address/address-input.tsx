import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Input from '@/components/input/input';
import Loader from '@/components/loader/loader';
import { useGetCoord } from '@/hooks/query/map/useGetCoord';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';
import useModal from '@/hooks/useModal';
import { common } from '@/styles/common.css';
import { Address, UserAddressState } from '@/types/address';

export default function AddressInput({
  updateAddress,
  showDetailInput,
}: {
  updateAddress: Dispatch<SetStateAction<UserAddressState | undefined>>;
  showDetailInput?: boolean;
}) {
  const { open, close } = useModal();
  const [address, setAddress] = useState('');
  // const [detailAddress, setDetailAddress] = useState('');
  const [addressError] = useState(false);
  const { addressState } = useAddressStateStore();
  const { data, isLoading } = useGetCoord(address);

  const handleInputClick = () => {
    open({
      noPadding: true,
      content: (
        <DaumPostcode
          onComplete={(res: Address) => {
            setAddress(res.address);
            close();
          }}
        />
      ),
    });
  };

  useEffect(() => {
    if (address.length > 0) {
      updateAddress({
        address: data?.addresses[0].roadAddress,
        longitude: data?.addresses[0].x,
        latitude: data?.addresses[0].y,
      });
    }
  }, [data]);

  if (isLoading) return <Loader />;

  return (
    <>
      <Input
        placeholder="클릭하여 주소를 입력해주세요."
        onClick={handleInputClick}
        onFocus={handleInputClick}
        className={common.pointer}
        value={address.length > 0 ? address : addressState.address}
        theme={addressError ? 'error' : 'default'}
        readOnly
      />
      <div style={{ height: 10 }} />
      {showDetailInput && (
        <Input
          name="address"
          placeholder="세부 주소 입력"
          onChange={(e) => {
            updateAddress((prev) => ({ ...prev, detail: e.target.value }));
          }}
        />
      )}
    </>
  );
}
