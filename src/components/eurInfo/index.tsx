import { EurInfoType } from "../../types";
import { simplifyPricePoint } from "../../utils";

interface EurInfoProps {
  eurInfo: EurInfoType;
}

const EurInfo = ({ eurInfo }: EurInfoProps) => {
  const {
    basePrice,
    changePrice,
    openingPrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = eurInfo;

  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        basePrice: {simplifyPricePoint(basePrice)}원
        {basePrice - openingPrice > 0 && "▲"}
        {basePrice - openingPrice < 0 && "▼"}
        <br />
        changePrice: {simplifyPricePoint(changePrice)}원 (
        {(changePrice / basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {simplifyPricePoint(cashBuyingPrice)}</div>
        <div>팔때 : {simplifyPricePoint(cashSellingPrice)}</div>
        <div>보낼때 : {simplifyPricePoint(ttSellingPrice)}</div>
        <div>받을때 : {simplifyPricePoint(ttBuyingPrice)}</div>
      </div>
    </>
  );
};

export default EurInfo;
