export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  };
  const formattedDate = date.toLocaleDateString('ko-KR', options);

  const [month, day] = formattedDate.split('.');
  const weekDay = date.toLocaleString('ko-KR', { weekday: 'long' }).charAt(0);

  return `${month.trim()}.${day.trim()} (${weekDay})`;
};
