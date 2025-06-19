import Link from 'next/link';
import { BagInfoResponse } from '@/types/bag';
import { Store } from '.';

export default function StoreContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul className="flex flex-col gap-[20px] items-start">{children}</ul>;
}

export type StoreListItemProps = BagInfoResponse & { storeId?: number };

export function StoreListItem({ data }: { data: StoreListItemProps }) {
  return (
    <li className="w-full pb-[30px] [&:not(:last-child)]:border-b border-gray7">
      <Link
        href={`/bag/${data.id}`}
        className="clickable flex flex-col items-start gap-[8px] w-full"
      >
        <div className="flex flex-col items-start gap-[4px]">
          <Store.Title value={data.storeName} />
          <Store.OpenStatus
            isOpen={data.onSale}
            startAt={data.startAt}
            endAt={data.endAt}
            amount={data.amount}
          />
          <Store.Address value={data.address} />
        </div>
        <Store.HorizontalThumbnail
          images={data.images ?? [data.image!, data.image!, data.image!]}
        />
      </Link>
    </li>
  );
}

export const StoreList = {
  Container: StoreContainer,
  Item: StoreListItem,
};
