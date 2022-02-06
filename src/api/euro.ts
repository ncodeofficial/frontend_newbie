import { EurDataType } from '../data/euro';

export const getEurData = async () => {
  const URL = 'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR';
  const krweur: EurDataType = await fetch(URL)
    .then((response) => response.json())
    .then((array) => array[0]);
  return krweur;
};
