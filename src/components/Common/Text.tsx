import React from 'react';
import styled from 'styled-components';

interface StyledTextProps {
  fontSize?: string;
  color?: string;
  customWidth?: number;
  isBold?: boolean;
  textAlign?: 'center' | 'start' | 'end';
}

interface TextProps extends StyledTextProps {
  className?: string;
  children: React.ReactNode;
}

const StyledText = styled.div<StyledTextProps>`
  word-break: break-all;
  text-align: ${({ textAlign }) => textAlign && textAlign};
  width: ${({ customWidth }) => (customWidth ? `${customWidth}px` : '100%')};
  font-size: ${({ fontSize }) => `var(--size-${fontSize})`};
  color: ${({ color }) => `var(--color-${color})`};
  font-weight: ${({ isBold }) => isBold && '700'};
`;

function Text({
  className,
  children,
  fontSize,
  color,
  isBold = false,
  customWidth,
  textAlign = 'start',
}: TextProps) {
  return (
    <StyledText
      className={className}
      fontSize={fontSize}
      color={color}
      isBold={isBold}
      customWidth={customWidth}
      textAlign={textAlign}
    >
      {children}
    </StyledText>
  );
}

export default Text;
