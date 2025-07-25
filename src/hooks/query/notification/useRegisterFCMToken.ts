import { useMutation } from '@tanstack/react-query';
import { Notification } from '@/hooks/api/notification';
import useFcmToken from '@/hooks/useFCMToken';

export const useRegisterFCMToken = () => {
  const { token } = useFcmToken();

  return useMutation({
    mutationFn: () => {
      if (!token) return Promise.resolve(null);
      return Notification.register(token);
    },
  });
};
