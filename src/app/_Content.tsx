'use client';

import { useRouter } from 'next/navigation';
import { MainPageView } from '@/types/pageView';
import { styles, viewButton } from './styles.css';
import StoreList from './_StoreList';

export default function Content({ viewType }: { viewType: MainPageView }) {
  const route = useRouter();
  return (
    <>
      <nav className={styles.nav}>
        <button
          type="button"
          onClick={() => {
            route.push('?viewType=list');
          }}
          className={viewButton({
            color: (viewType === 'list' || !viewType) && 'list',
          })}
        >
          리스트
        </button>
        <button
          type="button"
          onClick={() => {
            route.push('?viewType=map');
          }}
          className={viewButton({
            color: viewType === 'map' && 'map',
          })}
        >
          지도
        </button>
      </nav>
      {(viewType === 'list' || !viewType) && <StoreList />}
      {viewType === 'map' && <>map</>}
    </>
  );
}
