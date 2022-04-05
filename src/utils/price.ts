export const removePoint = (price: number): number => Math.floor(price);
export const addCommaPrice = (price: number): string => price?.toLocaleString();
export const simplifyPricePoint = (price: number): string =>
  addCommaPrice(removePoint(price));
export const exchangeEurToKrw = (basePrice: number, krw: number = 1): string =>
  addCommaPrice(removePoint(basePrice * krw));
