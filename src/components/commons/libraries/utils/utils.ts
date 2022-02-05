export const KrwPoint = (krw: number) => {
    return (String(krw).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
};

export const KrwMath = (Num: number) => {
    return (Math.ceil(Num));
};