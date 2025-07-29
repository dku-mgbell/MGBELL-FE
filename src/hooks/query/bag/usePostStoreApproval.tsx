import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';
import useLoadingModal from '@/hooks/useModal/loading';

export const usePostStoreApproval = () => {
  const queryClient = useQueryClient();
  const { openLoading, closeLoading } = useLoadingModal();
  return useMutation({
    mutationFn: (id: string) => Store.approve(id),
    onMutate: () => {
      openLoading();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['pending-store-list'],
      });
      closeLoading();
    },
    onError: () => {
      closeLoading();
    },
  });
};
