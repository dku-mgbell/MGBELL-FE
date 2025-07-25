'use client';

import { useRouter } from 'next/navigation';
import CrossIcon from '@/assets/svg/CrossIcon';
import StepsLayout from '@/components/layout/steps-layout';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';
import useModal from '@/hooks/useModal';
import { AddressItem } from '../_components/address-list-item';

export default function Page() {
  const router = useRouter();
  const { userAddress, setUserAddress, userAddressList, deleteUserAddress } =
    useAddressStateStore();
  const { open } = useModal();

  const handleDeleteButtonClick = (addressName: string) => {
    open({
      content: '주소를 삭제하시겠습니까?',
      confirmEvent: () => {
        deleteUserAddress(addressName);
        if (userAddress.addressName === addressName) {
          setUserAddress({});
        }
      },
    });
  };

  return (
    <StepsLayout
      onNextButtonClick={() => {
        router.push('/location');
      }}
      isNextButtonEnabled
      nextButtonText="확인"
    >
      <ul className="flex flex-col gap-[20px]">
        {userAddressList.map((address) => (
          <AddressItem.Container
            key={address.addressName}
            value={address.addressName!}
            type="edit"
            className="flex justify-between"
          >
            <AddressItem.Content address={address} />
            <button
              type="button"
              className="clickable"
              onClick={() => handleDeleteButtonClick(address.addressName!)}
            >
              <CrossIcon size={10} />
            </button>
          </AddressItem.Container>
        ))}
      </ul>
    </StepsLayout>
  );
}
