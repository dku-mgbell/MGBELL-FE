import { User } from '@/hooks/api/user';
import { useQuery } from '@tanstack/react-query';

export const useGetUserInfo = () =>
  useQuery({
    queryFn: () => User.getInfo(),
    queryKey: ['user-info'],
    gcTime: 0,
  });
