import React, { useEffect } from 'react';
import useEuro from 'hooks/Euro/useEuro';
import CommonLayout from 'layouts/CommonLayout';
import EuroDetail from 'components/EuroDetail';
import EuroConverter from 'components/EuroConverter';
import DotLoader from 'components/Common/DotLoader';

export const App = () => {
  const { getEuroInfo, euroInfo, isLoading } = useEuro();

  useEffect(() => {
    getEuroInfo();
  }, []);

  return (
    <CommonLayout>
      {euroInfo && !isLoading ? (
        <>
          <EuroDetail euroInfo={euroInfo} />
          <EuroConverter basePrice={euroInfo.basePrice} />
        </>
      ) : (
        <DotLoader customHeight={400} />
      )}
    </CommonLayout>
  );
};

export default App;
