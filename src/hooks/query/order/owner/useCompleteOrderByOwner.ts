import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Order } from '@/hooks/api/order';

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
