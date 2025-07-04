import { VariantProps } from 'class-variance-authority';
import { Button, buttonVariants } from '@/components/ui/button';
import { OrderStatus } from '@/types/order';

type OwnerOrderAction = 'approve' | 'reject' | 'completed' | 'cancel';

const OrderActionName: Record<OwnerOrderAction, string> = {
  approve: '수락',
  reject: '거절',
  completed: '완료',
  cancel: '취소',
} as const;

function OrderButton({ action }: { action: OwnerOrderAction }) {
  const config: Record<
    OwnerOrderAction,
    { variant: VariantProps<typeof buttonVariants>['variant'] }
  > = {
    approve: {
      variant: 'primary',
    },
    reject: {
      variant: 'primary-light',
    },
    completed: {
      variant: 'primary',
    },
    cancel: {
      variant: 'red',
    },
  };

  return (
    <Button className="flex-1" variant={config[action].variant}>
      {OrderActionName[action]}
    </Button>
  );
}

export function OwnerOrderButtons({ status }: { status: OrderStatus }) {
  const isButtonVisible = status === 'PAID' || status === 'ACCEPTED';
  const buttonConfig: Record<'PAID' | 'ACCEPTED', OwnerOrderAction[]> = {
    PAID: ['reject', 'approve'],
    ACCEPTED: ['cancel', 'completed'],
  };

  if (!isButtonVisible) return null;

  return buttonConfig[status].map((action) => (
    <OrderButton key={action} action={action} />
  ));
}
