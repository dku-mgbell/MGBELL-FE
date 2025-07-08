import Image from 'next/image';
import Link from 'next/link';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { cn } from '@/lib/utils';
import {
  OrderStatus,
  UserOrderDetail,
  UserOrderDetailPreview,
} from '@/types/order';
import { commaizeNumber } from '@/utils/commaizeNumber';
import { getFullDateTime } from '@/utils/getFullDateTime';
import { ButtonContainer } from './button';
import { useRenderActionButton } from './button/useRenderActionButton';
import { OrderInfo } from './text/order-info';
import { OrderStatusText } from './text/order-status-text';

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

function OrderDetailButton({ orderId }: { orderId: string }) {
  return (
    <Link
      href={`/order/${orderId}`}
      scroll={false}
      className="flex items-center gap-[6px] text-b3 font-[600] text-gray5"
    >
      주문상세 <ChevronRightIcon color="#8F8F8F" width={6} height={10} />
    </Link>
  );
}

function HeaderOrderInfo({
  orderDateTime,
  orderStatus,
}: {
  orderDateTime: string;
  orderStatus: OrderStatus;
}) {
  return (
    <div className="flex gap-[6px] items-center">
      <OrderStatusText orderStatus={orderStatus} />
      <span className="text-b3 text-gray5">
        {getFullDateTime(orderDateTime)}
      </span>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-[12px] w-full">{children}</div>;
}

function Thumbnail({
  imageUrl,
  className,
}: {
  imageUrl: string;
  className?: string;
}) {
  return (
    <Image
      src={imageUrl}
      alt="thumbnail"
      width={83}
      height={72}
      className={cn('rounded-[10px]', className)}
    />
  );
}

function BodyOrderInfo({
  id,
  storeName,
  amount,
  subTotal,
  textStyle = 'medium',
  orderStatus,
}: {
  id: string;
  storeName: string;
  amount: number;
  subTotal?: number;
  textStyle?: 'medium' | 'large';
  orderStatus?: OrderStatus;
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
      {orderStatus && (
        <OrderStatusText orderStatus={orderStatus} className="text-b1" />
      )}
      <Link
        href={`/bag/${id}`}
        className={cn(style.storeName[textStyle], 'font-bold w-fit')}
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

export function OrderListItem({
  data: {
    orderId,
    storeId,
    createdAt,
    storeName,
    orderStatus,
    goodsList,
    imageUrls,
    reviewIds,
  },
}: {
  data: UserOrderDetailPreview;
}) {
  const actionButton = useRenderActionButton(orderStatus, orderId, reviewIds);
  return (
    <Container>
      <OrderInfoContainer>
        <Header>
          <HeaderOrderInfo
            orderDateTime={createdAt}
            orderStatus={orderStatus}
          />
          <OrderDetailButton orderId={orderId} />
        </Header>
        <Body>
          <Thumbnail imageUrl={imageUrls[0]} />
          <BodyOrderInfo
            id={storeId}
            storeName={storeName}
            amount={goodsList[0].quantity}
            subTotal={goodsList[0].salePrice * goodsList[0].quantity}
          />
        </Body>
      </OrderInfoContainer>
      <ButtonContainer>{actionButton}</ButtonContainer>
    </Container>
  );
}

export function OrderDetailItem({
  data: {
    orderId,
    storeId,
    createdAt,
    storeName,
    orderStatus,
    quantity,
    reviewId,
    imageUrl,
  },
}: {
  data: UserOrderDetail;
}) {
  const actionButton = useRenderActionButton(orderStatus, orderId, [reviewId]);

  return (
    <Container>
      <Body>
        <BodyOrderInfo
          id={storeId}
          storeName={storeName}
          amount={quantity}
          textStyle="large"
          orderStatus={orderStatus}
        />
        <Thumbnail imageUrl={imageUrl} className="w-[110px] h-[86px]" />
      </Body>
      <OrderInfo orderId={orderId} orderDateTime={createdAt} />
      <ButtonContainer>{actionButton}</ButtonContainer>
    </Container>
  );
}
