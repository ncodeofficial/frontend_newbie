import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color: var(--color-0);
  border-radius: var(--size-400);

  label {
    font-size: var(--size-500);
    font-weight: bold;
    color: var(--color-700);
    text-align: right;
  }

  input {
    outline: none;
    border: 1px solid var(--color-300);
    text-align: right;
    font-size: var(--size-500);
    margin-top: var(--size-300);
  }
`;

function Input({ name, label, ...inputProps }: InputProps) {
  return (
    <StyledInputWrapper>
      <label htmlFor={name}>{label}</label>
      <input {...inputProps} id={name} />
    </StyledInputWrapper>
  );
}

export default Input;
