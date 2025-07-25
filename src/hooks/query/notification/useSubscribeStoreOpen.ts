import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Notification } from '@/hooks/api/notification';
import useModal from '@/hooks/useModal';

export const useSubscribeStoreOpen = ({ storeId }: { storeId: string }) => {
  const { open } = useModal();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      fcmToken,
      subscribe,
    }: {
      fcmToken: string | null;
      subscribe: boolean;
    }) =>
      subscribe
        ? Notification.subscribeStoreOpen({ storeId, fcmToken: fcmToken! })
        : Notification.unsubscribeStoreOpen({ storeId }),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ['store-subscription-status', storeId],
      });
      if (response.subscriptionStatus === 'SUBSCRIBED') {
        open({
          title: '알림 설정이 완료되었어요!',
          description: '가게가 오픈하면 알려드릴게요!',
          cancelButtonText: '확인',
        });
      } else {
        open({
          title: '알림 취소가 완료되었어요.',
          description: '가게 오픈 알림이 해제되었어요.',
          cancelButtonText: '확인',
        });
      }
    },
    onError: () => {
      open({
        title: '알림 설정에 실패했어요.',
        description: '다시 시도해주세요.',
      });
    },
  });
};
