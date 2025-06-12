import Link from 'next/link';
import Thumbnail from '@/assets/images/store/thumbnail.png';
import { BagInfoResponse } from '@/types/bag';
import { Item } from './components';

export default function StoreListItem(props: Partial<BagInfoResponse>) {
  return (
    <Link href={`/bag/${props.id}`} key={props.id}>
      <Item.ThumbnailGrid isSoldOut={props.amount === 0}>
        {props.images
          ? props.images.map((image, index) => {
              const imageId = `${props.storeName}-image-${index}`;
              return (
                <Item.Thumbnail
                  key={imageId}
                  alt={imageId}
                  index={index}
                  src={image}
                />
              );
            })
          : Array.from({ length: 3 }, (_, index) => (
              <Item.Thumbnail
                key={`skeleton-${index}`}
                alt={`skeleton-${index}`}
                index={index}
                src={Thumbnail.src}
              />
            ))}
      </Item.ThumbnailGrid>
      <Item.MainStoreInfo
        title={props.storeName}
        price={props.salePrice!}
        discount={50}
        startAt={props.startAt}
        endAt={props.endAt}
        amount={props.amount}
      />
    </Link>
  );
}
