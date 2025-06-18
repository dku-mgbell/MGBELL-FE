import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Store } from '@/hooks/api/store';
import {
  StoreRegistrationFormRequest,
  StoreRegistrationResponse,
} from '@/types/store';
import { usePostImages } from '../images/usePostImages';

export const usePostStoreRegistration = () => {
  const { mutate: postImages } = usePostImages();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: StoreRegistrationFormRequest) => {
      const { images, ...request } = data;
      return Store.postRegistration(request).then(
        (res: StoreRegistrationResponse) => {
          return postImages({
            files: data.images,
            urls: res.data.preSignedUrlImages.map((image) => image.url),
          });
        },
      );
    },
    onSuccess: () => {
      router.push('/register/store/info/success');
    },
  });
};
