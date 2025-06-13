import Link from 'next/link';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import StarIcon from '@/assets/svg/StarIcon';
import TimeOutlineIcon from '@/assets/svg/TimeOutlineIcon';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { Skeleton } from '../ui/skeleton';

function Title({ value }: { value?: string }) {
  return (
    <div className="text-b1 font-bold">
      {value || <Skeleton className="w-[100px] h-[24px]" />}
    </div>
  );
}

function Address({ value }: { value?: string }) {
  return (
    <div className="text-b2 text-gray4">
      {value || <Skeleton className="w-[100px] h-[21px]" />}
    </div>
  );
}

function Price({ price, discount }: { price?: number; discount?: number }) {
  if (price === undefined) return <Skeleton className="w-[150px] h-[27px]" />;

  return (
    <div className="flex items-center gap-[4px]">
      <span className=" text-[#EF444D] text-h5">{discount}%</span>
      <span className="text-h5">{commaizeNumber(price)}원</span>
    </div>
  );
}

function ReviewLink({
  bagId,
  storeId,
  count,
  score,
}: {
  bagId?: number;
  storeId?: number;
  count?: number;
  score?: number;
}) {
  if (count === undefined) return <Skeleton className="w-[150px] h-[21px]" />;

  return (
    <Link
      href={`/bag/review?bagId=${bagId}&storeId=${storeId}`}
      className="flex gap-[4px] items-center"
    >
      <StarIcon />
      <span className="text-b2 font-bold">
        {parseFloat(score?.toString() ?? '0').toFixed(1)}
      </span>
      <span className="text-b2 text-gray4">(리뷰 {count}개)</span>
      <ChevronRightIcon />
    </Link>
  );
}

function OpenStatus({
  isOpen,
  startAt,
  endAt,
  amount,
  isOpenTextVisible,
}: {
  isOpen?: boolean;
  startAt?: string;
  endAt?: string;
  amount?: number;
  isOpenTextVisible?: boolean;
}) {
  if (startAt === undefined) return <Skeleton className="w-[250px] h-[21px]" />;

  return (
    <div className="flex items-center gap-[10px]">
      {isOpen !== undefined && (
        <span className="text-b2 font-bold">
          {isOpen ? '영업중' : '영업종료'}
        </span>
      )}
      <p className="flex items-center gap-[4px] flex-row tracking-[-0.02em]">
        <TimeOutlineIcon />
        <span className="text-b2 ">
          {isOpenTextVisible && '픽업 가능 시간: '} {startAt}~{endAt}
        </span>
      </p>
      {amount && amount > 0 && (
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
  Address,
  Price,
  OpenStatus,
  ReviewLink,
};
