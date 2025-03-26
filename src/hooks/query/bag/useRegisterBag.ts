import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Bag } from '@/hooks/api/bag';
import { BagInfo } from '@/types/bag';
import useModal from '@/hooks/useModal';

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
