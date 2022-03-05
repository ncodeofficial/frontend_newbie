export default class EuroUtils {
  static exchangeEurToKrw(krw: number, eurBasePrice: number): number {
    return krw * eurBasePrice;
  }

  static getReadablePrice(price: number, hasDecimal = false): string {
    if (hasDecimal) return Number(price.toFixed(2)).toLocaleString();
    return Number(Math.floor(price)).toLocaleString();
  }

  static isExchangeRateRised(basePrice: number, openingPrice: number): boolean {
    return basePrice - openingPrice > 0;
  }

  static getChangePercentage(basePrice: number, changePrice: number): string {
    return ((changePrice / basePrice) * 100).toFixed(5);
  }
}
