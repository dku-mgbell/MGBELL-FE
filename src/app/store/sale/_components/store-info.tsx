import { OwnerStoreInfo } from '@/types/owner';
import { Store } from '@/components/store';

export function StoreInfo({ storeInfo }: { storeInfo?: OwnerStoreInfo }) {
  const data = {
    storeName: storeInfo?.data.data.storeName,
    storeImageUrls: storeInfo?.data.data.storeImageUrls,
    saleStatus: storeInfo?.data.data.goodsList[0].saleStatus,
    startTime: storeInfo?.data.data.goodsList[0].startTime,
    endTime: storeInfo?.data.data.goodsList[0].endTime,
    quantity: storeInfo?.data.data.goodsList[0].stockQuantity,
    salePrice: storeInfo?.data.data.goodsList[0].salePrice,
    discount: storeInfo?.data.data.goodsList[0].discount,
    description: storeInfo?.data.data.goodsList[0].description,
  };

  return (
    <div className="bg-white p-[20px] rounded-[10px] flex flex-col gap-[5px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[5px]">
          <Store.Title value={data.storeName} />
          <Store.OpenStatus
            saleStatus={data.saleStatus as 'ON' | 'OFF'}
            startTime={data.startTime}
            endTime={data.endTime}
            quantity={data.quantity}
            isOpenTextVisible
          />
          {/* <Store.Address value={data.address} /> TODO 주소 API */}
          <Store.Address value="경기도 용인시 수지구 죽전로 14번길 7" />
        </div>
        <div className="flex flex-col items-end gap-[10px] h-[107px]">
          <Store.HorizontalThumbnail images={data.storeImageUrls ?? []} />
          <Store.Price price={data.salePrice} discount={data.discount} />
        </div>
      </div>
      <Store.Description value={data.description} />
    </div>
  );
}
