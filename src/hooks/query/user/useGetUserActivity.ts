import { useQuery } from '@tanstack/react-query';
import { Account } from '@/hooks/api/auth/account';

export const useGetUserActivity = () =>
  useQuery({
    queryFn: () => Account.getActivity(),
    queryKey: ['user-activity'],
    gcTime: 0,
    staleTime: 0,
  });
