import React from 'react';
import styled from 'styled-components';

interface DotLoaderProps {
  customWidth?: number;
  customHeight?: number;
}

const StyledDotLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 44px;
  height: 20px;

  div {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-800);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 11px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 11px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 19px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 27px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(8px, 0);
    }
  }
`;

const StyledDotLoaderWrapper = styled.div<DotLoaderProps>`
  width: ${({ customWidth }) => (customWidth ? `${customWidth}px` : '100%')};
  height: ${({ customHeight }) => (customHeight ? `${customHeight}px` : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-0);
  border-radius: var(--size-400);
`;

function DotLoader({ customHeight }: DotLoaderProps) {
  return (
    <StyledDotLoaderWrapper customHeight={customHeight}>
      <StyledDotLoader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyledDotLoader>
    </StyledDotLoaderWrapper>
  );
}

export default DotLoader;
