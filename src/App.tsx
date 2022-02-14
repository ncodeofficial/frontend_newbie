import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { data } from "./interface";

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<data>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });
  const [euro, setEuro] = useState<number | null>(null);
  const [krw, setKrw] = useState<string>("0");

  const getEurInfo = async () => {
    const krweur: data = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  const onChangeEuro = useCallback((e) => {
    e.preventDefault();
    //input 입력값
    const inputs: string = e.currentTarget.value;

    // 소수점 2자리 확인 정규표현식
    const regExp: RegExp = /^\d*.?\d{0,2}$/;

    // 소수점 2자리가 넘어가지 않도록 입력 제한
    let editInput: number = +inputs;
    if (!regExp.test(inputs)) {
      editInput = +inputs.substring(0, inputs.length - 1);
    }
    setEuro(editInput);
  }, []);

  useEffect(() => {
    // 소수점 제거, 금액 3자리 마다 콤마(,) 표시
    const transKrw: string = Math.ceil(
      euro! * eurInfo.basePrice
    ).toLocaleString("ko-KR");

    setKrw(transKrw);
  }, [eurInfo.basePrice, euro]);

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  // 환률정보 로딩중일 경우 "로딩중입니다..." 표시
  if (!isReady) return <>로딩중입니다....</>;

  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
      <hr />
      <input type="number" value={euro || ""} onChange={onChangeEuro} /> 유로 ▶︎{" "}
      <input disabled value={krw} /> 원
    </div>
  );
};

export default App;
