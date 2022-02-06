import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { IRate } from "../../interface/rateInfo";

const ExchangeBox = ({ rateInfo }: { rateInfo: IRate }) => {
  const [inputValue, setInputValue] = useState<string>("1");
  const [exchangedValue, setExchangedValue] = useState<number>();

  const exchangeEurToKrw = useCallback(
    (rate: number) => {
      if (rateInfo !== undefined)
        setExchangedValue(Math.round(rate * rateInfo.basePrice));
    },
    [rateInfo]
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validDecimalPoint = /^\d*[.]\d{3}$/;
    const newNum = e.target.value.replace(/[^0-9.]/g, "");

    if (!validDecimalPoint.test(newNum)) {
      setInputValue(newNum);
    }
  };

  useEffect(() => {
    setInputValue("1");
  }, [rateInfo]);

  useEffect(() => {
    const validDuplicateDot = /^\d*[.]\d*$/;

    if (inputValue.length === 0) {
      setInputValue("0");
    }

    if (!validDuplicateDot.test(inputValue) && inputValue.substr(-1) === ".") {
      setInputValue((prev) => prev.slice(0, -1));
    } else {
      exchangeEurToKrw(Number(inputValue));
    }
  }, [inputValue, exchangeEurToKrw]);

  return (
    <Container>
      <InputBox>
        <InputMoney
          type="text"
          value={inputValue?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") || ""}
          onChange={handleInput}
        />
        <CurrencyInfo>
          <span>{inputValue?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          {rateInfo.currencyName}
        </CurrencyInfo>
      </InputBox>
      <Equals>
        <i className="fas fa-equals"></i>
      </Equals>
      <InputBox>
        <InputMoney
          readOnly
          value={
            exchangedValue?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ||
            rateInfo.basePrice
          }
        />
        <CurrencyInfo>
          <span>
            {exchangedValue?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          원
        </CurrencyInfo>
      </InputBox>
    </Container>
  );
};

export default ExchangeBox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px 0px;
  background: url(https://finance.daum.net/images/retina/bg_exchange_calc.png);
`;

const Equals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #adc6e7;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};
`;

const InputMoney = styled.input`
  width: 100%;
  height: 70%;
  padding-right: 5px;
  border: none;
  text-align: end;
  outline: none;
`;

const InputBox = styled.div`
  width: 300px;
  height: 60px;
  margin: 0px 30px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.shadow01};
`;

const CurrencyInfo = styled.p`
  padding-right: 5px;
  text-align: end;
  font-size: 13px;

  span {
    margin-right: 3px;
  }
`;
