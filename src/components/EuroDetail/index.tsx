import React, { useMemo } from 'react';
import { EuroInfo } from 'apis/Euro';
import styled from 'styled-components';
import EuroUtils from 'utils/euroUtils';
import EuroBasicInfo from './EuroBasicInfo';
import EuroExchangeInfo from './EuroExchangeInfo';

interface EuroDetailProps {
  euroInfo: EuroInfo;
}

const StyledEuroDetail = styled.div`
  width: 100%;
  background-color: var(--color-0);
  padding: var(--size-400);
  border-radius: var(--size-400);
`;

function EuroDetail({ euroInfo }: EuroDetailProps) {
  const { basePrice, openingPrice, changePrice } = euroInfo;

  const readableBasePrice = useMemo(() => {
    return EuroUtils.getReadablePrice(basePrice);
  }, [basePrice]);

  const isExchangeRateRised = useMemo(() => {
    return EuroUtils.isExchangeRateRised(basePrice, openingPrice);
  }, [basePrice, openingPrice]);

  const changePercent = useMemo(() => {
    return EuroUtils.getChangePercentage(basePrice, changePrice);
  }, [basePrice, changePrice]);

  return (
    <StyledEuroDetail>
      <EuroBasicInfo
        changePrice={changePrice}
        changePercent={changePercent}
        readableBasePrice={readableBasePrice}
        isExchangeRateRised={isExchangeRateRised}
      />
      <EuroExchangeInfo
        cashBuyingPrice={euroInfo.cashBuyingPrice}
        cashSellingPrice={euroInfo.cashSellingPrice}
        ttBuyingPrice={euroInfo.ttBuyingPrice}
        ttSellingPrice={euroInfo.ttSellingPrice}
      />
    </StyledEuroDetail>
  );
}

export default EuroDetail;
