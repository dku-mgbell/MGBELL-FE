import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Loader from '@/components/loader/loader';
import TextField from '@/components/ui/text-field';
import { useGetCoord } from '@/hooks/query/map/useGetCoord';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';
import { Address, UserAddressState } from '@/types/address';
import useModal from '@/hooks/useModal';

type AddressInputProps = {
  updateAddress: Dispatch<SetStateAction<UserAddressState | undefined>>;
  showDetailInput?: boolean;
  hiddenPreviousAddress?: boolean;
  placeholder?: string;
};

export default function AddressInput({
  updateAddress,
  showDetailInput,
  hiddenPreviousAddress,
  placeholder,
}: AddressInputProps) {
  const { open, close } = useModal();
  const [address, setAddress] = useState('');
  const [addressError] = useState(false);
  const { userAddress } = useAddressStateStore();
  const { data, isLoading } = useGetCoord(address);

  const inputValue = address.length > 0 ? address : userAddress.address;

  const handleInputClick = () => {
    open({
      className: 'p-[15px]',
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
      <TextField
        placeholder={placeholder || '클릭하여 주소를 입력해주세요.'}
        onClick={handleInputClick}
        onFocus={handleInputClick}
        className=""
        value={hiddenPreviousAddress ? undefined : inputValue}
        variant={addressError ? 'error' : 'default'}
        readOnly
      />
      {showDetailInput && (
        <>
          <div style={{ height: 10 }} />
          <TextField
            name="address"
            placeholder="세부 주소 입력"
            onChange={(e) => {
              updateAddress((prev) => ({ ...prev, detail: e.target.value }));
            }}
          />
        </>
      )}
    </>
  );
}
