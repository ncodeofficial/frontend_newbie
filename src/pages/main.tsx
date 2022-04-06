import { useEffect } from "react";
import { useState } from "react";
import { EurInfo, ExchangeEurToKrw, Loading } from "../components";
import { EurInfoType } from "../types";

const Main = () => {
  const [isReady, setReady] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<EurInfoType | null>(null);

  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then(([data]) => data);

    setEurInfo(krweur);
    setReady(true);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  if (!isReady) return <Loading />;

  return (
    <div className="App">
      {eurInfo && <EurInfo eurInfo={eurInfo} />}
      <hr />
      {eurInfo && <ExchangeEurToKrw eurInfo={eurInfo} />}
    </div>
  );
};

export default Main;
