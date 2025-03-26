import { useQuery } from '@tanstack/react-query';
import { User } from '@/hooks/api/user';

export const useGetUserActivity = () =>
  useQuery({
    queryFn: () => User.getActivity(),
    queryKey: ['user-activity'],
    gcTime: 0,
  });
