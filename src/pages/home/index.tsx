import React, { useEffect, useState } from 'react';

import { getEurData } from '@APIs/index';
import { IEurInfo } from '@interfaces/eur';

import Spinner from '@atoms/Spinner/Spinner';
import ExchangeRate from '@components/ExchangeRate/ExchangeRate';
import InputForm from '@components/InputForm/InputForm';

const Home = (): React.ReactElement => {
  const [isReady, setReady] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<IEurInfo>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });

  const getEurInfo = async () => {
    const data = await getEurData();

    if (data !== 'error') {
      setTimeout(() => {
        setReady((prev) => !prev);
      }, 100);
      setEurInfo(data);
    } else alert('환율 데이터 로드에 실패했습니다.');
  };

  useEffect(() => {
    getEurInfo();
  }, []);

  return isReady ? (
    <>
      <ExchangeRate {...{ eurInfo }} />
      <hr />
      <InputForm {...{ eurInfo }} />
    </>
  ) : (
    <Spinner />
  );
};

export default Home;
