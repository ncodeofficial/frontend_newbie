import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const Loading = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
