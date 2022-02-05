import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import GetEuroInfoUI from "./getEurInfoPresenter";
import { IEurInfo } from "./getEurInfoTypes";
import Loading from "../../commons/loading/loading";

const GetEuroInfo = () => {
    const [eurInfo, setEurInfo] = useState<IEurInfo>({});
    const [krw, setKrw] = useState(0)
    const [loading, setLoading] = useState(true)

    async function getEurInfo() {
        const krweur = await axios.get(
            "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
        );

        setEurInfo({
            basePrice: krweur.data[0].basePrice,
            openingPrice: krweur.data[0].openingPrice,
            changePrice: krweur.data[0].changePrice,
            cashBuyingPrice: krweur.data[0].cashBuyingPrice,
            cashSellingPrice: krweur.data[0].cashSellingPrice,
            ttSellingPrice: krweur.data[0].ttSellingPrice,
            ttBuyingPrice: krweur.data[0].ttBuyingPrice,
        });
        setLoading(false)
    };

    const onChangeKrw = (event: ChangeEvent<HTMLInputElement>) => {
        setKrw(Number(event.target.value))
    }

    const exchangeEurToKrw = (krw:number) => krw * eurInfo.basePrice;

    useEffect(() => {
        getEurInfo()
    }, []);

    return(
        <>
            {loading ? <Loading /> :
            <GetEuroInfoUI eurInfo={eurInfo} 
                          onChangeKrw={onChangeKrw} 
                          exchangeEurToKrw={exchangeEurToKrw}
                          krw={krw}
                          />
            }
        </>
          )
}

export default GetEuroInfo;
