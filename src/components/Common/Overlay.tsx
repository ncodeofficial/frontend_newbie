import React from 'react';
import styled from 'styled-components';

interface OverlayProps {
  message?: string;
}

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 7;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay__message {
    background-color: black;
    padding: var(--size-300);
    color: var(--color-red);
    border-radius: var(--size-300);
  }
`;

function Overlay({ message = '일시적인 문제가 발생했어요. 재시도해주세요 :(' }: OverlayProps) {
  return (
    <StyledOverlay>
      <div className="overlay__message">{message}</div>
    </StyledOverlay>
  );
}

export default Overlay;
