import React from 'react';
import Input from '../Common/Input';
import styled from 'styled-components';

interface EuroConverterFormProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  euroInput: number;
  krwValue: string;
}

const StyledEuroConverterForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--size-500);
  font-weight: bold;

  div {
    padding: var(--size-300);
  }

  @media screen and (max-width: 768px) {
    width: 95vw;
    flex-direction: column;
  }
`;

function EuroConverterForm({ onInputChange, euroInput, krwValue }: EuroConverterFormProps) {
  return (
    <StyledEuroConverterForm>
      <Input
        name="euro-input"
        label="EUR (유로)"
        type="number"
        width={300}
        onChange={onInputChange}
        value={euroInput.toString()}
      />
      <div>→</div>
      <Input name="krw-input" label="KRW (원)" disabled value={krwValue} width={300} />
    </StyledEuroConverterForm>
  );
}

export default EuroConverterForm;
