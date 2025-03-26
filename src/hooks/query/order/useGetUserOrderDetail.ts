import { useQuery } from '@tanstack/react-query';
import { Order } from '@/hooks/api/order';

export const useGetUserOrderDetail = (id: number) =>
  useQuery({
    queryFn: () => Order.getDetailByUser(id),
    queryKey: ['user-order-detail'],
    gcTime: 0,
  });
