'use client';

import { useEffect } from 'react';
import SocialIcon from '@/assets/svg/social';
import Text from '@/components/ui/text';
import { useGetUserAccountInfo } from '@/hooks/query/user/useGetUserAccountInfo';
import { useUserAccountInfoStore } from '../../_stores/useUserAccountInfoStore';

export default function UserProfile() {
  const { data, isFetched } = useGetUserAccountInfo({ enabled: true });
  const { userAccountInfo, setUserAccountInfo } = useUserAccountInfoStore();

  useEffect(() => {
    if (isFetched) {
      setUserAccountInfo(data!);
    }
  }, [isFetched]);

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
