export const calculateSalePrice = (
  price?: number,
  discountPercentage?: string,
) => {
  if (!price || !discountPercentage) return 0;
  const discountNumber = Number(discountPercentage?.replace('%', ''));
  const result = Math.floor(((100 - discountNumber) / 100) * price - 100);
  if (result < 0) return 0;
  return result;
};
