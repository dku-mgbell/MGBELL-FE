export const getOrderFullDateByTime = ({
  time,
  isUser,
}: {
  time: string;
  isUser?: boolean;
}) => {
  const now = new Date();
  const kstDate = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const orderHour = Number(time.split(':')[0]);
  const orderMinute = Number(time.split(':')[1]);

  // 매장 영업 시간
  if (!isUser) {
    const year = kstDate.getUTCFullYear();
    const month = String(kstDate.getUTCMonth() + 1).padStart(2, '0');
    const date = String(kstDate.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${date}T${time}:00.000Z`;
  }

  // 사용자 주문 시간 (예약의 경우 고려)
  const targetKST = new Date(
    kstDate.getFullYear(),
    kstDate.getMonth(),
    kstDate.getDate(),
    orderHour,
    orderMinute,
    0,
    0,
  );

  // 선택된 시간이 오늘 이후면 예약 날짜를 다음 날로 설정한다.
  const isNextDayOrder = targetKST < now;
  const reservationDate = isNextDayOrder
    ? new Date(kstDate.getTime() + 24 * 60 * 60 * 1000)
    : kstDate;

  const year = reservationDate.getUTCFullYear();
  const month = String(reservationDate.getUTCMonth() + 1).padStart(2, '0');
  const date = String(reservationDate.getUTCDate()).padStart(2, '0');

  return `${year}-${month}-${date}T${time}:00.000Z`;
};
