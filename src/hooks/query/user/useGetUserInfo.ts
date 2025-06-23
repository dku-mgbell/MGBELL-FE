import { useSuspenseQuery } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';

export const useGetUserInfo = () =>
  useSuspenseQuery({
    queryFn: () => User.getInfo(),
    queryKey: ['user-info'],
    gcTime: 0,
  });
