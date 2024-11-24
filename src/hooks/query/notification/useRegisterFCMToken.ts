import { Notification } from '@/hooks/api/notification';
import { useMutation } from '@tanstack/react-query';

export const useRegisterFCMToken = () => {
  return useMutation({
    mutationFn: (token: string) => Notification.register(token),
  });
};
