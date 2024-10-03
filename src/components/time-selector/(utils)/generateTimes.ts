export const generateTimes = () => {
  const timeOptions = [];
  for (let i = 0; i < 24; i += 1) {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const period = i < 12 ? '오전' : '오후';
    const hourString = String(i).padStart(2, '0');
    timeOptions.push({
      display: `${period} ${hour}:00`,
      value: `${hourString}:00`,
    });
    timeOptions.push({
      display: `${period} ${hour}:30`,
      value: `${hourString}:30`,
    });
  }
  return timeOptions;
};
