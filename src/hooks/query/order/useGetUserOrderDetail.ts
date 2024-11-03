import { Order } from '@/hooks/api/order';
import { useQuery } from '@tanstack/react-query';

export const useGetUserOrderDetail = (id: number) =>
  useQuery({
    queryFn: () => Order.getDetailByUser(id),
    queryKey: ['user-order-detail'],
    gcTime: 0,
  });
