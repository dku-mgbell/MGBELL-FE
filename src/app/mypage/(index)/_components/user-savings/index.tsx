'use client';

import CoinIcon from '@/assets/svg/CoinIcon';
import Text from '@/components/ui/text';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { useUserAccountInfoStore } from '../../_stores/useUserAccountInfoStore';

export default function UserSavings() {
  const { userAccountInfo } = useUserAccountInfoStore();
  const totalDiscount = userAccountInfo?.totalDiscount
    ? `${commaizeNumber(userAccountInfo?.totalDiscount ?? 0)}원`
    : undefined;

  return (
    <div className="flex justify-between py-[13px] px-[20px] bg-[#FFF0D1] rounded-[10px]">
      <p>절약한 금액</p>
      <Text
        value={
          userAccountInfo?.totalDiscount && (
            <span className="flex items-center gap-[6px] font-bold">
              <CoinIcon />
              {totalDiscount}
            </span>
          )
        }
        height={21}
        width={80}
        className="text-b1 font-bold"
      />
    </div>
  );
}
