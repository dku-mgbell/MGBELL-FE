import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCancelOrderByUser } from '@/hooks/query/order/useCancelOrderByUser';
import useModal from '@/hooks/useModal';

export function InquiryButton() {
  return (
    <Button
      variant="gray-outline"
      className="h-[40px] text-b3 text-gray3 tracking-[-0.5px]"
      onClick={() => {
        window.open('https://pf.kakao.com/_UmqJn', '_blank');
      }}
    >
      문의하기
    </Button>
  );
}

export function CancelButtons({ orderId }: { orderId: string }) {
  const { open } = useModal();
  const { mutate: cancelOrder } = useCancelOrderByUser();

  const handleCancelButtonClick = () => {
    open({
      title: '주문을 취소하시겠습니까?',
      description: '취소 시 결제 금액이 환불됩니다.',
      confirmEvent: () => cancelOrder(orderId),
    });
  };
  return (
    <div className="w-full flex justify-between h-[40px] border-[1px] border-gray6 rounded-[10px] items-center">
      <button
        type="button"
        className="cursor-pointer text-b3 text-gray3 flex-1 font-bold"
        onClick={handleCancelButtonClick}
      >
        취소하기
      </button>
      <div className="w-[1px] h-[22px] bg-gray6" />
      <button
        type="button"
        className="cursor-pointer text-b3 text-gray3 flex-1 font-bold"
        onClick={() => {
          window.open('https://pf.kakao.com/_UmqJn', '_blank');
        }}
      >
        문의하기
      </button>
    </div>
  );
}

export function ReviewButton({ orderGoodsId }: { orderGoodsId: string }) {
  const route = useRouter();

  return (
    <Button
      variant="secondary-outline"
      className="h-[40px] text-b3 text-secondary tracking-[-0.5px]"
      onClick={() => {
        route.push(`/bag/review/post/${orderGoodsId}`);
      }}
    >
      리뷰쓰기
    </Button>
  );
}

export function ButtonContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-end">{children}</div>;
}
