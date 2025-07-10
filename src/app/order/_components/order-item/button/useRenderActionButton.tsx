import { useMemo } from 'react';
import { OrderStatus } from '@/types/order';
import { CancelButtons, InquiryButton, ReviewButton } from './index';

export const useRenderActionButton = ({
  orderStatus,
  orderId,
  reviewIds,
  reviewId,
  orderGoodsId,
}: {
  orderStatus: OrderStatus;
  orderId?: string;
  reviewIds?: string[];
  reviewId?: string;
  orderGoodsId?: string;
}) => {
  return useMemo(() => {
    switch (orderStatus) {
      case 'PAID':
        return <CancelButtons orderId={orderId!} />;
      case 'ACCEPTED':
        return <InquiryButton />;
      case 'COMPLETED':
        if (reviewIds?.length === 0 || reviewId === 'null') {
          return <ReviewButton orderGoodsId={orderGoodsId!} />;
        }
        return null;
      case 'CANCELED':
      case 'REJECTED':
      case 'PENDING':
      case 'FAILED':
        return <InquiryButton />;
      default:
        return <InquiryButton />;
    }
  }, [orderStatus, orderId, reviewIds, orderGoodsId]);
};
