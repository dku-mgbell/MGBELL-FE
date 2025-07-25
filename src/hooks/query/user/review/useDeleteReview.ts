import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Review } from '@/hooks/api/review';
import { ErrorResponse } from '@/types/api';
import useModal from '@/hooks/useModal';

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  const { open } = useModal();
  return useMutation({
    mutationFn: (reviewId: string) => Review.deletePost(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-review-list'] });
      open({
        title: '리뷰 삭제를 완료했어요!',
        description: '선택한 리뷰를 삭제했어요.',
      });
    },
    onError: (error: ErrorResponse<string>) => {
      open({
        title: '리뷰 삭제를 실패했어요!',
        description: error.response?.data.message as string,
      });
    },
  });
};
