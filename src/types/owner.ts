import { OrderStatus } from './order';

export type OwnerTabOrderStatus = '' | 'PAID' | 'ACCEPTED' | 'COMPLETED';

export interface OwnerOrderListItem {
  orderId: string;
  orderStatus: OrderStatus;
  createdAt: string;
  pickupTime: string;
  quantity: number;
  totalPrice: number;
  phoneNumber: string;
  goodsName: string;
}

export type OwnerOrderAction = 'approve' | 'reject' | 'completed' | 'cancel';

export const OwnerOrderActionName: Record<OwnerOrderAction, string> = {
  approve: '수락',
  reject: '거절',
  completed: '완료',
  cancel: '취소',
} as const;

export interface OwnerStoreInfo {
  data: {
    data: {
      storeId: string;
      storeName: string;
      storeImageUrls: string[];
      goodsList: [
        {
          goodsId: string;
          goodsName: string;
          originPrice: number;
          discount: number;
          salePrice: number;
          description: string;
          startTime: string;
          endTime: string;
          saleStatus: 'ON' | 'FALSE';
          stockQuantity: number;
        },
      ];
    };
  };
}
