import { useState } from "react";
import { EurInfoType } from "../../types";
import { isUptoTwoDecimalPoint, exchangeEurToKrw } from "../../utils";

interface EurInfoProps {
  eurInfo: EurInfoType;
}

const ExchangeEurToKrw = ({ eurInfo }: EurInfoProps) => {
  const { basePrice } = eurInfo;
  const [euro, setEuro] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    isUptoTwoDecimalPoint(e.target.value) && setEuro(e.target.value);

  return (
    <>
      <input
        name="euro"
        value={euro}
        type="number"
        onChange={handleChange}
        placeholder="유로금액을 적어주세요."
      />{" "}
      유로 ▶︎{" "}
      <input
        name="exchangeEurToKrw"
        value={exchangeEurToKrw(basePrice, +euro)}
        readOnly
      />{" "}
      원
    </>
  );
};

export default ExchangeEurToKrw;
