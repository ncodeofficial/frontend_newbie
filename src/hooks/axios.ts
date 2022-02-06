import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

// tslint:disable-next-line: interface-name
export interface UseAxiosResponse {
  called: boolean;
  data: any;
  loading: boolean;
  error: AxiosError;
  message?: any;
}
export type UseAxiosPromise = Promise<AxiosResponse<any>>;
export type UseAxiosType = [
  (config?: AxiosRequestConfig) => UseAxiosPromise,
  UseAxiosResponse
];

const axios = Axios.create({
  baseURL: "https://quotation-api-cdn.dunamu.com",
});

export const useAxios = (): UseAxiosType => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<AxiosError<any>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [called, setCalled] = useState<boolean>(false);
  const [response, setResponse] = useState<UseAxiosResponse>({
    error,
    loading,
    called,
    data,
  } as any);

  const request = useCallback(
    async (config?: AxiosRequestConfig) => {
      setCalled(false);
      setLoading(true);
      setData(undefined);
      setError(undefined);

      config = {
        ...config,
        headers: {
          ...config?.headers,
        },
      };

      try {
        const res = await axios(config);
        setData(res?.data);

        return res;
      } catch (e: any) {
        const error = e?.response?.data?.message
          ? e?.response?.data?.message
          : e;
        setError(error);
        throw error;
      } finally {
        setCalled(true);
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [axios, setCalled, setLoading, setData, setError]
  );

  useEffect(() => {
    setResponse({
      error,
      loading,
      called,
      data,
    } as any);
  }, [error, loading, data, called]);

  return [request, response];
};

export const useGetRateInfo = () => {
  const [request, response] = useAxios();

  const run = (nation: string) => {
    return request({
      url: `/v1/forex/recent?codes=FRX.KRW${nation}`,
      method: "GET",
    });
  };

  return [run, response] as [typeof run, typeof response];
};
export const useGetRateList = () => {
  const [request, response] = useAxios();

  const run = (nation: string) => {
    return request({
      url: `/v1/forex/recent?codes=FRX.KRW${nation}`,
      method: "GET",
    });
  };

  return [run, response] as [typeof run, typeof response];
};
