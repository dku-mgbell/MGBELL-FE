export const getMinPickUpTime = (startTime?: string) => {
  // 한국 시간(KST, UTC+9)으로 현재 시간 생성
  const now = new Date();
  const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000); // UTC+9 적용

  const minutes = koreaTime.getMinutes();

  const adjustedMinutes = Math.ceil(minutes / 10) * 10;

  if (adjustedMinutes >= 60) {
    koreaTime.setHours(koreaTime.getHours() + 1);
    koreaTime.setMinutes(0);
  } else {
    koreaTime.setMinutes(adjustedMinutes);
  }

  koreaTime.setSeconds(0);
  koreaTime.setMilliseconds(0);

  // ISO 형식으로 변환하되 한국 시간 유지
  const currentTime = koreaTime.toISOString();

  const result = startTime && startTime > currentTime ? startTime : currentTime;

  return result.replace('.000Z', '');
};
