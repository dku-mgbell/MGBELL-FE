import { Order } from '@/hooks/api/order';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCancelOrderByUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => Order.cancelByUser(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['user-order-detail'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['user-order-list'],
      });
    },
  });
};
