
const END_POINT = 'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR';

export const getEurData = async () => {
    const krweur = await fetch(END_POINT)
        .then((response) => response.json())
        .then((array) => array[0])
        .catch((err) => {
            console.error(err);
            return 'error';
        });
    return krweur;
}

