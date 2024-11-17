'use client';

import { useRouter } from 'next/navigation';
import MenuButton from '@/components/button/menu-button/menu-button';
import { usePatchOnSale } from '@/hooks/query/bag/usePatchOnSale';
import ToggleSwitch from '@/components/toggle-switch/toggle-switch';
import { useGetBagInfoByOwner } from '@/hooks/query/bag/useGetBagInfoByOwner';
import ProductInfoThumbContainer from '@/components/product/product-info-thumb-container/product-info-thumb-container';
import { BagInfoResponse } from '@/types/bag';
import { common } from '@/styles/common.css';
import * as styles from './styles.css';

export default function Page() {
  const { mutate: patchOnSale } = usePatchOnSale();
  const { data: bagInfo, isLoading } = useGetBagInfoByOwner();
  const route = useRouter();

  if (isLoading) return <> </>;

  const handleOnSaleToggleClick = () => {
    patchOnSale(!bagInfo!.onSale);
  };
  return (
    <>
      <div className={common.box}>
        <ProductInfoThumbContainer info={bagInfo as BagInfoResponse} />
        <strong className={styles.description}>{bagInfo!.bagName}</strong>
        <p className={styles.description}>{bagInfo!.description}</p>
      </div>
      <MenuButton
        name="판매 중"
        shadow
        style={{ backgroundColor: '#fff' }}
        button={
          <div>
            <ToggleSwitch
              value={bagInfo!.onSale}
              onChange={handleOnSaleToggleClick}
            />
          </div>
        }
      />
      <MenuButton
        name="마감백 정보 수정"
        shadow
        style={{ backgroundColor: '#fff' }}
        event={() => {
          route.push('/store/sale/edit');
        }}
      />
    </>
  );
}
