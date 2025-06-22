import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { Button } from '@/components/ui/button';
import {
  OrderState,
  OrderStateColor,
  OrderStateName,
  UserOrderDetailPreview,
} from '@/types/order';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { formatDateTime } from '@/utils/formatDateTime';

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

function HeaderOrderInfo({
  orderDateTime,
  orderState,
}: {
  orderDateTime: string;
  orderState: OrderState;
}) {
  return (
    <div className="flex gap-[6px] items-center">
      <span className={`text-b2 font-bold ${OrderStateColor[orderState]}`}>
        {OrderStateName[orderState]}
      </span>
      <span className="text-b3 text-gray5">
        {formatDateTime(orderDateTime)}
      </span>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-[12px]">{children}</div>;
}

function Thumbnail({ images }: { images: string }) {
  return (
    <div
      className="w-[83px] h-[72px] rounded-[10px] bg-cover bg-center"
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
}: {
  id: number;
  storeName: string;
  amount: number;
  subTotal: number;
}) {
  return (
    <div className="flex flex-col gap-[2px]">
      <Link href={`/bag/${id}`} className="text-b2 font-bold">
        {storeName}
      </Link>
      <p className="text-b2 text-gray5">마감백 {amount}개</p>
      <p className="text-b2 font-bold">{commaizeNumber(subTotal)}원</p>
    </div>
  );
}

function ReviewButton({ orderId }: { orderId: number }) {
  const route = useRouter();

  return (
    <Button
      variant="secondary-outline"
      className="py-[8px] text-b3 text-secondary tracking-[-0.5px]"
      onClick={() => {
        route.push(`/bag/review/post?orderId=${orderId}`);
      }}
    >
      리뷰 작성
    </Button>
  );
}

function CancelButtons() {
  return (
    <div className="w-full flex justify-between py-[8px] border-[1px] border-gray6 rounded-[10px] items-center">
      <button
        type="button"
        className="cursor-pointer text-b3 text-gray3 flex-1 font-bold"
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

export default function OrderItem({
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
        {orderState === 'REQUESTED' && <CancelButtons />}
        {orderState === 'COMPLETED' && <ReviewButton orderId={orderId} />}
      </ButtonContainer>
    </Container>
  );
}
