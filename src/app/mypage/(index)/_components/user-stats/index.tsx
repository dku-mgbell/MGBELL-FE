'use client';

import Text from '@/components/ui/text';
import { useUserAccountInfoStore } from '../../_stores/useUserAccountInfoStore';

export default function UserStats() {
  const { userAccountInfo } = useUserAccountInfoStore();
  const data = {
    orderCount: userAccountInfo?.orderCount
      ? `${userAccountInfo?.orderCount}회`
      : undefined,
    carbonReduction: userAccountInfo?.carbonReduction
      ? `${userAccountInfo?.carbonReduction.toFixed(2)}kg`
      : undefined,
  };

  return (
    <div className="mt-[16px] bg-gray10 rounded-[10px] flex w-full justify-evenly py-[14px]">
      <div className="flex flex-1 flex-col gap-[4px] items-center">
        <p className="text-b2 text-gray4">이용 횟수</p>
        <Text
          value={data.orderCount}
          height={21}
          className="font-bold text-b1"
          width={80}
        />
      </div>
      <hr className="w-[1px] h-[50px] bg-gray7" />
      <div className="flex flex-1 flex-col gap-[4px] items-center">
        <p className="text-b2 text-gray4">탄소 절감량</p>
        <Text
          value={data.carbonReduction}
          height={21}
          className="font-bold text-b1"
          width={80}
        />
      </div>
    </div>
  );
}
