import React from "react";
import styled from "styled-components";
import oc from "open-color";

type Props = {};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  /* font-family: "Calistoga"; */
  font-weight: 900;
  color: ${oc.gray[8]};
`;

export const GNB: React.FC<Props> = () => {
  return (
    <Container>
      <Name>NAYUNHWAN</Name>
      werw
    </Container>
  );
};
