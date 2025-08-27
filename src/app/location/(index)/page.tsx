'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AddressInput from '@/components/input/address/address-input';
import StepsLayout from '@/components/layout/steps-layout';
import { RadioGroup } from '@/components/ui/radio-group/index';
import TextField from '@/components/ui/text-field';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';
import { UserAddressState } from '@/types/address';
import Modal from '@/components/modal';
import useModal from '@/hooks/useModal';
import AddressListItem from '../_components/address-list-item';

export default function Page() {
  const route = useRouter();
  const [address, setAddress] = useState<UserAddressState | undefined>({});
  const { setUserAddress, userAddress, addUserAddress, userAddressList } =
    useAddressStateStore();
  const [isAddressRegisterModalOpen, setIsAddressRegisterModalOpen] =
    useState(false);
  const [selectedAddress, setSelectedAddress] = useState<
    UserAddressState | undefined
  >(userAddress);
  const { open } = useModal();

  const handleConfirmButtonClick = () => {
    if (selectedAddress?.address) {
      route.push('/');
      setUserAddress(selectedAddress);
    } else {
      open({
        title: '위치를 선택해주세요!',
        description: '주소 등록 후 위치를 선택해주세요.',
      });
    }
  };

  const handleRegisterButtonClick = () => {
    if (userAddressList.find((v) => v.addressName === address?.addressName)) {
      alert('이미 등록된   이름입니다.');
      return;
    }

    if (address?.addressName) {
      addUserAddress(address);
      setIsAddressRegisterModalOpen(false);
      setAddress({});
    }
  };

  const handleAdressNameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAddress({ ...address, addressName: e.target.value });
  };

  useEffect(() => {
    if (address && address.address) {
      setIsAddressRegisterModalOpen(true);
    }
  }, [address]);

  return (
    <StepsLayout
      onNextButtonClick={handleConfirmButtonClick}
      isNextButtonEnabled
      nextButtonText="확인"
      className="gap-[35px]"
    >
      <AddressInput
        updateAddress={setAddress}
        hiddenPreviousAddress
        placeholder="지번, 도로명, 건물명으로 검색"
      />
      <RadioGroup
        defaultValue={userAddress.addressName}
        onValueChange={(value) => {
          const result = userAddressList.find((v) => v.addressName === value);
          setSelectedAddress(result ?? undefined);
        }}
        className="flex flex-col gap-[20px]"
      >
        {userAddressList.map((v) => (
          <AddressListItem key={v.addressName} address={v} />
        ))}
      </RadioGroup>
      {isAddressRegisterModalOpen && (
        <Modal
          title="주소 등록"
          content={
            <div className="flex flex-col gap-[10px]">
              <TextField
                value={address?.addressName ?? ''}
                onChange={handleAdressNameInputChange}
                placeholder="주소 이름을 입력해주세요"
              />
              <TextField value={address?.address ?? ''} readOnly />
            </div>
          }
          setOpen={setIsAddressRegisterModalOpen}
          confirmButtonText="등록"
          confirmEvent={handleRegisterButtonClick}
          autoCloseOnConfirm={false}
        />
      )}
      {userAddressList.length > 0 && (
        <Link
          href="/location/edit"
          className="clickable mt-[10px] text-b2 text-gray4 text-center"
        >
          편집하기
        </Link>
      )}
    </StepsLayout>
  );
}
