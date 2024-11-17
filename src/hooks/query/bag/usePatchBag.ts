import { Bag } from '@/hooks/api/bag';
import { BagInfo } from '@/types/bag';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePatchBag = () => {
  const queryClient = useQueryClient();
  const route = useRouter();
  return useMutation({
    mutationFn: (data: BagInfo) => Bag.patch(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['owner-bag-info'],
      });
      route.push('/store/sale');
    },
  });
};
