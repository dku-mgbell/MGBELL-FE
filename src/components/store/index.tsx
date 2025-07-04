import Image from 'next/image';
import Link from 'next/link';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import StarIcon from '@/assets/svg/StarIcon';
import TimeOutlineIcon from '@/assets/svg/TimeOutlineIcon';
import { cn } from '@/lib/utils';
import { StoreDetailWithBag } from '@/types/store';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { format24HourTime } from '@/utils/format24HourTime';
import { Skeleton } from '../ui/skeleton';

function Title({ value, className }: { value?: string; className?: string }) {
  return (
    <div
      className={cn(
        'text-b1 font-bold whitespace-nowrap overflow-hidden text-ellipsis',
        className,
      )}
    >
      {value || <Skeleton className="w-[100px] h-[24px]" />}
    </div>
  );
}

function Description({
  value,
  className,
}: {
  value?: string;
  className?: string;
}) {
  return (
    <div
      className={cn('text-b2 text-gray4 h-[100px] overflow-auto', className)}
    >
      {value || <Skeleton className="w-full h-[100px]" />}
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

type OpenStatusProps = Pick<
  StoreDetailWithBag,
  'saleStatus' | 'startTime' | 'endTime' | 'quantity'
> & {
  isOpenTextVisible?: boolean;
  textSize?: 'md' | 'sm';
};

function OpenStatus({
  saleStatus,
  startTime,
  endTime,
  quantity,
  isOpenTextVisible,
  textSize = 'md',
}: Partial<OpenStatusProps>) {
  const textSizeClass = {
    md: 'text-b2',
    sm: 'text-b3',
  };

  if (startTime === undefined)
    return <Skeleton className="w-[250px] h-[21px]" />;

  const startTimeString = format24HourTime(startTime!);
  const endTimeString = format24HourTime(endTime!);

  return (
    <div className="flex items-center gap-[10px]">
      {saleStatus !== undefined && isOpenTextVisible && (
        <span className={cn('font-bold', textSizeClass[textSize])}>
          {saleStatus === 'ON' ? '영업중' : '영업종료'}
        </span>
      )}
      <p className="flex items-center gap-[4px] flex-row tracking-[-0.02em] whitespace-nowrap overflow-hidden text-ellipsis">
        <TimeOutlineIcon />
        <span className={cn('text-b2 ', textSizeClass[textSize])}>
          {isOpenTextVisible && '픽업 가능 시간: '} {startTimeString}~
          {endTimeString}
        </span>
      </p>
      {quantity && quantity > 0 ? (
        <>
          <hr className="w-[1px] h-[12px] bg-[#E9E9E9]" />
          <span
            className={cn('font-bold text-[#EF444D]', textSizeClass[textSize])}
          >
            {quantity}개 남음
          </span>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

function HorizontalThumbnail({ images }: { images: string[] }) {
  return (
    <div className="flex items-center gap-[6px] w-full max-w-[450px]">
      {images.map((image) => (
        <div
          key={image}
          className="w-[33%] h-[70px] rounded-[8px] overflow-hidden"
        >
          <Image
            src={image}
            alt="thumbnail"
            width={200}
            height={70}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

export const Store = {
  Title,
  Address,
  Price,
  OpenStatus,
  ReviewLink,
  HorizontalThumbnail,
  Description,
};
