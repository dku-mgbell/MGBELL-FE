import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserPaymentStore } from '@/app/bag/order/_stores/useUserPaymentStore';
import { Order } from '@/hooks/api/order';
import useLoadingModal from '@/hooks/useModal/loading';
import { ErrorResponse } from '@/types/api';
import { UserOrderRequest } from '@/types/order';
import useModal from '@/hooks/useModal';

export const usePostBagOrder = () => {
  const queryClient = useQueryClient();
  const route = useRouter();
  const { open } = useModal();
  const { openLoading, closeLoading } = useLoadingModal();
  const { userPaymentStore, setUserPaymentStore } = useUserPaymentStore();

  useEffect(() => {
    if (userPaymentStore.merchantUid) {
      route.push(`/bag/order/pay?merchantUid=${userPaymentStore.merchantUid}`);
    }
  }, [userPaymentStore]);

  return useMutation({
    mutationFn: (data: UserOrderRequest) => Order.register(data),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['user-order-list'] });
      setUserPaymentStore({
        ...userPaymentStore,
        merchantUid: res.merchantUid,
        amount: res.totalAmount,
      });
      closeLoading();
    },
    onMutate: () => {
      openLoading();
    },
    onError: (error: ErrorResponse<string>) => {
      closeLoading();
      open({ content: error.response.data.message as string });
    },
  });
};
