export const format24HourTimeToFullDate = (time: string) => {
  return `${new Date().toISOString().split('T')[0]}T${time}:00.000Z`;
};
