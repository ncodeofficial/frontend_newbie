import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EuroConverter from './index';

describe('<EuroConverterForm />', () => {
  const target = render(<EuroConverter basePrice={1300} />);
  const { getByLabelText, getByText, getByPlaceholderText } = target;
  it('input, label를 각각 2개 가지고 있다.', () => {
    getByLabelText('EUR (유로)');
    getByLabelText('KRW (원)');
    getByPlaceholderText('유로');
    getByPlaceholderText('원');
    getByText('→');
  });

  it('유로 입력값에 따라 값이 변경된다.', () => {
    const euroInput = getByPlaceholderText('유로');
    fireEvent.change(euroInput, {
      target: {
        value: '1',
      },
    });
    expect(euroInput).toHaveAttribute('value', '1');
  });

  it('유로 입력값에 따라 환전된 krw 값이 변경된다.', () => {
    const euroInput = getByPlaceholderText('유로');
    const krwInput = getByPlaceholderText('원');
    fireEvent.change(euroInput, {
      target: {
        value: '1',
      },
    });
    expect(euroInput).toHaveAttribute('value', '1');
    expect(krwInput).toHaveAttribute('value', '1,300');
  });
});
