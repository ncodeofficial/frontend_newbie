import React from 'react';
import { EurDataType } from '../data/euro';
import { setKrwInt } from '../utils/setKrwInt';

interface EurInfoProp {
  eurInfo: EurDataType;
}

export default React.memo(function EurInfo({ eurInfo }: EurInfoProp) {
  return (
    <div>
      <div>환율기준 (1 유로)</div>
      <div>
        {setKrwInt(eurInfo.basePrice)}원{eurInfo.basePrice - eurInfo.openingPrice > 0 && '▲'}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && '▼'}
        {setKrwInt(eurInfo.changePrice)}원 ({(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {setKrwInt(eurInfo.cashBuyingPrice)}원</div>
        <div>팔때 : {setKrwInt(eurInfo.cashSellingPrice)}원</div>
        <div>보낼때 : {setKrwInt(eurInfo.ttSellingPrice)}원</div>
        <div>받을때 : {setKrwInt(eurInfo.ttBuyingPrice)}원</div>
      </div>
    </div>
  );
});
