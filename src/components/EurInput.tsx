import React from 'react';
import Input from '../components/common/Input';

interface EurInputProps {
  onChangeEurToKrw: (e: React.ChangeEvent<HTMLInputElement>) => void;
  krwValue: string;
  inputValue: string;
}
export default function EurInput({ onChangeEurToKrw, inputValue, krwValue }: EurInputProps) {
  return (
    <div>
      <Input type="number" step="0.01" onChange={onChangeEurToKrw} value={inputValue} /> 유로 ▶︎ <Input value={krwValue} disabled /> 원
    </div>
  );
}
