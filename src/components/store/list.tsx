import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BagInfoResponse } from '@/types/bag';
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

export type StoreListItemProps = BagInfoResponse & { storeId?: number };

export function StoreListItem({
  data,
  onClick,
}: {
  data: StoreListItemProps;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="clickable w-full pb-[30px] [&:not(:last-child)]:border-b border-gray7"
      onClick={onClick}
    >
      <Link
        href={`/bag/${data.id}`}
        className={cn(
          'flex flex-col items-start gap-[8px] w-full',
          onClick && 'pointer-events-none',
        )}
      >
        <div className="flex flex-col items-start gap-[4px]">
          <Store.Title value={data.storeName} />
          {/* <Store.OpenStatus
            isOpen={data.onSale}
            startAt={data.startAt}
            endAt={data.endAt}
            amount={data.amount}
          /> */}
          <Store.Address value={data.address} />
        </div>
        <Store.HorizontalThumbnail
          images={data.images ?? [data.image!, data.image!, data.image!]}
        />
      </Link>
    </button>
  );
}

export const StoreList = {
  Container: StoreContainer,
  Item: StoreListItem,
};
