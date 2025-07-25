import TimeIcon from '@/assets/svg/TimeIcon';
import { OrderStatusName } from '@/types/order';
import { OwnerOrderListItem } from '@/types/owner';
import { format24HourTime } from '@/utils/format24HourTime';
import { getFullDateTime } from '@/utils/getFullDateTime';
import { OwnerOrderButtons } from './owner-order-buttons/index';

function Container({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex flex-col gap-[18px] p-[20px] bg-white rounded-[10px]">
      {children}
    </li>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-between">{children}</div>;
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[10px] bg-gray9 p-[20px] rounded-[10px]">
      {children}
    </div>
  );
}

function HeaderInfo({ content }: { content: OwnerOrderListItem }) {
  return (
    <div className="flex flex= 1 flex-col gap-[4px]">
      <p className="text-b2 font-bold">가게 주문번호 {content.orderId}</p>
      <div className="text-b1 flex gap-[14px] items-center">
        <p className="text-b1 font-bold">마감백 {content.quantity}개</p>
        <p className="text-gray4">{content.totalPrice.toLocaleString()}원</p>
        <p className="flex gap-[4px] items-center">
          <TimeIcon />
          <p className="font-bold">
            픽업 시간 {format24HourTime(content.pickupTime)}
          </p>
        </p>
      </div>
    </div>
  );
}

function ButtonContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-[10px] w-[244px]">{children}</div>;
}

function OrderDetail({ content }: { content: OwnerOrderListItem }) {
  const data = {
    주문상태: OrderStatusName[content.orderStatus],
    주문일시: getFullDateTime(content.createdAt),
    연락처: content.phoneNumber,
    요청사항: content.memo,
  };

  return (
    <div className="w-full">
      <table className="border-separate border-spacing-y-[6px]">
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td className="text-b3 font-bold text-gray4 pr-[20px]">{key}</td>
              <td className="text-b2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function OrderListItem({
  content,
}: {
  content: OwnerOrderListItem;
}) {
  return (
    <Container>
      <Header>
        <HeaderInfo content={content} />
        <ButtonContainer>
          <OwnerOrderButtons
            status={content.orderStatus}
            orderId={content.orderId}
          />
        </ButtonContainer>
      </Header>
      <Body>
        <OrderDetail content={content} />
      </Body>
    </Container>
  );
}
