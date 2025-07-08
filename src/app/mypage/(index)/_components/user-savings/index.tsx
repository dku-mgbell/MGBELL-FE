'use client';

import CoinIcon from '@/assets/svg/CoinIcon';
import Text from '@/components/ui/text';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { useUserAccountInfoStore } from '../../_stores/useUserAccountInfoStore';

export default function UserSavings() {
  const { userAccountInfo } = useUserAccountInfoStore();
  const savedPrice = userAccountInfo?.savedPrice
    ? `${commaizeNumber(userAccountInfo?.savedPrice ?? 0)}원`
    : undefined;

  return (
    <div className="flex justify-between py-[13px] px-[20px] bg-[#FFF0D1] rounded-[10px]">
      <p>절약한 금액</p>
      <Text
        value={
          userAccountInfo?.savedPrice && (
            <span className="flex items-center gap-[6px] font-bold">
              <CoinIcon />
              {savedPrice}
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
