export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const weekDay = date.toLocaleString('ko-KR', { weekday: 'long' }).charAt(0);

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? '오후' : '오전';
  const formattedHours = String(hours % 12 || 12).padStart(2, '0');

  return `${year}.${month}.${day}(${weekDay}) ${ampm} ${formattedHours}:${minutes}`;
};
