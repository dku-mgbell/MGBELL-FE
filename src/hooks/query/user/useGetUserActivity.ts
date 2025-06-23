import { useSuspenseQuery } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';

export const useGetUserActivity = () =>
  useSuspenseQuery({
    queryFn: () => User.getActivity(),
    queryKey: ['user-activity'],
    gcTime: 0,
    staleTime: 0,
  });
