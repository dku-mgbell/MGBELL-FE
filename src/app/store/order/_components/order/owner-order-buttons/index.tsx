'use client';

import { Button } from '@/components/ui/button';
import { usePatchOrderStatus } from '@/hooks/query/owner/usePatchOrderStatus';
import { OrderStatus } from '@/types/order';
import { OwnerOrderAction, OwnerOrderActionName } from '@/types/owner';
import useModal from '@/hooks/useModal';
import { config } from './button-config';
import { modalContent } from './modal-content';

function OrderButton({
  action,
  orderId,
}: {
  action: OwnerOrderAction;
  orderId: string;
}) {
  const { open } = useModal();
  const { mutate: patchOrderStatus } = usePatchOrderStatus();

  const handleOwnerOrderButtonClick = () => {
    open({
      title: modalContent[action].title,
      description: modalContent[action].description,
      confirmEvent: () => {
        patchOrderStatus({ orderId, action });
      },
    });
  };

  return (
    <Button
      className="flex-1"
      variant={config[action].variant}
      onClick={handleOwnerOrderButtonClick}
    >
      {OwnerOrderActionName[action]}
    </Button>
  );
}

export function OwnerOrderButtons({
  status,
  orderId,
}: {
  status: OrderStatus;
  orderId: string;
}) {
  const isButtonVisible = status === 'PAID' || status === 'ACCEPTED';
  const buttonConfig: Record<'PAID' | 'ACCEPTED', OwnerOrderAction[]> = {
    PAID: ['reject', 'approve'],
    ACCEPTED: ['cancel', 'completed'],
  };

  if (!isButtonVisible) return null;

  return buttonConfig[status].map((action) => (
    <OrderButton key={action} action={action} orderId={orderId} />
  ));
}
