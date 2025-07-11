import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Review } from '@/hooks/api/review';
import useLoadingModal from '@/hooks/useModal/loading';
import { ErrorResponse } from '@/types/api';
import {
  UserReviewUploadRequest,
  UserReviewUploadResponse,
} from '@/types/review';
import useModal from '@/hooks/useModal';
import { usePostImages } from '../../images/usePostImages';

export const usePostReview = () => {
  const router = useRouter();
  const { open } = useModal();
  const { openLoading, closeLoading } = useLoadingModal();
  const { mutate: postImages } = usePostImages();

  return useMutation({
    mutationFn: (data: UserReviewUploadRequest) => {
      const { images, ...request } = data;
      return Review.postByUser(request).then(
        (res: UserReviewUploadResponse) => {
          if (images.length > 0) {
            return postImages({
              files: images,
              urls: res.reviewPreSignedUrlImages.map((image) => image.url),
            });
          }
          return res;
        },
      );
    },
    onMutate: () => {
      openLoading();
    },
    onSuccess: () => {
      closeLoading();
      router.replace('/mypage/review');
    },
    onError: (error: ErrorResponse<string>) => {
      closeLoading();
      open({
        title: '리뷰 등록을 실패했어요',
        description: error.response?.data.message as string,
      });
    },
    retry: false,
  });
};
