import { Order } from '@/hooks/api/order';
import { OrderInfo } from '@/types/order';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostBagOrder = () => {
  const queryClient = useQueryClient();
  const route = useRouter();
  return useMutation({
    mutationFn: (data: OrderInfo) => Order.register(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['user-order-list'],
      });
      route.push('/bag/order/success');
    },
  });
};
