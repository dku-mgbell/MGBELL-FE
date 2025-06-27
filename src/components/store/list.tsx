import Link from 'next/link';
import { cn } from '@/lib/utils';
import { StoreListItemResponse } from '@/types/store';
import { Store } from '.';

export default function StoreContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn('flex flex-col gap-[20px] items-start', className)}>
      {children}
    </ul>
  );
}

export function StoreListItem({
  data,
  onClick,
}: {
  data: StoreListItemResponse;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="clickable w-full pb-[30px] [&:not(:last-child)]:border-b border-gray7"
      onClick={onClick}
    >
      <Link
        href={`/store/${data.storeId}`}
        className={cn(
          'flex flex-col items-start gap-[8px] w-full',
          onClick && 'pointer-events-none',
        )}
      >
        <div className="flex flex-col items-start gap-[4px]">
          <Store.Title value={data.storeName} />
          <Store.OpenStatus
            saleStatus={data.saleStatus}
            startTime={data.startTime}
            endTime={data.endTime}
            quantity={data.quantity}
            isOpenTextVisible
          />
          <Store.Address value="경기도 용인시 수지구 죽전로 77 1층" />
          {/* //TODO: 주소 추가 */}
        </div>
        <Store.HorizontalThumbnail
          images={
            data.ImageUrl ?? [
              data.ImageUrl[0],
              data.ImageUrl[0],
              data.ImageUrl[0],
            ]
          }
        />
      </Link>
    </button>
  );
}

export const StoreList = {
  Container: StoreContainer,
  Item: StoreListItem,
};
