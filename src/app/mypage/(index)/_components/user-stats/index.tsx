'use client';

import InformationIcon from '@/assets/svg/InformationIcon';
import Text from '@/components/ui/text';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { useUserAccountInfoStore } from '../../_stores/useUserAccountInfoStore';

export default function UserStats() {
  const { userAccountInfo } = useUserAccountInfoStore();

  const data = {
    purchaseCount:
      userAccountInfo?.purchaseCount !== undefined
        ? `${userAccountInfo?.purchaseCount}회`
        : undefined,
    savedKg:
      userAccountInfo?.savedKg !== undefined
        ? `${userAccountInfo?.savedKg.toFixed(2)}kg`
        : undefined,
  };

  return (
    <div className="mt-[16px] bg-gray10 rounded-[10px] flex w-full justify-evenly py-[14px]">
      <div className="flex flex-1 flex-col gap-[4px] items-center">
        <p className="text-b2 text-gray4">이용 횟수</p>
        <Text
          value={data.purchaseCount}
          height={21}
          className="font-bold text-b1"
          width={80}
        />
      </div>
      <hr className="w-[1px] h-[50px] bg-gray7" />
      <div className="flex flex-1 flex-col gap-[4px] items-center">
        <div className="flex  flex-1 gap-[2px] justify-center items-center">
          <p className="text-b2 text-gray4">탄소 절감량</p>
          <Tooltip>
            <TooltipTrigger>
              <button className="clickable" type="button">
                <InformationIcon />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-b3 font-bold mb-[8px]">탄소 절감량이란?</p>
              <p className="text-b3">
                탄소 절감량이란, 버려질 뻔한 마감 재고를 구매함으로써 <br />
                폐기 과정에서 발생했을 탄소를 얼마나 줄였는지를 대략적으로
                <br />
                추정한 지표입니다.
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Text
          value={data.savedKg}
          height={21}
          className="font-bold text-b1"
          width={80}
        />
      </div>
    </div>
  );
}
