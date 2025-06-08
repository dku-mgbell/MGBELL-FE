export const returnTimeOptions = (
  inputType: 'open' | 'close',
  openTime?: string,
  closeTime?: string,
) => {
  const timeToHour = (time: string) => Number(time.slice(0, 2));

  const startHour = openTime ? timeToHour(openTime) + 1 : 16;
  const endHour = closeTime ? timeToHour(closeTime) - 1 : 24;

  const options = Array.from({ length: endHour - startHour + 1 }, (_, i) => {
    const hour = (startHour + i).toString().padStart(2, '0');
    return `${hour}:00`;
  });

  if (inputType === 'open') {
    return ['16:00', ...options.filter((option) => option !== '24:00')];
  } else {
    return [...options.filter((option) => option !== '16:00'), '24:00'];
  }
};
