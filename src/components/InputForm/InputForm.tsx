import React, { useCallback, useState } from 'react';
import NumberFormat from 'react-number-format';

import { IExchangeRateProps } from '@components/ExchangeRate/ExchangeRate';

const InputForm = ({ eurInfo }: IExchangeRateProps): React.ReactElement => {
  const [eurValue, setEurValue] = useState<number | string>('');
  const [krwValue, setKrwValue] = useState<number | string>('');

  const { basePrice } = eurInfo;

  const exchangeEurToKrw = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setEurValue(value);
      if (value.length !== 0) {
        if (value.includes(','))
          setKrwValue((Number(value.replace(/,/gi, '')) * basePrice).toFixed(0));
        else setKrwValue((Number(value) * basePrice).toFixed(0));
      } else setKrwValue('');
    },
    [basePrice],
  );

  return (
    <div className="ml-5 mt-5">
      <NumberFormat
        name="eur"
        value={eurValue}
        decimalSeparator="."
        displayType="input"
        type="text"
        thousandSeparator={true}
        allowNegative={false}
        decimalScale={2}
        onChange={exchangeEurToKrw}
        maxLength={23}
        className="border-2 underline"
      />
      유로 ▶︎
      <NumberFormat
        disabled
        value={krwValue}
        displayType="input"
        type="text"
        thousandSeparator={true}
        className="font-bold underline ml-2"
      />
      원
    </div>
  );
};

export default InputForm;
