import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Bag } from '@/hooks/api/bag';
import useLoadingModal from '@/hooks/useModal/loading';
import { ErrorResponse } from '@/types/api';
import { BagPatchRequest } from '@/types/bag';
import useModal from '@/hooks/useModal';

export default function usePatchBag() {
  const { openLoading, closeLoading } = useLoadingModal();
  const { open } = useModal();
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: BagPatchRequest) => Bag.patch(data),
    onMutate: () => {
      openLoading();
    },
    onSuccess: () => {
      closeLoading();
      open({
        title: '수정 완료',
        description: '판매 정보가 바로 반영됩니다.',
      });
      router.push('/store/sale');
      queryClient.invalidateQueries({ queryKey: ['owner-store-info'] });
    },
    onError: (error: ErrorResponse<string>) => {
      closeLoading();
      open({
        title: '수정 실패',
        description: error.response.data.message as string,
      });
    },
  });
}
