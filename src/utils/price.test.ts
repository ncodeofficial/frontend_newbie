import {
  addCommaPrice,
  exchangeEurToKrw,
  removePoint,
  simplifyPricePoint,
} from "./price";

describe("소수점을 없애는 test", () => {
  test("정수 일 때", () => {
    const number: number = 1;
    const expected: number = 1;
    expect(removePoint(number)).toBe(expected);
  });

  test("0 일 때", () => {
    const number: number = 0;
    const expected: number = 0;
    expect(removePoint(number)).toBe(expected);
  });

  test("유리수 일 때", () => {
    const number: number = 1.23;
    const expected: number = 1;
    expect(removePoint(number)).toBe(expected);
  });
});

describe("세 자리마다 콤마를 추가하는 test", () => {
  test("천원일 때", () => {
    const price: number = 1000;
    const expected: string = "1,000";
    expect(addCommaPrice(price)).toBe(expected);
  });

  test("만원 때", () => {
    const price: number = 10000;
    const expected: string = "10,000";
    expect(addCommaPrice(price)).toBe(expected);
  });

  test("십만원일 때", () => {
    const price: number = 100000;
    const expected: string = "100,000";
    expect(addCommaPrice(price)).toBe(expected);
  });

  test("백만원일 때", () => {
    const price: number = 1000000;
    const expected: string = "1,000,000";
    expect(addCommaPrice(price)).toBe(expected);
  });
});

describe("소수점을 없애고 세 자리마다 콤마를 추가하는 test", () => {
  test("소수점이 포함된 가격일 때", () => {
    const price: number = 123456.789;
    const expected: string = "123,456";
    expect(simplifyPricePoint(price)).toBe(expected);
  });

  test("소수점이 포함되지 않은 가격일 때", () => {
    const price: number = 123456;
    const expected: string = "123,456";
    expect(simplifyPricePoint(price)).toBe(expected);
  });
});

describe("유로를 krw으로 환전하는 test", () => {
  test("1유로를 환전 할 때", () => {
    const basePrice: number = 1332;
    const euro: number = 1;
    const expected: string = "1,332";
    expect(exchangeEurToKrw(basePrice, +euro)).toBe(expected);
  });

  test("10유로를 환전 할 때", () => {
    const basePrice: number = 1332;
    const euro: number = 10;
    const expected: string = "13,320";
    expect(exchangeEurToKrw(basePrice, +euro)).toBe(expected);
  });

  test("100유로를 환전 할 때", () => {
    const basePrice: number = 1332;
    const euro: number = 100;
    const expected: string = "133,200";
    expect(exchangeEurToKrw(basePrice, +euro)).toBe(expected);
  });
});
