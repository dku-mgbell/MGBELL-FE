import { Map } from '@/hooks/api/map';
import { useQuery } from '@tanstack/react-query';

export const useGetCoord = (address: string) =>
  useQuery({
    queryFn: () => Map.getCoord(address),
    queryKey: ['coordinate', address],
    gcTime: 0,
    enabled: !!address,
  });