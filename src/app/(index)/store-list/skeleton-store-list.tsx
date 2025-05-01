import StoreListItem from './store-list-item';
import * as styles from './styles.css';

export default function SkeletonStoreList() {
  return (
    <main className={styles.main}>
      {Array.from({ length: 3 }, (_, index) => (
        <StoreListItem key={`skeleton-${index}`} isSkeleton />
      ))}
    </main>
  );
}
