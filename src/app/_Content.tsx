'use client';

import { MainPageView } from '@/types/pageView';
import { styles } from './styles.css';
import StoreList from './_StoreList';
import { ViewChangeButton } from './_ViewChangeButton';

export default function Content({ viewType }: { viewType: MainPageView }) {
  return (
    <>
      <nav className={styles.nav}>
        <ViewChangeButton id="list" viewType={viewType} />
        <ViewChangeButton id="map" viewType={viewType} />
      </nav>
      {(viewType === 'list' || !viewType) && <StoreList />}
      {viewType === 'map' && <>map</>}
    </>
  );
}
