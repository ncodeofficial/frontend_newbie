import * as React from "react";
import { useEffect, useState } from "react";
import Exchange from "../components/Exchange";
import Spinner from "../components/Spinner";
import { initialState, data } from "../types/interface";
import styled from "styled-components";

const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<data>(initialState);

  // 환율 정보 가져오기
  const getEurInfo = async () => {
    const krweur: data = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  useEffect(() => {
    getEurInfo();
  }, []);

  // 환율정보 로딩중일 경우 스피너 표시
  if (!isReady) return <Spinner />;

  return (
    <Container className="App">
      <h1> 유로(€) 계산기 </h1>
      <div>
        오늘의 환율 : {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 ? "▲" : "▼"}
        {"   "}
        {eurInfo.changePrice}원 (
        {((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)}%)
      </div>
      <DataGrid>
        <div>살때 : {eurInfo.cashBuyingPrice} ₩/€</div>
        <div>팔때 : {eurInfo.cashSellingPrice} ₩/€</div>
      </DataGrid>
      <DataGrid>
        <div>보낼때 : {eurInfo.ttSellingPrice} ₩/€</div>
        <div>받을때 : {eurInfo.ttBuyingPrice} ₩/€</div>
      </DataGrid>
      <hr />
      <Exchange eurInfo={eurInfo} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const DataGrid = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  margin: 15px auto;
`;
