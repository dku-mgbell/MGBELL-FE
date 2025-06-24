import { StoreListSortType } from '@/types/store';

export const buttonConfig: {
  name: string;
  sortValue: StoreListSortType | 'AVAILABLE';
}[] = [
  {
    name: '예약 가능',
    sortValue: 'AVAILABLE',
  },
  {
    name: '낮은 가격순',
    sortValue: 'PRICE_ASC',
  },
  {
    name: '가까운 거리순',
    sortValue: 'DISTANCE_ASC',
  },
  {
    name: '평점 높은순',
    sortValue: 'RATING_DESC',
  },
];
