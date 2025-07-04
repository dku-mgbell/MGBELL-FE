import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Owner } from '@/hooks/api/order/owner';
import useLoadingModal from '@/hooks/useModal/loading';
import { ErrorResponse } from '@/types/api';
import useModal from '@/hooks/useModal';

export const usePatchStoreOpen = () => {
  const queryClient = useQueryClient();
  const { open } = useModal();
  const { openLoading, closeLoading } = useLoadingModal();

  return useMutation({
    mutationFn: ({ goodsId, isOpen }: { goodsId: string; isOpen: boolean }) =>
      Owner.patchStoreOpen(goodsId, isOpen),
    onMutate: () => {
      openLoading();
    },
    onError: (error: ErrorResponse<string>) => {
      closeLoading();
      open({
        title: '영업 상태 변경 오류',
        description:
          (error.response.data.message as string) ??
          '서버 오류가 발생했습니다.',
      });
    },
    onSuccess: () => {
      closeLoading();
      queryClient.invalidateQueries({ queryKey: ['owner-store-info'] });
    },
  });
};
