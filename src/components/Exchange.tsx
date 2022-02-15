import * as React from "react";
import { useEffect, useState, useCallback, FunctionComponent } from "react";
import { data } from "../types/interface";

const Exchange: FunctionComponent<{ eurInfo: data }> = ({ eurInfo }) => {
  const [euro, setEuro] = useState<number | null>(null);
  const [krw, setKrw] = useState<string>("0");

  useEffect(() => {
    // 소수점 제거, 금액 3자리 마다 콤마(,) 표시
    const transKrw: string = Math.ceil(
      euro! * eurInfo.basePrice
    ).toLocaleString("ko-KR");
    // input값인 euro가 바뀔때마다 krw을 변환
    setKrw(transKrw);
  }, [eurInfo.basePrice, euro]);

  const onChangeEuro = useCallback((e) => {
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

  return (
    <>
      <input type="number" value={euro!} onChange={onChangeEuro} /> 유로(€) ▶︎{" "}
      <input disabled value={krw} /> 원(₩)
    </>
  );
};

export default Exchange;
