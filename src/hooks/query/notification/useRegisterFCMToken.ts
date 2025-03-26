import { useMutation } from '@tanstack/react-query';
import { Notification } from '@/hooks/api/notification';

export const useRegisterFCMToken = () => {
  return useMutation({
    mutationFn: (token: string) => Notification.register(token),
  });
};
