'use client';

import { ChangeEvent, useState } from 'react';
import { common } from '@/styles/common.css';
import PriceContent from './price-content';
import { styles } from './styles.css';

type TabType = 'select' | 'enter';

export default function PriceSection() {
  const [tabType, setTabType] = useState<TabType>('select');

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
            value="select"
            defaultChecked
          />
          권장가격 선택
          <div className={styles.selectedBar} />
        </label>
        <label className={styles.tabButton}>
          <input
            name="food-type"
            type="radio"
            className={common.hidden}
            onChange={handleTabButtonClick}
            value="enter"
          />
          직접 입력
          <div className={styles.selectedBar} />
        </label>
      </div>
      <div>
        {tabType === 'select' && <PriceContent priceButton />}
        {tabType === 'enter' && <PriceContent />}
      </div>
    </div>
  );
}
