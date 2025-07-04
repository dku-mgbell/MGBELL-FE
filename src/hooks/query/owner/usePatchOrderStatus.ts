import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Owner } from '@/hooks/api/order/owner';
import useLoadingModal from '@/hooks/useModal/loading';
import { ErrorResponse } from '@/types/api';
import { OwnerOrderAction } from '@/types/owner';
import useModal from '@/hooks/useModal';

export const usePatchOrderStatus = () => {
  const queryClient = useQueryClient();
  const { open } = useModal();
  const { openLoading, closeLoading } = useLoadingModal();

  return useMutation({
    mutationFn: ({
      orderId,
      action,
    }: {
      orderId: string;
      action: OwnerOrderAction;
    }) => Owner.patchOrderStatus(orderId, action),
    onMutate: () => {
      openLoading();
    },
    onError: (error: ErrorResponse<string>) => {
      closeLoading();
      open({
        title: '주문 상태 변경 오류',
        description: error.response.data.message as string,
      });
    },
    onSuccess: () => {
      closeLoading();
      queryClient.invalidateQueries({ queryKey: ['owner-order-list'] });
    },
  });
};
