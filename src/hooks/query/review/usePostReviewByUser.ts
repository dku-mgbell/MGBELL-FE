import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Review } from '@/hooks/api/review';
import { UserReviewUpload } from '@/types/review';

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
