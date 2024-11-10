import { Order } from '@/hooks/api/order';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAcceptOrderByOwner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderId: number) => Order.Owner.accept(orderId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['owner-order-list'],
      });
    },
  });
};
