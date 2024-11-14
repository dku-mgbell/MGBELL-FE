import { User } from '@/hooks/api/user';
import { useQuery } from '@tanstack/react-query';

export const useGetUserActivity = () =>
  useQuery({
    queryFn: () => User.getActivity(),
    queryKey: ['user-activity'],
    gcTime: 0,
  });
