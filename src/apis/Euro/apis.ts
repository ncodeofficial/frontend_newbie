import { API } from '../base';

export const getEuroExchangeRate = () => {
  return API(`/forex/recent?codes=FRX.KRWEUR`);
};
