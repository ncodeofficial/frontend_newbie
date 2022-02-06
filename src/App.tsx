/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IRate } from "./interface/rateInfo";
import Loading from "./components/common/Loading";
import DropDown from "./components/DropDown";
import ExchangeInfo from "./components/ExchangeInfo";
import ExchangeList from "./components/ExchangeList";
import ExchangeBox from "./components/ExchangeBox";
import { useGetRateInfo, useGetRateList } from "./hooks/axios";
import { LIST } from "./components/ExchangeList/data";

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [rateInfo, setRateInfo] = useState<IRate>();
  const [rateList, setRateList] = useState<IRate[]>([]);
  const [nation, setNation] = useState<string>("EUR");
  const [rateRequest, rateRes] = useGetRateInfo();
  const [listRequest, listRes] = useGetRateList();

  const getRateInfo = (value: string) => {
    rateRequest(value);
  };
  const getRateList = (value: string) => {
    listRequest(value);
  };

  useEffect(() => {
    if (!rateRes.loading && rateRes.error) {
      alert("인터넷 오류");
    }

    if (!rateRes.loading && rateRes.data) {
      setRateInfo(rateRes.data[0]);
      setReady(true);
    }
  }, [rateRes.data, rateRes.loading, rateRes.error]);

  useEffect(() => {
    if (!listRes.loading && listRes.error) {
      alert("인터넷 오류");
    }

    if (!listRes.loading && listRes.data) {
      setRateList([...rateList, ...listRes.data]);
      setReady(true);
    }
  }, [listRes.data, listRes.loading, listRes.error]);

  useEffect(() => {
    getRateInfo(nation);
  }, [nation]);

  useEffect(() => {
    getRateInfo("EUR");

    if (rateList.length === 0) {
      LIST.forEach((x) => {
        getRateList(x.nation);
      });
    }
  }, []);

  if (!isReady) return <Loading />;
  return (
    <Layout>
      {rateInfo && (
        <Container>
          <DropDown select={setNation} />
          <ExchangeInfo rateInfo={rateInfo} />
          <ExchangeBox rateInfo={rateInfo} />
          <ExchangeList rateList={rateList} />
        </Container>
      )}
    </Layout>
  );
};

export default App;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  height: 80vh;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.shadow01};
`;
