import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { UseFormSetValue } from 'react-hook-form';
import { useGetCoord } from '@/hooks/query/map/useGetCoord';
import { Address } from '@/types/address';
import useModal from '@/hooks/useModal';

export default function useSearchAddress({
  setValue,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
}) {
  const { open, close } = useModal();
  const [address, setAddress] = useState('');
  const { data: coordData, isFetched: isCoordDataFetched } =
    useGetCoord(address);

  const handleCompleteAddressSearch = (res: Address) => {
    setAddress(res.address);
    setValue('address', res.address, { shouldValidate: true });
    close();
  };

  const openAddressModal = () => {
    open({
      noPadding: true,
      content: <DaumPostcode onComplete={handleCompleteAddressSearch} />,
    });
  };

  return {
    address,
    openAddressModal,
    coordData,
    isCoordDataFetched,
  };
}
