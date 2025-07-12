export const returnTimeOptions = (
  inputType: 'open' | 'close' | 'pickUp',
  openTime?: string,
  closeTime?: string,
) => {
  // 시간 유틸리티 함수들
  const parseTime = (time: string) => {
    const hour = Number(time.slice(0, 2));
    const minute = Number(time.slice(3, 5));
    return { hour, minute };
  };

  const timeToMinutes = (time: string) => {
    const { hour, minute } = parseTime(time);
    return hour * 60 + minute;
  };

  const minutesToTime = (minutes: number) => {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  };

  // 각 타입별 시작/끝 시간 계산
  const getTimeRange = () => {
    let startMinutes = 16 * 60; // 16:00
    let endMinutes = 23 * 60 + 30; // 23:30

    switch (inputType) {
      case 'open':
        // open 타입에서는 항상 16:00부터 시작
        startMinutes = 16 * 60;
        if (closeTime) {
          endMinutes = timeToMinutes(closeTime) - 30; // 30분 전
        }
        break;

      case 'close':
        if (openTime) {
          startMinutes = timeToMinutes(openTime) + 30; // 30분 후
        }
        // close 타입에서는 closeTime을 고려하지 않고 기본 최대 시간(23:30)까지
        endMinutes = 23 * 60 + 30;
        break;

      case 'pickUp':
        if (openTime) {
          startMinutes = timeToMinutes(openTime);
        }
        if (closeTime) {
          endMinutes = Math.min(timeToMinutes(closeTime), 23 * 60 + 30);
        }
        break;

      default:
        break;
    }

    return { startMinutes, endMinutes };
  };

  // 30분 간격으로 시간 옵션 생성
  const generateTimeOptions = (startMinutes: number, endMinutes: number) => {
    const options: string[] = [];

    for (let minutes = startMinutes; minutes <= endMinutes; minutes += 30) {
      options.push(minutesToTime(minutes));
    }

    return options;
  };

  // 특별한 경우 처리
  const applySpecialRules = (options: string[]) => {
    switch (inputType) {
      case 'open':
        // 23:30은 제외
        return options.filter((option) => option !== '23:30');

      case 'close':
        // 16:00은 제외
        return options.filter((option) => option !== '16:00');

      case 'pickUp':
        // 기본 옵션 그대로 반환
        return options;

      default:
        return options;
    }
  };

  const { startMinutes, endMinutes } = getTimeRange();
  const options = generateTimeOptions(startMinutes, endMinutes);

  return applySpecialRules(options);
};
