import { useCallback, useMemo, useRef } from 'react';
import {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
} from '@tanstack/react-query';

export const useSuspenseInfiniteScroll = <T>({
  data,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isError,
  isSuccess,
}: UseSuspenseInfiniteQueryResult<InfiniteData<T[], unknown>, Error>) => {
  const observer = useRef<IntersectionObserver>(null);

  const intersection = useCallback(
    (target: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });
      if (target) observer.current.observe(target);
    },
    [fetchNextPage, hasNextPage, isFetching],
  );

  const list = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [data]);

  return { intersection, list, isFetching, isError, isSuccess };
};
