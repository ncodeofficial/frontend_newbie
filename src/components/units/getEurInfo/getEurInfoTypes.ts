import { ChangeEvent} from "react";

export interface getEurInfoUIProps{
    eurInfo: IEurInfo;
    onChangeKrw: (event: ChangeEvent<HTMLInputElement>) => void;
    exchangeEurToKrw: (krw: number) => number;
    krw: number;
}

export interface IEurInfo {
    basePrice?: number;
    openingPrice?: number;
    changePrice?: number;
    cashBuyingPrice?: number;
    cashSellingPrice?: number;
    ttSellingPrice?: number;
    ttBuyingPrice?: number;
}