import Image from 'next/image';
import Link from 'next/link';

import DefaultThumbnail from '@/assets/images/store/thumbnail.png';
import { StoreListItemResponse } from '@/types/store';
import { Store } from '@/components/store';

export default function PopularStoreListItem({
  content,
}: {
  content: StoreListItemResponse;
}) {
  return (
    <Link
      href={`/bag/${content.storeId}`}
      className="flex flex-1 flex-col gap-[8px] clickable"
    >
      <div className="w-full h-[100px] overflow-hidden rounded-[10px]">
        <Image
          src={
            content ? `https://${content.ImageUrl[0]}` : DefaultThumbnail.src
          }
          alt="마감백 판매 가게"
          width={500}
          height={500}
          className="object-cover w-full h-full bg-gray8"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <Store.Title value={content?.storeName} className="text-b2" />
        <Store.OpenStatus
          startTime={content.startTime}
          endTime={content.endTime}
          isOpenTextVisible
          textSize="sm"
        />
      </div>
    </Link>
  );
}
