export interface EurDataType {
  basePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  change: string;
  changePrice: number;
  changeRate: number;
  code: string;
  country: string;
  createdAt: string;
  currencyCode: string;
  currencyName: string;
  currencyUnit: number;
  date: string;
  exchangeCommission: number;
  fcSellingPrice: number | null;
  high52wDate: string;
  high52wPrice: number;
  highPrice: number;
  id: number;
  low52wDate: string;
  low52wPrice: number;
  lowPrice: number;
  modifiedAt: string;
  name: string;
  openingPrice: number;
  provider: string;
  recurrenceCount: number;
  signedChangePrice: number;
  signedChangeRate: number;
  tcBuyingPrice: number | null;
  time: string;
  timestamp: number;
  ttBuyingPrice: number;
  ttSellingPrice: number;
  usDollarRate: number;
}

export const initialEurData = {
  basePrice: 0,
  cashBuyingPrice: 0,
  cashSellingPrice: 0,
  change: '1',
  changePrice: 0,
  changeRate: 0,
  code: '1',
  country: '1',
  createdAt: '1',
  currencyCode: '1',
  currencyName: '1',
  currencyUnit: 0,
  date: '1',
  exchangeCommission: 0,
  fcSellingPrice: null,
  high52wDate: '1',
  high52wPrice: 0,
  highPrice: 0,
  id: 0,
  low52wDate: '1',
  low52wPrice: 0,
  lowPrice: 0,
  modifiedAt: '1',
  name: '1',
  openingPrice: 0,
  provider: '1',
  recurrenceCount: 0,
  signedChangePrice: 0,
  signedChangeRate: 0,
  tcBuyingPrice: null,
  time: '1',
  timestamp: 0,
  ttBuyingPrice: 0,
  ttSellingPrice: 0,
  usDollarRate: 0,
};
