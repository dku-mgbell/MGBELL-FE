import { Order } from '@/hooks/api/order';
import { OrderInfo } from '@/types/order';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostBagOrder = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: (data: OrderInfo) => Order.register(data),
    onSuccess: () => {
      route.push('/bag/order/success');
    },
  });
};
