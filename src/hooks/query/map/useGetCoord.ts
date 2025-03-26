import { useQuery } from '@tanstack/react-query';
import { Map } from '@/hooks/api/map';

export const useGetCoord = (address: string) => {
  return useQuery({
    queryFn: () => Map.getCoord(address),
    queryKey: ['coordinate', address],
    gcTime: 0,
    enabled: address.length > 0,
  });
};
