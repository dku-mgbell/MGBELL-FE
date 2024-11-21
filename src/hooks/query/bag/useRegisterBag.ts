import { Bag } from '@/hooks/api/bag';
import useModal from '@/hooks/useModal';
import { BagInfo } from '@/types/bag';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useRegisterBag = () => {
  const route = useRouter();
  const { open } = useModal();

  return useMutation({
    mutationFn: (data: BagInfo) => Bag.register(data),
    onSuccess: () => {
      route.push('/store/sale');
    },
    onError: () => {
      open({ content: '문제가 발생하였습니다.' });
    },
  });
};
