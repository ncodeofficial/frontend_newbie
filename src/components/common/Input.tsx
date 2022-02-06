import React from 'react';
import styled from 'styled-components';

const BasicInput = styled.input`
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export default function Input({ ...props }) {
  return <BasicInput {...props} />;
}
