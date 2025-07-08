import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Order } from '@/hooks/api/order';
import useLoadingModal from '@/hooks/useModal/loading';
import { ErrorResponse } from '@/types/api';
import useModal from '@/hooks/useModal';

export const useCancelOrderByUser = () => {
  const queryClient = useQueryClient();
  const { open } = useModal();
  const { openLoading, closeLoading } = useLoadingModal();

  return useMutation({
    mutationFn: (id: string) => Order.cancelByUser(id),
    onSuccess: async () => {
      closeLoading();
      await queryClient.invalidateQueries({
        queryKey: ['user-order-detail'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['user-order-list'],
      });
    },
    onMutate: () => {
      openLoading();
    },
    onError: (error: ErrorResponse<string>) => {
      closeLoading();
      open({
        title: '주문 취소를 실패하였어요.',
        description: error.response.data.message as string,
      });
    },
  });
};
