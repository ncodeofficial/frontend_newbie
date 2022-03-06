import { API } from '../base';

export const getEuroExchangeRate = () => {
  return API.get(`/forex/recent?codes=FRX.KRWEUR`);
};
