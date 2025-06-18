import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Bag } from '@/hooks/api/bag';
import useLoadingModal from '@/hooks/useModal/loading';
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
      router.push('/register/bag/success');
    },
    onError: () => {
      closeLoading();
      open({
        content: '마감백 등록을 실패했습니다.',
      });
    },
  });
}
