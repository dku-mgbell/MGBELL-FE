export const getOrderFullDateByTime = ({
  time,
  isStore,
}: {
  time: string;
  isStore?: boolean;
}) => {
  const now = new Date();
  const orderHour = time.split('T')[1].split(':')[0];
  const orderMinute = time.split(':')[1];

  if (isStore) {
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${orderHour}:${orderMinute}:00.000Z`;
  }

  const targetKST = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    Number(orderHour),
    Number(orderMinute),
    0,
    0,
  );

  // 선택된 시간이 오늘 이후면 예약 날짜를 다음 날로 설정한다.
  const isNextDayOrder = targetKST < now;
  const reservationDate = isNextDayOrder
    ? new Date(targetKST.getTime() + 24 * 60 * 60 * 1000)
    : targetKST;

  const year = reservationDate.getFullYear();
  const month = String(reservationDate.getMonth() + 1).padStart(2, '0');
  const date = String(reservationDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}T${orderHour}:${orderMinute}:00.000Z`;
};
