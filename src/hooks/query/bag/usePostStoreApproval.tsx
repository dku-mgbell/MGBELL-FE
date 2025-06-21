import { useMutation } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';

export const usePostStoreApproval = () => {
  return useMutation({
    mutationFn: (id: number) => Store.approve(id),
    onSuccess: () => {
      alert('승인되었습니다.');
    },
    onError: () => {
      alert('승인에 실패했습니다.');
    },
  });
};
