import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Order } from '@/hooks/api/order';
import useLoadingModal from '@/hooks/useModal/loading';
import { ErrorResponse } from '@/types/api';
import { OrderRequest } from '@/types/order';
import useModal from '@/hooks/useModal';

export const usePostBagOrder = (price: number) => {
  const queryClient = useQueryClient();
  const route = useRouter();
  const { open } = useModal();
  const { openLoading, closeLoading } = useLoadingModal();

  return useMutation({
    mutationFn: (data: OrderRequest) => Order.register(data),
    onSuccess: async () => {
      closeLoading();
      await queryClient.invalidateQueries({
        queryKey: ['user-order-list'],
      });
      route.push(`/bag/order/success?price=${price}`);
    },
    onMutate: () => {
      openLoading();
    },
    onError: (error: ErrorResponse<string>) => {
      closeLoading();
      open({ content: error.response.data.message as string });
    },
  });
};
