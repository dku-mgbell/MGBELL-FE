'use client';

import { useEffect } from 'react';
import Text from '@/components/ui/text';
import { useGetUserActivity } from '@/hooks/query/user/useGetUserActivity';
import { useGetUserInfo } from '@/hooks/query/user/useGetUserInfo';
import { useUserAccountInfoStore } from '../../_stores/useUserAccountInfoStore';

export default function UserProfileText() {
  const { data: userActivity } = useGetUserActivity();
  const { data: userInfo } = useGetUserInfo();
  const { userAccountInfo, setUserAccountInfo } = useUserAccountInfoStore();

  useEffect(() => {
    if (userActivity && userInfo) {
      setUserAccountInfo({
        ...userActivity,
        email: userInfo?.email,
      });
    }
  }, [data, userInfo]);

  return (
    <>
      <Text
        value={userAccountInfo?.name}
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
