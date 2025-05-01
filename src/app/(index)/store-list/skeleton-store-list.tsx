import StoreListItem from './store-list-item';

export default function SkeletonStoreList() {
  return Array.from({ length: 3 }, (_, index) => (
    <StoreListItem key={`skeleton-${index}`} isSkeleton />
  ));
}
