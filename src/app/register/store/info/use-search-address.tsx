import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useGetCoord } from '@/hooks/query/map/useGetCoord';
import { Address } from '@/types/address';
import useModal from '@/hooks/useModal';

export default function useSearchAddress() {
  const { open, close } = useModal();
  const [address, setAddress] = useState('');
  const { data: coordData, isFetched: isCoordDataFetched } =
    useGetCoord(address);

  const handleCompleteAddressSearch = (res: Address) => {
    setAddress(res.address);
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
