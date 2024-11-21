import { useRouter } from 'next/navigation';
import { Review } from '@/hooks/api/review';
import { UserReviewUpload } from '@/types/review';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostReviewByUser = () => {
  const queryClient = useQueryClient();
  const route = useRouter();
  return useMutation({
    mutationFn: (data: UserReviewUpload) => Review.postByUser(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['bag-list'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['bag-detail'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['user-order-list'],
      });
      route.push('/mypage/review');
    },
  });
};
