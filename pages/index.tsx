import React from "react";
import Link from "next/link";
import Head from "next/head";
import "./index.css";

import { GNB } from "../components";

const App = () => {
  return (
    <div>
      <Head>
        <title>My styled page</title>
      </Head>
      <GNB />
      test<Link href="test">test2</Link>
    </div>
  );
};

export default App;
