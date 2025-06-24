import { useQuery } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';

export const useGetUserInfo = () =>
  useQuery({
    queryFn: () => User.getInfo(),
    queryKey: ['user-info'],
    gcTime: 0,
  });
