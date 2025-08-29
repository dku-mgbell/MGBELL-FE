import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';
import useLoadingModal from '@/hooks/useModal/loading';
import { ErrorResponse } from '@/types/api';
import {
  StorePatchImagesRequest,
  StoreRegistrationResponse,
} from '@/types/store';
import useModal from '@/hooks/useModal';
import { usePostImages } from '../images/usePostImages';

export const usePatchStoreImages = (storeId: string) => {
  const { mutate: postImages } = usePostImages();
  const router = useRouter();
  const { openLoading, closeLoading } = useLoadingModal();
  const { open } = useModal();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: StorePatchImagesRequest) => {
      return Store.patchImages({
        storeId: data.storeId,
        storeImagesRegisters: data.images,
      }).then((res: StoreRegistrationResponse) => {
        return postImages({
          files: data.files,
          urls: res.data.storePreSignedUrlImages.map((image) => image.url),
        });
      });
    },
    onMutate: () => {
      openLoading();
    },
    onSuccess: () => {
      closeLoading();
      open({
        title: '이미지 수정 완료',
        description: '이미지 수정이 완료되었습니다.',
        confirmEvent: async () => {
          await queryClient.refetchQueries({
            queryKey: ['store-detail-with-bag', storeId],
          });
          await queryClient.refetchQueries({
            queryKey: ['store-list'],
          });
          router.back();
        },
      });
    },
    onError: (err: ErrorResponse<string>) => {
      open({
        title: '이미지 수정 실패',
        description: err.response.data.message as string,
      });
    },
  });
};
