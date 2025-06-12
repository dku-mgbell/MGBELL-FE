import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Store } from '@/components/store';

function ThumbnailGrid({
  children,
  isSoldOut,
}: {
  children: React.ReactNode;
  isSoldOut: boolean;
}) {
  return (
    <div
      className="w-full h-[180px] grid grid-cols-2 grid-rows-2 rounded-md overflow-hidden relative"
      style={{
        gridTemplateColumns: '2fr 1fr',
        gridTemplateRows: '1fr 1fr',
      }}
    >
      {children}
      {isSoldOut && (
        <div className="absolute inset-0 bg-black/50 z-10 text-white flex items-center justify-center">
          <span className="text-h5 font-bold">품절</span>
        </div>
      )}
    </div>
  );
}

function Thumbnail({
  index,
  src,
  alt,
}: {
  index: number;
  src: string;
  alt: string;
}) {
  const style: {
    [key: number]: {
      gridColumn: string;
      gridRow: string;
      border: string;
    };
  } = {
    0: {
      gridColumn: '1 / 2',
      gridRow: '1 / 3',
      border: 'border-r-[2px]',
    },
    1: {
      gridColumn: '2 / 3',
      gridRow: '1 / 2',
      border: 'border-l-[2px] border-b-[2px]',
    },
    2: {
      gridColumn: '2 / 3',
      gridRow: '2 / 3',
      border: 'border-l-[2px] border-t-[2px]',
    },
  };

  return (
    <Image
      alt={alt}
      src={src}
      className={cn(
        'main-store-thumbnail',
        index === 0 ? 'h-[180px]' : 'h-[90px]',
        style[index].border,
      )}
      width={200}
      height={200}
      style={{
        gridColumn: style[index].gridColumn,
        gridRow: style[index].gridRow,
      }}
    />
  );
}

function MainStoreInfo({
  title,
  price,
  discount,
  startAt,
  endAt,
  amount,
}: {
  title?: string;
  price?: number;
  discount?: number;
  startAt?: string;
  endAt?: string;
  amount?: number;
}) {
  return (
    <div className="flex flex-col mt-[8px] px-[4px]">
      <div className="flex flex-row justify-between items-center">
        {title ? (
          <Store.Title value={title} />
        ) : (
          <Skeleton className="w-[100px] h-[24px]" />
        )}
        {price && discount ? (
          <Store.Price price={price} discount={discount} />
        ) : (
          <Skeleton className="w-[100px] h-[27px]" />
        )}
      </div>
      {startAt && endAt && amount !== undefined ? (
        <Store.OpenStatus startAt={startAt} endAt={endAt} amount={amount} />
      ) : (
        <Skeleton className="w-[100px] h-[21px]" />
      )}
    </div>
  );
}

export const Item = {
  Thumbnail,
  ThumbnailGrid,
  MainStoreInfo,
};
