'use client';

import { useRouter } from 'next/navigation';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import { common } from '@/styles/common.css';
import AddressInput from '@/components/input/address/address-input';
import { useState } from 'react';
import { useAddressStateStore } from '@/hooks/stores/useAddressStore';
import { UserAddressState } from '@/types/address';

export default function Page() {
  const route = useRouter();
  const [address, setAddress] = useState<UserAddressState>();
  const { setAddressState } = useAddressStateStore();

  return (
    <HeaderLayout title="주소 설정" previousPageLink="/">
      <StepsLayout
        onNextStep={() => {
          if (address) {
            route.push('/');
            setAddressState(address);
          }
        }}
        isNextStepAllowed={!!address}
        buttonContent="적용"
      >
        <div className={common.flexBox({ gap: 15 })}>
          <AddressInput updateAddress={setAddress} />
          {/* <SearchInput theme="lightGray" placeholder="주소를 검색해주세요" />
          <Button value="현재 위치로 찾기" theme="light-yellow" /> */}
        </div>
      </StepsLayout>
    </HeaderLayout>
  );
}
