import React, { useEffect, useState } from "react";
import { Loading } from "components/Loading";
import { EurInfo } from "types";
import { comma, exchangeEurToKrw, getEurInfo, uncomma } from "utils";

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EurInfo>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");

  useEffect(() => {
    getEurInfo({ setEurInfo, setReady });
  }, [inputValue, resultValue]);

  if (!isReady) return <Loading />;

  const {
    basePrice,
    openingPrice,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = eurInfo;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(comma(uncomma(e.target.value)));
    let value = Number(uncomma(e.target.value));
    isNaN(value)
      ? setResultValue("0")
      : (value = exchangeEurToKrw(value, basePrice));
    value = Math.round((value + Number.EPSILON) * 100) / 100;
    setResultValue(comma(`${value}`));
  };

  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <div>
        {basePrice}
        {basePrice - openingPrice > 0 && "▲"}
        {basePrice - openingPrice < 0 && "▼"}
        {changePrice}원 ({(changePrice / basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {cashBuyingPrice}</div>
        <div>팔때 : {cashSellingPrice}</div>
        <div>보낼때 : {ttSellingPrice}</div>
        <div>받을때 : {ttBuyingPrice}</div>
      </div>
      <hr />
      <input type="text" value={inputValue} onChange={handleInput} /> 유로 ▶︎
      <input type="text" value={resultValue} disabled />원
    </div>
  );
};

export default App;
