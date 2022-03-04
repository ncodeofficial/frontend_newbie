import React from 'react';
import { IEurInfo } from 'interfaces/eur';

export interface IExchangeRateProps {
  eurInfo: IEurInfo;
}

const ExchangeRate = ({ eurInfo }: IExchangeRateProps): React.ReactElement => {
  const {
    basePrice,
    openingPrice,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = eurInfo;

  return (
    <div className="ml-5 my-5">
      <h1>환율기준 (1 유로)</h1>

      <div>
        {basePrice}
        {basePrice - openingPrice > 0 && '▲'}
        {basePrice - openingPrice < 0 && '▼'}
        {changePrice}원 ({(changePrice / basePrice) * 100}%)
      </div>

      <div>
        <div>살때 : {cashBuyingPrice}</div>
        <div>팔때 : {cashSellingPrice}</div>
        <div>보낼때 : {ttSellingPrice}</div>
        <div>받을때 : {ttBuyingPrice}</div>
      </div>
    </div>
  );
};

export default ExchangeRate;
