import React, { useState, useCallback, useEffect } from 'react';
import { getEurData } from '../api/euro';
import { EurDataType, initialEurData } from '../data/euro';
import { setKrwInt } from '../utils/setKrwInt';

export default function useEur() {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EurDataType>(initialEurData);
  const [inputValue, setInputValue] = useState('');
  const [krwValue, setKrwValue] = useState('');

  useEffect(() => {
    getEurInfo();
  }, []);

  const getEurInfo = useCallback(async () => {
    const krweur = await getEurData();
    setEurInfo(krweur);
    const minReadyTime = setTimeout(() => setReady(true), 1000);
    return () => clearTimeout(minReadyTime);
  }, []);

  const exchangeEurToKrw = useCallback(
    (krw: number) => {
      return setKrwInt(krw * eurInfo.basePrice);
    },
    [eurInfo.basePrice]
  );

  const onChangeEurToKrw = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setKrwValue('');
      setInputValue('');
    } else {
      // 소수점 두자리 이상 입력시 입력되지 않도록 제한
      const valueSplit = e.target.value.split('.');
      if (valueSplit.length === 2 && valueSplit[1].length > 2) return;
      // 원화로 변환
      const value = parseFloat(e.target.value);
      const krw = exchangeEurToKrw(value);
      setKrwValue(krw);
      setInputValue(e.target.value);
    }
  };

  return [isReady, eurInfo, inputValue, krwValue, onChangeEurToKrw] as const;
}
