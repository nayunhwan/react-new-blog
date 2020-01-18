import React from "react";
import styled from "styled-components";
import oc from "open-color";

type Props = {};

const Container = styled.div`
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

const Name = styled.div`
  font-size: 14px;
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
