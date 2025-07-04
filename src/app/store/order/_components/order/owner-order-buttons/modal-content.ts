import { OwnerOrderAction } from '@/types/owner';

export const modalContent: Record<
  OwnerOrderAction,
  { title: string; description: string }
> = {
  approve: {
    title: '주문을 수락하시겠어요?',
    description: '주문 수락 시 고객이 지정한 시간에 픽업이 진행됩니다.',
  },
  reject: {
    title: '주문을 거절하시겠어요?',
    description: '주문 거절 시 고객에게 안내가 자동 진행됩니다.',
  },
  cancel: {
    title: '주문을 취소하시겠어요?',
    description: '취소 시 고객에게 환불 및 안내가 자동 진행됩니다.',
  },
  completed: {
    title: '주문을 완료하시겠어요?',
    description: '고객이 픽업을 완료한 경우 주문을 완료해주세요.',
  },
};
