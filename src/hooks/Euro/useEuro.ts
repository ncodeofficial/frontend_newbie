import { EuroInfo, getEuroExchangeRate } from 'apis/Euro';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

const useEuro = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [euroInfo, setEuroInfo] = useState<EuroInfo | null>(null);

  const getEuroInfo = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response: AxiosResponse<EuroInfo[]> = await getEuroExchangeRate();
      setEuroInfo(response.data[0]);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    euroInfo,
    getEuroInfo,
    isError,
    isLoading,
  };
};

export default useEuro;
