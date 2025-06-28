import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Order } from '@/hooks/api/order';

export const useCompletePayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (paymentId: string) => Order.Payment.complete(paymentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-order-list'] });
    },
  });
};
