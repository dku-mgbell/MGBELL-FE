'use client';

import { useEffect } from 'react';
import SocialIcon from '@/assets/svg/social';
import Text from '@/components/ui/text';
import { useGetUserAccountInfo } from '@/hooks/query/user/useGetUserAccountInfo';
import { useGetUserActivity } from '@/hooks/query/user/useGetUserActivity';
import { useUserAccountInfoStore } from '../../_stores/useUserAccountInfoStore';

export default function UserProfile() {
  const { data: accountData, isFetched: isAccountDataFetched } =
    useGetUserAccountInfo({ enabled: true });
  const { data: activityData, isFetched: isActivityDataFetched } =
    useGetUserActivity();
  const { userAccountInfo, setUserAccountInfo } = useUserAccountInfoStore();

  useEffect(() => {
    if (isAccountDataFetched && isActivityDataFetched) {
      setUserAccountInfo({
        ...accountData!,
        ...activityData!,
      });
    }
  }, [isAccountDataFetched, isActivityDataFetched]);

  return (
    <div className="flex flex-col gap-[6px]">
      <Text
        value={userAccountInfo?.nickName}
        height={30}
        className="font-bold text-h4 text-left"
      />
      <Text
        value={
          <span className="text-gray4 text-b2 flex items-center gap-[8px]">
            <SocialIcon provider={userAccountInfo?.providerType} size={24} />
            {userAccountInfo?.email}
          </span>
        }
        height={21}
        width={150}
        className="text-gray4 text-b2"
      />
    </div>
  );
}
