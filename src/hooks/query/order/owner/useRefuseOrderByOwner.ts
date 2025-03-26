import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Order } from '@/hooks/api/order';

export const useRefuseOrderByOwner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      orderId,
      refusalReason,
    }: {
      orderId: number;
      refusalReason: string;
    }) => Order.Owner.refuse(orderId, refusalReason),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['owner-order-list'],
      });
    },
  });
};
