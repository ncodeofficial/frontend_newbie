import { KrwMath, KrwPoint } from "../../commons/libraries/utils/utils";
import { getEurInfoUIProps } from "./getEurInfoTypes";

const GetEuroInfoUI = (props:getEurInfoUIProps) => {

    return(
        <>
            <div>
                <div>환율기준 (1 유로)</div>
                <div>
                    {props.eurInfo.basePrice}
                    {props.eurInfo.basePrice - props.eurInfo.openingPrice > 0 && "▲"}
                    {props.eurInfo.basePrice - props.eurInfo.openingPrice < 0 && "▼"}
                    {props.eurInfo.changePrice}원 (
                    {(props.eurInfo.changePrice / props.eurInfo.basePrice) * 100}%)
                </div>
                <div>
                    <div>살때 : {props.eurInfo.cashBuyingPrice}</div>
                    <div>팔때 : {props.eurInfo.cashSellingPrice}</div>
                    <div>보낼때 : {props.eurInfo.ttSellingPrice}</div>
                    <div>받을때 : {props.eurInfo.ttBuyingPrice}</div>
                </div>
                <hr />
                <input onChange={props.onChangeKrw}/> 유로 ▶︎ <input disabled placeholder={KrwPoint(KrwMath(props.exchangeEurToKrw(props.krw)))}/> 원
            </div>
        </>
    )
}

export default GetEuroInfoUI;
