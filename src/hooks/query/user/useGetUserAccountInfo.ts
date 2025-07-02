import { useQuery } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';

export const useGetUserAccountInfo = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ['user-account-info', options?.enabled],
    queryFn: () => User.getAccountInfo(),
    enabled: options?.enabled ?? false,
    retry: false,
  });
};
