import React from 'react';
import styled from 'styled-components';
import Text from '../Common/Text';

interface EuroBasicInfoProps {
  changePrice: number;
  changePercent: string;
  readableBasePrice: string;
  isExchangeRateRised: boolean;
}

const StyledEuroBasicInfo = styled.div<{ isExchangeRateRised: boolean }>`
  width: 100%;

  .euro__basic-info--highlight {
    color: ${({ isExchangeRateRised }) => `var(--color-${isExchangeRateRised ? 'red' : 'blue'})`};
  }
`;

function EuroBasicInfo({
  changePrice,
  changePercent,
  readableBasePrice,
  isExchangeRateRised,
}: EuroBasicInfoProps) {
  return (
    <StyledEuroBasicInfo isExchangeRateRised={isExchangeRateRised}>
      <Text color="700" fontSize="500" isBold>
        환율 기준
      </Text>
      <Text color="700" fontSize="500" isBold>
        {`1 EURO → 대한민국 ${readableBasePrice}KRW`}
      </Text>
      <Text className="euro__basic-info--highlight">
        {isExchangeRateRised ? '▲' : '▼'} {changePrice}KRW ({changePercent}%)
      </Text>
    </StyledEuroBasicInfo>
  );
}

export default EuroBasicInfo;
