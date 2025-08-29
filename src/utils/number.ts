// add comma function
export function fnAddComma(val: number | string): string {
  if (val === null || val === undefined) return "";
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// get discount calculation
export const getDiscountPercent = (price: number, oldPrice: number): number => {
  if (!oldPrice || price >= oldPrice) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
};
