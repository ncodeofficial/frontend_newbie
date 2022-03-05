import EuroUtils from './euroUtils';

describe('EuroUtils 의', () => {
  describe('exchangeEurToKrw 메서드는', () => {
    it('krw * eurBasePrice를 반환한다', () => {
      expect(EuroUtils.exchangeEurToKrw(1, 1300)).toBe(1300);
      expect(EuroUtils.exchangeEurToKrw(1, 0)).toBe(0);
      expect(EuroUtils.exchangeEurToKrw(0, 1300)).toBe(0);
    });
  });

  describe('getReadablePrice 메서드는', () => {
    it('금액의 세자리 마다 콤마를 추가하여 문자열을 반환한다', () => {
      expect(EuroUtils.getReadablePrice(1300)).toBe('1,300');
      expect(EuroUtils.getReadablePrice(1300.01, true)).toBe('1,300.01');
    });
  });

  describe('isExchangeRateRised 메서드는', () => {
    it('openingPrice를 기준으로 basePrice의 상승 여부를 검증하여 반환한다', () => {
      expect(EuroUtils.isExchangeRateRised(1300, 1200)).toBe(true);
      expect(EuroUtils.isExchangeRateRised(1200, 1300)).toBe(false);
    });
  });

  describe('getChangePercentage 메서드는', () => {
    it('basePrice를 기준으로 changePrice의 변화율을 소수점(5)까지 문자열로 반환한다', () => {
      expect(EuroUtils.getChangePercentage(1000, 1300)).toBe('130.00000');
      expect(EuroUtils.getChangePercentage(1000, 900)).toBe('90.00000');
    });
  });
});
