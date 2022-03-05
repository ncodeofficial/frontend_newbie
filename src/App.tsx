import React, { useEffect } from 'react';
import useEuro from 'hooks/Euro/useEuro';
import CommonLayout from 'layouts/CommonLayout';
import EuroDetail from 'components/EuroDetail';
import EuroConverter from 'components/EuroConverter';

export const App = () => {
  const { getEuroInfo, euroInfo, isLoading } = useEuro();

  useEffect(() => {
    getEuroInfo();
  }, []);

  if (isLoading) return <>로딩중</>;
  if (!euroInfo) return null;

  return (
    <CommonLayout>
      <EuroDetail euroInfo={euroInfo} />
      <EuroConverter basePrice={euroInfo.basePrice} />
    </CommonLayout>
  );
};

export default App;
