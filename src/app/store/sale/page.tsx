'use client';

import Link from 'next/link';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { useGetOwnerStoreInfo } from '@/hooks/query/owner/useGetOwnerStoreInfo';
import { MenuItem } from '../_components/menu-item';
import { SaleOpenSwitch } from './_components/sale-open-switch';
import { StoreInfo } from './_components/store-info';

export default function Page() {
  const { data: storeInfo } = useGetOwnerStoreInfo();

  const goodsInfo = storeInfo?.data.data.goodsList
    ? storeInfo.data.data.goodsList[0]
    : undefined;

  return (
    <div className="flex flex-col gap-[20px] p-[20px]">
      <StoreInfo storeInfo={storeInfo} />
      <MenuItem name="판매 시작하기">
        <SaleOpenSwitch
          goodsId={goodsInfo?.goodsId}
          defaultValue={goodsInfo?.saleStatus === 'ON'}
        />
      </MenuItem>
      <MenuItem name="마감백 정보 수정">
        <Link
          href="/store/sale/edit"
          className="clickable w-[100px] flex justify-end"
        >
          <ChevronRightIcon width={20} height={20} />
        </Link>
      </MenuItem>
    </div>
  );
}
