import DaumPostcode from 'react-daum-postcode';
import useModal from '@/hooks/useModal';
import { common } from '@/styles/common.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Input from '@/components/input/input';
import { useGetCoord } from '@/hooks/query/map/useGetCoord';
import { Address, UserAddressState } from '@/types/address';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';
import Loader from '@/components/loader/loader';

export default function AddressInput({
  updateAddress,
}: {
  updateAddress: Dispatch<SetStateAction<UserAddressState | undefined>>;
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
      {/* {hiddenDetailAddress || (
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
      )} */}
    </>
  );
}
