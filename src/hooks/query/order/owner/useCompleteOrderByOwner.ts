import { Order } from '@/hooks/api/order';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCompleteOrderByOwner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderId: number) => Order.Owner.complete(orderId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['owner-order-list'],
      });
    },
  });
};
