import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';
import useLoadingModal from '@/hooks/useModal/loading';
import {
  StoreRegistrationFormRequest,
  StoreRegistrationResponse,
} from '@/types/store';
import { usePostImages } from '../images/usePostImages';

export const usePostStoreRegistration = () => {
  const { mutate: postImages } = usePostImages();
  const router = useRouter();
  const { openLoading, closeLoading } = useLoadingModal();

  return useMutation({
    mutationFn: (data: StoreRegistrationFormRequest) => {
      const { images, ...request } = data;
      return Store.postRegistration(request).then(
        (res: StoreRegistrationResponse) => {
          return postImages({
            files: data.images,
            urls: res.data.storePreSignedUrlImages.map((image) => image.url),
          });
        },
      );
    },
    onMutate: () => {
      openLoading();
    },
    onSuccess: () => {
      closeLoading();
      router.push('/register/bag');
    },
  });
};
