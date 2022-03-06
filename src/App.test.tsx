import React from 'react';
import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BASE_PATH } from 'apis/base';
import { mockEuroInfo } from 'mocks';

describe('<App />', () => {
  const target = render(<App />);
  const mockFetch = new MockAdapter(axios, { delayResponse: 200 });
  const { getByTestId } = target;
  mockFetch.onGet(`${BASE_PATH}/forex/recent?codes=FRX.KRWEUR`).reply(200, [mockEuroInfo]);

  it('App 랜더링 직후, 유로 정보를 패칭하며 이 때 로딩 UI를 랜더링한다.', async () => {
    await waitForElementToBeRemoved(() => getByTestId('dot-loader'));
  });

  it('유로 정보 패칭이 완료되면 유로 디테일, 컨버터를 랜더링한다.', async () => {
    await waitFor(() => getByTestId('euro-detail'));
    await waitFor(() => getByTestId('euro-converter'));
  });
});
