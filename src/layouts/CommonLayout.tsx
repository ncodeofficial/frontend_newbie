import React from 'react';
import styled from 'styled-components';

const StyledCommonLayout = styled.div`
  width: 768px;
  height: 90vh;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 95vw;
  }
`;

interface CommonLayoutProps {
  children: React.ReactNode;
}

function CommonLayout({ children }: CommonLayoutProps) {
  return <StyledCommonLayout>{children}</StyledCommonLayout>;
}

export default CommonLayout;
