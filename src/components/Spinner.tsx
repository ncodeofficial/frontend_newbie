import * as React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Container>
      <BeatLoader />
    </Container>
  );
};

export default Spinner;

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 100px auto;
`;
