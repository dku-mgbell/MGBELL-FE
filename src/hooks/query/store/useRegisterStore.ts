import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';
import { StoreRegistration } from '@/types/store';
import useModal from '@/hooks/useModal';

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
