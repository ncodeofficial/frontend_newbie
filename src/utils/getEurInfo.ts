import { Dispatch } from "react";
import { API_ENDPOINT } from "constants/";
import { EurInfo } from "types";

interface Props {
  setEurInfo: Dispatch<EurInfo>;
  setReady: Dispatch<React.SetStateAction<boolean>>;
}

export const getEurInfo = async ({ setEurInfo, setReady }: Props) => {
  const krweur = await fetch(`${API_ENDPOINT}`)
    .then((response) => response.json())
    .then((array) => array[0])
    .catch((err) => alert("일시적으로 데이터를 불러올 수 없습니다."));
  setEurInfo(krweur);
  setReady(true);
};
