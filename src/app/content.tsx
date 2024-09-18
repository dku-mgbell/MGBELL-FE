'use client';

import { useRouter } from 'next/navigation';
import { MainPageView } from '@/types/pageView';
import { styles } from './styles.css';
import StoreList from './StoreList';

export default function Content({ viewType }: { viewType: MainPageView }) {
  const route = useRouter();
  return (
    <>
      <nav className={styles.nav}>
        <label className={styles.viewButton}>
          <input
            onClick={() => {
              route.push('?viewType=list');
            }}
            type="radio"
            name="viewType"
            defaultChecked={viewType === 'list' || viewType === undefined}
            value="list"
          />
          리스트
        </label>
        <label className={styles.viewButton}>
          <input
            onClick={() => {
              route.push('?viewType=map');
            }}
            type="radio"
            name="viewType"
            defaultChecked={viewType === 'map'}
            value="map"
          />
          지도
        </label>
      </nav>
      {viewType === 'list' && <StoreList />}
      {viewType === 'map' && <>map</>}
    </>
  );
}
