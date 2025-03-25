import { useRouter } from 'next/navigation';
import { Order } from '@/hooks/api/order';
import useModal from '@/hooks/useModal';
import { OrderInfo } from '@/types/order';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostBagOrder = (price: number) => {
  const queryClient = useQueryClient();
  const route = useRouter();
  const { open } = useModal();

  return useMutation({
    mutationFn: (data: OrderInfo) => Order.register(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['user-order-list'],
      });
      route.push(`/bag/order/success?price=${price}`);
    },
    onError: () => {
      open({ content: '픽업 가능 시간을 확인해주세요.' });
    },
  });
};
