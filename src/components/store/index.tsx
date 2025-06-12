import TimeOutlineIcon from '@/assets/svg/TimeOutlineIcon';
import { commaizeNumber } from '@/utils/commaizeNumber';

function Title({ value }: { value: string }) {
  return <div className="text-b1 font-bold">{value}</div>;
}

function Price({ price, discount }: { price: number; discount: number }) {
  return (
    <div className="flex items-center gap-[4px]">
      <span className=" text-[#EF444D] text-h5">{discount}%</span>
      <span className="text-h5">{commaizeNumber(price)}원</span>
    </div>
  );
}

function OpenStatus({
  startAt,
  endAt,
  amount,
}: {
  startAt: string;
  endAt: string;
  amount: number;
}) {
  return (
    <div className="flex items-center gap-[10px]">
      <span className="text-b2 flex items-center gap-[4px] flex-row tracking-[-0.02em]">
        <TimeOutlineIcon />
        {startAt}~{endAt}
      </span>
      {amount > 0 && (
        <>
          <hr className="w-[1px] h-[12px] bg-[#E9E9E9]" />
          <span className="text-b2 font-bold text-[#EF444D]">
            {amount}개 남음
          </span>
        </>
      )}
    </div>
  );
}

export const Store = {
  Title,
  Price,
  OpenStatus,
};
