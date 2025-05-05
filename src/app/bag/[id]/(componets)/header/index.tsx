'use client';

import BackButton from '@/components/button/back-button/back-button';
import { useAuthStore } from '@/hooks/stores/useAuthStore';
import { useGetBagDetailStore } from '../../(stores)/useGetBagDetailStore';
import * as styles from '../../styles.css';
import FavoriteButton from '../favorite-button';

export default function Header() {
  const { isLoggedIn } = useAuthStore();
  const { bagDetail, isBagDetailFetched } = useGetBagDetailStore();

  return (
    <header className={styles.header}>
      <BackButton />
      {isLoggedIn && isBagDetailFetched && (
        <FavoriteButton
          isActive={bagDetail!.favorite}
          storeId={bagDetail!.id}
        />
      )}
    </header>
  );
}
