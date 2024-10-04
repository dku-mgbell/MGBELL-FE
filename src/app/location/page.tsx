'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/button/button';
import SearchInput from '@/components/input/search/search-input';
import HeaderLayout from '@/components/layout/header-layout/header-layout';
import StepsLayout from '@/components/layout/steps-layout/steps-layout';
import { common } from '@/styles/common.css';

export default function Page() {
  const route = useRouter();

  return (
    <HeaderLayout title="주소 설정" previousPageLink="/">
      <StepsLayout
        onNextStep={() => {
          route.push('/');
        }}
        buttonContent="적용"
      >
        <div className={common.flexBox({ gap: 15 })}>
          <SearchInput theme="lightGray" placeholder="주소를 검색해주세요" />
          <Button value="현재 위치로 찾기" theme="light-yellow" />
        </div>
      </StepsLayout>
    </HeaderLayout>
  );
}
