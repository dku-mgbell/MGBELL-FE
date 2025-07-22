import { useMutation } from '@tanstack/react-query';
import { Notification } from '@/hooks/api/notification';
import useModal from '@/hooks/useModal';

export const useSubscribeStoreOpen = () => {
  const { open } = useModal();
  return useMutation({
    mutationFn: ({
      storeId,
      fcmToken,
    }: {
      storeId: string;
      fcmToken: string;
    }) => Notification.subscribeStoreOpen({ storeId, fcmToken }),
    onSuccess: () => {
      open({
        title: '알림 설정이 완료되었어요!',
        description: '가게가 오픈하면 알려드릴게요!',
      });
    },
    onError: () => {
      open({
        title: '알림 설정에 실패했어요.',
        description: '다시 시도해주세요.',
      });
    },
  });
};
