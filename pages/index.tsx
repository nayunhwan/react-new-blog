import React from "react";
import Link from "next/link";
import Head from "next/head";

import styled from "styled-components";
import "./index.css";

import { GNB } from "../components";

const Container = styled.div`
  width: 900px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <div>
      <Head>
        <title>My styled page</title>
      </Head>
      <GNB />
      <Container>test</Container>
      test<Link href="test">test2</Link>
    </div>
  );
};

export default App;
