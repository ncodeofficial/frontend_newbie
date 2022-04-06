import { isUptoTwoDecimalPoint } from "./regExp";

describe("소수점 둘째자리까지 주어졌는지 판별하는 test", () => {
  test("소수점이 없는 input일 때", () => {
    const input: string = "123";
    const expected: boolean = true;
    expect(isUptoTwoDecimalPoint(input)).toBe(expected);
  });

  test("소수점 둘째자리 input일 때", () => {
    const input: string = "123.45";
    const expected: boolean = true;
    expect(isUptoTwoDecimalPoint(input)).toBe(expected);
  });

  test("소수점 셋째자리 input일 때", () => {
    const input: string = "123.456";
    const expected: boolean = false;
    expect(isUptoTwoDecimalPoint(input)).toBe(expected);
  });
});
