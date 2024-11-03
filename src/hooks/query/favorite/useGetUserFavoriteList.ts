import { Favorite } from '@/hooks/api/favorite';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetUserFavoriteList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['user-favorite-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Favorite.getInfiniteList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
  });
