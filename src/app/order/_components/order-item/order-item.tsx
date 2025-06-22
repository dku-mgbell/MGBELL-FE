import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { Button } from '@/components/ui/button';
import { useCancelOrderByUser } from '@/hooks/query/order/useCancelOrderByUser';
import { cn } from '@/lib/utils';
import {
  OrderState,
  OrderStateColor,
  OrderStateName,
  UserOrderDetail,
  UserOrderDetailPreview,
} from '@/types/order';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { formatDateTime } from '@/utils/formatDateTime';
import useModal from '@/hooks/useModal';

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[16px] border-b-[1px] last:border-b-0 border-gray7 pt-[10px] pb-[20px]">
      {children}
    </div>
  );
}

function OrderInfoContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-[12px]">{children}</div>;
}

function Header({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-between">{children}</div>;
}

function OrderDetailButton({ orderId }: { orderId: number }) {
  return (
    <Link
      href={`/order/${orderId}`}
      className="flex items-center gap-[6px] text-b3 font-[600] text-gray5"
    >
      주문상세 <ChevronRightIcon color="#8F8F8F" width={6} height={10} />
    </Link>
  );
}

function OpenStatusText({
  orderState,
  className,
}: {
  orderState: OrderState;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'text-b2 font-bold',
        className,
        OrderStateColor[orderState],
      )}
    >
      {OrderStateName[orderState]}
    </p>
  );
}

function HeaderOrderInfo({
  orderDateTime,
  orderState,
}: {
  orderDateTime: string;
  orderState: OrderState;
}) {
  return (
    <div className="flex gap-[6px] items-center">
      <OpenStatusText orderState={orderState} />
      <span className="text-b3 text-gray5">
        {formatDateTime(orderDateTime)}
      </span>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-[12px] w-full">{children}</div>;
}

function Thumbnail({
  images,
  className,
}: {
  images: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'w-[83px] h-[72px] rounded-[10px] bg-cover bg-center',
        className,
      )}
      style={{ backgroundImage: `url('${images}')` }}
    />
  );
}

function ButtonContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-end">{children}</div>;
}

function BodyOrderInfo({
  id,
  storeName,
  amount,
  subTotal,
  openStatus,
  textStyle = 'medium',
}: {
  id: number;
  storeName: string;
  amount: number;
  subTotal?: number;
  openStatus?: OrderState;
  textStyle?: 'medium' | 'large';
}) {
  const style = {
    storeName: {
      large: 'text-h5',
      medium: 'text-b2',
    },
    amount: {
      large: 'text-b1 font-bold',
      medium: 'text-b2',
    },
  };

  return (
    <div className="flex flex-col gap-[2px] flex-1">
      {openStatus && (
        <OpenStatusText orderState={openStatus} className="text-b1" />
      )}
      <Link
        href={`/bag/${id}`}
        className={cn(style.storeName[textStyle], 'font-bold')}
      >
        {storeName}
      </Link>
      <p className={cn(style.amount[textStyle], 'text-gray4')}>
        마감백 {amount}개
      </p>
      {subTotal && (
        <p className="text-b2 font-bold">{commaizeNumber(subTotal)}원</p>
      )}
    </div>
  );
}

function ReviewButton({ orderId }: { orderId: number }) {
  const route = useRouter();

  return (
    <Button
      variant="secondary-outline"
      className="h-[40px] text-b3 text-secondary tracking-[-0.5px]"
      onClick={() => {
        route.push(`/bag/review/post?orderId=${orderId}`);
      }}
    >
      리뷰 작성
    </Button>
  );
}

function CancelButtons({ orderId }: { orderId: number }) {
  const { open } = useModal();
  const { mutate: cancelOrder } = useCancelOrderByUser();

  const handleCancelButtonClick = () => {
    open({
      content: '주문을 취소하시겠습니까?',
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
        주문 취소
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

export function OrderListItem({
  data: {
    orderId,
    id,
    orderDateTime,
    storeName,
    orderState,
    amount,
    subTotal,
    images,
  },
}: {
  data: UserOrderDetailPreview;
}) {
  return (
    <Container>
      <OrderInfoContainer>
        <Header>
          <HeaderOrderInfo
            orderDateTime={orderDateTime}
            orderState={orderState}
          />
          <OrderDetailButton orderId={orderId} />
        </Header>
        <Body>
          <Thumbnail images={images} />
          <BodyOrderInfo
            id={id}
            storeName={storeName}
            amount={amount}
            subTotal={subTotal}
          />
        </Body>
      </OrderInfoContainer>
      <ButtonContainer>
        {orderState === 'REQUESTED' && <CancelButtons orderId={orderId} />}
        {orderState === 'COMPLETED' && <ReviewButton orderId={orderId} />}
      </ButtonContainer>
    </Container>
  );
}

export function OrderDateAndNumberInfo({
  orderId,
  orderDateTime,
}: {
  orderId: number;
  orderDateTime: string;
}) {
  return (
    <p className="text-b2 text-gray5">
      주문일시: {formatDateTime(orderDateTime)}
      <br />
      주문번호: {orderId}
    </p>
  );
}

export function OrderDetailItem({
  data: { orderId, id, orderDateTime, storeName, orderState, amount, images },
}: {
  data: UserOrderDetail;
}) {
  return (
    <Container>
      <Body>
        <BodyOrderInfo
          id={id}
          storeName={storeName}
          amount={amount}
          openStatus={orderState}
          textStyle="large"
        />
        <Thumbnail images={images} className="w-[110px] h-[86px]" />
      </Body>
      <OrderDateAndNumberInfo orderId={orderId} orderDateTime={orderDateTime} />
      <ButtonContainer>
        {orderState === 'REQUESTED' && <CancelButtons orderId={orderId} />}
        {orderState === 'COMPLETED' && <ReviewButton orderId={orderId} />}
      </ButtonContainer>
    </Container>
  );
}
