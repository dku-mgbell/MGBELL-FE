import { Bag } from '@/hooks/api/bag';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePatchOnSale = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: boolean) => Bag.patchOnSale(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['my-store-info'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['owner-bag-info'],
      });
    },
  });
};
