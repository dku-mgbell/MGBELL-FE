'use client';

import { useEffect } from 'react';
import Text from '@/components/ui/text';
import { useGetUserActivity } from '@/hooks/query/user/useGetUserActivity';
import { useGetUserInfo } from '@/hooks/query/user/useGetUserInfo';
import { useUserAccountInfoStore } from '../../_stores/useUserAccountInfoStore';

export default function UserProfileText() {
  const { data } = useGetUserActivity();
  const { setUserAccountInfo } = useUserAccountInfoStore();
  const { data: userInfo } = useGetUserInfo();

  useEffect(() => {
    if (data) {
      setUserAccountInfo(data);
    }
  }, [data]);

  return (
    <>
      <Text value={data?.name} height={30} className="font-bold text-h4" />
      <Text
        value={userInfo?.email}
        height={21}
        width={150}
        className="text-gray4 text-b2"
      />
    </>
  );
}
