import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Bag } from '@/hooks/api/bag';
import useLoadingModal from '@/hooks/useModal/loading';
import { ErrorResponse } from '@/types/api';
import { BagRegistrationRequest } from '@/types/bag';
import useModal from '@/hooks/useModal';

export default function usePostBagRegistration() {
  const { openLoading, closeLoading } = useLoadingModal();
  const { open } = useModal();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: BagRegistrationRequest) => Bag.postRegistration(data),
    onMutate: () => {
      openLoading();
    },
    onSuccess: () => {
      closeLoading();
      router.push('/register/store/info/success');
    },
    onError: (error: ErrorResponse<string>) => {
      closeLoading();
      open({
        title: '등록 실패',
        description: error.response.data.message as string,
      });
    },
  });
}
