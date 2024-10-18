import DaumPostcode from 'react-daum-postcode';
import useModal from '@/hooks/useModal';
import { common } from '@/styles/common.css';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useTempDataStore } from '@/hooks/stores/useTempDataStore';
import { useGetCoord } from '@/hooks/query/map/useGetCoord';
import { Address } from '@/types/address';
import { Coordinate } from '@/types/map';
import Input from '../input';

export default function AddressInput({
  onChange,
  setCoordinateState,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setCoordinateState: Dispatch<SetStateAction<Coordinate | undefined>>;
}) {
  const { open, close } = useModal();
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const { tempData: addressTempData, setTempData: setAddressTempData } =
    useTempDataStore();
  const [addressError, setAddressError] = useState(false);
  const { data: coordinate } = useGetCoord(addressTempData ?? '');

  const handleInputClick = () => {
    open({
      content: (
        <DaumPostcode
          onComplete={(data: Address) => {
            setAddressTempData(data.address);
            close();
          }}
        />
      ),
    });
  };

  useEffect(() => {
    if (addressTempData) setAddress(addressTempData);
  }, [addressTempData]);

  useEffect(() => {
    setCoordinateState({
      latitude: coordinate?.addresses[0].y ?? '',
      longitude: coordinate?.addresses[0].x ?? '',
    });
  }, [coordinate]);

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
