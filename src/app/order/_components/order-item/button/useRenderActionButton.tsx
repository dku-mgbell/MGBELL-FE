import { useMemo } from 'react';
import { OrderStatus } from '@/types/order';
import { CancelButtons, InquiryButton, ReviewButton } from './index';

export const useRenderActionButton = (
  orderStatus: OrderStatus,
  orderId?: string,
  reviewIds?: number[],
) => {
  return useMemo(() => {
    switch (orderStatus) {
      case 'PAID':
        return <CancelButtons orderId={orderId!} />;
      case 'ACCEPTED':
        return <InquiryButton />;
      case 'COMPLETED':
        return reviewIds?.length ? null : <ReviewButton orderId={orderId!} />;
      case 'CANCELED':
      case 'REJECTED':
      case 'PENDING':
      case 'FAILED':
        return <InquiryButton />;
      default:
        return <InquiryButton />;
    }
  }, [orderStatus, orderId]);
};
