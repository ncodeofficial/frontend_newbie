import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
    to{
      transform: rotate(1turn);
    }
  `;

const SpinnerBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid #dddddd;
  border-top-color: #009579;
  border-radius: 50%;
  animation: ${loading} 1s ease infinite;
`;

export default function LoadingSpinner() {
  return (
    <SpinnerBackGround>
      <Spinner />
    </SpinnerBackGround>
  );
}
