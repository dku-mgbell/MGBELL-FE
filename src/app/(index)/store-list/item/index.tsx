import Link from 'next/link';
import Thumbnail from '@/assets/images/store/thumbnail.png';
import { StoreListItemResponse } from '@/types/store';
import { Item } from './components';

export default function StoreListItem(props: Partial<StoreListItemResponse>) {
  return (
    <Link href={`/bag/${props.storeId}`} key={props.storeId}>
      <Item.ThumbnailGrid isSoldOut={props.quantity === 0}>
        {props.ImageUrl
          ? props.ImageUrl.map((image, index) => {
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
        price={props.salePrice}
        discount={props.discount}
        startAt={props.startTime}
        endAt={props.endTime}
        amount={props.quantity}
        saleStatus={props.saleStatus!}
      />
    </Link>
  );
}
