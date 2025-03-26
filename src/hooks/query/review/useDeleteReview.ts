import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Review } from '@/hooks/api/review';

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => Review.deletePost(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['my-review-list'],
      });
    },
  });
};
