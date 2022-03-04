import React, { useCallback, useState } from 'react';
import NumberFormat from 'react-number-format';

import { IExchangeRateProps } from '@components/ExchangeRate/ExchangeRate';

const InputForm = ({ eurInfo }: IExchangeRateProps): React.ReactElement => {
  const [eurValue, setEurValue] = useState<number | string>('');
  const [krwValue, setKrwValue] = useState<number | string>('');

  const { basePrice } = eurInfo;

  const exchangeEurToKrw = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEurValue(value);
    if (value.includes(',')) setKrwValue((Number(value.replace(/,/gi, '')) * basePrice).toFixed(0));
    else setKrwValue((Number(value) * basePrice).toFixed(0));
  }, []);

  return (
    <>
      <NumberFormat
        value={eurValue}
        decimalSeparator="."
        displayType="input"
        type="text"
        thousandSeparator={true}
        allowNegative={false}
        decimalScale={2}
        onChange={exchangeEurToKrw}
        maxLength={23}
      />
      유로 ▶︎
      <NumberFormat
        disabled
        value={krwValue}
        displayType="input"
        type="text"
        thousandSeparator={true}
        style={{ marginLeft: 15 }}
      />
      원
    </>
  );
};

export default InputForm;
