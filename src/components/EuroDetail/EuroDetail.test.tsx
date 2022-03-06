import React from 'react';
import { render } from '@testing-library/react';
import { mockEuroInfo } from '../../mocks';
import EuroDetail from './index';

describe('<EuroDetail />', () => {
  const target = render(<EuroDetail euroInfo={mockEuroInfo} />);
  const { getByText } = target;

  it('환율 기준, 1유로 기준 원화, 환율 변동 텍스트를 가지고 있다.', () => {
    getByText('환율 기준');
    getByText('1 EURO → 대한민국 64,689KRW');
    getByText('▲ 94403KRW (145.93362%)');
  });

  it('살 때, 팔 때, 보낼 때, 받을 때 텍스트와 각각의 값을 가지고 있다.', () => {
    getByText('살 때');
    getByText('팔 때');
    getByText('보낼 때');
    getByText('받을 때');
    getByText('53,377');
    getByText('49,842');
    getByText('78,888');
    getByText('59,725');
  });

  it('환율이 상승되었을 때, 환율 변동 텍스트의 색상은 빨간 색이다.', () => {
    const fluctuationInfo = getByText('▲ 94403KRW (145.93362%)');
    fluctuationInfo.style.color = '#DA3F3A';
  });
});
