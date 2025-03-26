import { useInfiniteQuery } from '@tanstack/react-query';
import { Favorite } from '@/hooks/api/favorite';

export const useGetUserFavoriteList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['user-favorite-list'],
    queryFn: ({ pageParam: pageNum }) =>
      Favorite.getInfiniteList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
  });
