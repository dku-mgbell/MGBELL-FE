'use client';

import { useEffect } from 'react';
import Text from '@/components/ui/text';
import { useGetUserAccountInfo } from '@/hooks/query/user/useGetUserAccountInfo';
import { useUserAccountInfoStore } from '../../_stores/useUserAccountInfoStore';

export default function UserProfileText() {
  const { data, isFetched } = useGetUserAccountInfo({ enabled: true });
  const { userAccountInfo, setUserAccountInfo } = useUserAccountInfoStore();

  useEffect(() => {
    if (isFetched) {
      setUserAccountInfo(data!);
    }
  }, [isFetched]);

  return (
    <>
      <Text
        value={userAccountInfo?.nickName}
        height={30}
        className="font-bold text-h4"
      />
      <Text
        value={userAccountInfo?.email}
        height={21}
        width={150}
        className="text-gray4 text-b2"
      />
    </>
  );
}
