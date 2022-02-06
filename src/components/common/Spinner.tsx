import React, { ReactElement } from "react";
import styled from "styled-components";
import { Spin, Col } from "antd";
import { SpinSize } from "antd/lib/spin";
import { LoadingOutlined } from "@ant-design/icons";

interface ISpinnerProps {
  tip?: string;
  size?: SpinSize;
  delay?: number;
  style?: React.CSSProperties;
  mask?: boolean;
}

const StyledSpinnerWrapper = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.blackLight};
  }

  span {
    margin: 20px;
  }

  .ant-spin-text {
    color: ${({ theme }) => theme.colors.blackLight};
    text-align: center;
  }
`;

function Spinner(props: ISpinnerProps): ReactElement {
  const { tip, size, delay } = props;

  return (
    <StyledSpinnerWrapper>
      <Col>
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 210 }} spin />}
          delay={delay}
          tip={tip}
          size={size}
        />
      </Col>
    </StyledSpinnerWrapper>
  );
}

Spinner.defaultProps = {
  tip: "환율정보를 불러오는 중입니다.",
  size: "large",
  delay: 0,
};

export default Spinner;
