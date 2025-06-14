export const returnTimeOptions = (
  inputType: 'open' | 'close' | 'pickUp',
  openTime?: string,
  closeTime?: string,
) => {
  const timeToHour = (time: string) => Number(time.slice(0, 2));
  let startHour = 16;
  let endHour = 24;

  if (inputType === 'pickUp') {
    startHour = openTime ? timeToHour(openTime) : 16;
    endHour = closeTime ? timeToHour(closeTime) : 24;
  } else {
    startHour = openTime ? timeToHour(openTime) + 1 : 16;
    endHour = closeTime ? timeToHour(closeTime) - 1 : 24;
  }

  const options = Array.from(
    { length: (endHour - startHour + 1) * 2 },
    (_, i) => {
      const hour = (startHour + Math.floor(i / 2)).toString().padStart(2, '0');
      const minute = i % 2 === 0 ? '00' : '30';
      return `${hour}:${minute}`;
    },
  );

  if (inputType === 'open') {
    return [
      '16:00',
      ...options.filter((option) => option !== '24:00' && option !== '24:30'),
    ];
  } else if (inputType === 'close') {
    return [
      ...options.filter((option) => option !== '16:00' && option !== '16:30'),
      '24:00',
    ];
  } else {
    return options;
  }
};
