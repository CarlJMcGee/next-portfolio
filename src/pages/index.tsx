import { type NextPage } from "next";
import Head from "next/head";

import Bio from "../components/Bio";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carl McGee</title>
        <meta name="description" content="Portfolio of Carl McGee" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Bio />
      </main>
    </>
  );
};

export default Home;
