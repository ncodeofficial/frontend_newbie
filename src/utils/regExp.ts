export const isUptoTwoDecimalPoint = (input: string): boolean => {
  const isIncludeDot = /[.]/g;

  if (isIncludeDot.test(input)) {
    const isTwoDecimalPoint = /^\d+[.]\d{1,2}$/;
    if (isTwoDecimalPoint.test(input)) return true;
    return false;
  }
  return true;
};
