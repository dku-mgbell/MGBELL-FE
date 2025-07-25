import { useQuery } from '@tanstack/react-query';
import { Account } from '@/hooks/api/auth/account';

export const useGetUserAccountInfo = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ['user-account-info', options?.enabled],
    queryFn: () => Account.getUserInfo(),
    enabled: options?.enabled ?? false,
  });
};
