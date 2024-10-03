'use client';

import { ChangeEvent, useState } from 'react';
import { common } from '@/styles/common.css';
import { styles } from './styles.css';
import PriceContent from './price-content';

type TabType = 'FOOD' | 'DESSERT';

export default function PriceSection() {
  const [tabType, setTabType] = useState<TabType>('FOOD');

  const handleTabButtonClick = (e: ChangeEvent<HTMLInputElement>) => {
    setTabType(e.target.value as TabType);
  };

  return (
    <div>
      <div className={styles.tabContainer}>
        <label className={styles.tabButton}>
          <input
            name="food-type"
            type="radio"
            className={common.hidden}
            onChange={handleTabButtonClick}
            value="FOOD"
            defaultChecked
          />
          음식
          <div className={styles.selectedBar} />
        </label>
        <label className={styles.tabButton}>
          <input
            name="food-type"
            type="radio"
            className={common.hidden}
            onChange={handleTabButtonClick}
            value="DESSERT"
          />
          베이커리 & 디저트
          <div className={styles.selectedBar} />
        </label>
      </div>
      <div>
        {tabType === 'FOOD' && (
          <PriceContent
            message={
              <>
                <span>정가</span>와 <span>할인판매가</span>를 함께 작성해주시길
                바랍니다.
              </>
            }
          />
        )}
        {tabType === 'DESSERT' && (
          <PriceContent
            priceButton
            message={
              <>
                잉여 음식을 소비되도록 하기 위해{' '}
                <span>정가의 50% 가격으로 고객들에게 판매하기를 권장</span>
                합니다.
              </>
            }
          />
        )}
      </div>
    </div>
  );
}
