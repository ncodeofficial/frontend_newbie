export const setKrwInt = (number: number) => {
  const numberInt = Math.floor(number);
  return numberInt.toLocaleString('ko-KR');
};
