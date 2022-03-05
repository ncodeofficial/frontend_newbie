import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import EuroUtils from 'utils/euroUtils';
import EuroConverterForm from './EuroConverterForm';
import styled from 'styled-components';

const StyledEuroConverter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--size-400);
`;

interface EuroConverterProps {
  basePrice: number;
}

function EuroConverter({ basePrice }: EuroConverterProps) {
  const [euroInput, setEuroInput] = useState<number>(0);

  const krwValue = useMemo(() => {
    const value = EuroUtils.exchangeEurToKrw(Number(euroInput), basePrice);
    return EuroUtils.getReadablePrice(value);
  }, [basePrice, euroInput]);

  const handleEuroInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEuroInput(Number(e.target.value));
  };

  return (
    <StyledEuroConverter>
      <EuroConverterForm
        krwValue={krwValue}
        onInputChange={handleEuroInputChange}
        euroInput={euroInput}
      />
    </StyledEuroConverter>
  );
}

export default EuroConverter;
