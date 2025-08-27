export const getMinPickUpTime = (startTime: string, endTime: string) => {
  // 한국 시간(KST, UTC+9)으로 현재 시간 생성
  const now = new Date();

  if (now > new Date(endTime)) {
    // endTime의 날짜 추출
    const endDate = new Date(endTime);
    const today = new Date();

    // endTime의 날짜와 현재 날짜가 같은지 확인
    const isSameDate =
      endDate.getFullYear() === today.getFullYear() &&
      endDate.getMonth() === today.getMonth() &&
      endDate.getDate() === today.getDate();

    // startTime에서 시간 부분만 추출
    const timeMatch = startTime.match(/T(\d{2}:\d{2}:\d{2})/);
    const timeString = timeMatch ? timeMatch[1] : '00:00:00';

    if (isSameDate) {
      // 날짜만 다음날로, 시간은 startTime의 시간
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const year = tomorrow.getFullYear();
      const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const day = String(tomorrow.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}T${timeString}`;
    } else {
      // 날짜만 오늘로, 시간은 startTime의 시간
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}T${timeString}`;
    }
  }

  const minutes = now.getMinutes();

  const adjustedMinutes = Math.ceil(minutes / 10) * 10;

  if (adjustedMinutes >= 60) {
    now.setHours(now.getHours() + 1);
    now.setMinutes(0);
  } else {
    now.setMinutes(adjustedMinutes);
  }

  now.setSeconds(0);
  now.setMilliseconds(0);

  const currentTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:00.000Z`;

  const result = startTime && startTime > currentTime ? startTime : currentTime;

  return result.replace('.000Z', '');
};
