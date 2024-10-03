export const commaizeNumber = (numberString: string | number) =>
  `${numberString}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
