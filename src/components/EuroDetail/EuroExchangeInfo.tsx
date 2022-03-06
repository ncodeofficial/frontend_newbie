import React from 'react';
import styled from 'styled-components';
import EuroUtils from 'utils/euroUtils';
import Text from '../Common/Text';

interface EuroExchangeInfoProps {
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}

const StyledEuroExchangeInfo = styled.div`
  width: 100%;
  margin-top: var(--size-400);
`;

const StyledInfoTable = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--size-300);
  border-bottom: 1px solid var(--color-200);
`;

function EuroExchangeInfo({
  cashBuyingPrice,
  cashSellingPrice,
  ttBuyingPrice,
  ttSellingPrice,
}: EuroExchangeInfoProps) {
  const tableInfos = [
    { head: '살 때', content: cashBuyingPrice },
    { head: '팔 때', content: cashSellingPrice },
    { head: '보낼 때', content: ttSellingPrice },
    { head: '받을 때', content: ttBuyingPrice },
  ];

  return (
    <StyledEuroExchangeInfo>
      {tableInfos.map((info) => (
        <StyledInfoTable key={info.head}>
          <Text color="600">{info.head}</Text>
          <Text textAlign="end" color="700" isBold>
            {EuroUtils.getReadablePrice(info.content)}
          </Text>
        </StyledInfoTable>
      ))}
    </StyledEuroExchangeInfo>
  );
}

export default EuroExchangeInfo;
