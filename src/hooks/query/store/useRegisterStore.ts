import { Store } from '@/hooks/api/store';
import useModal from '@/hooks/useModal';
import { StoreRegistration } from '@/types/store';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useRegisterStore = () => {
  const route = useRouter();
  const { open } = useModal();

  return useMutation({
    mutationFn: (data: StoreRegistration) => Store.register(data),
    onSuccess: () => {
      route.push('/register/bag');
    },
    onError: () => {
      open({ content: '문제가 발생하였습니다.' });
    },
  });
};
