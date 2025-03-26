import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Order } from '@/hooks/api/order';

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
