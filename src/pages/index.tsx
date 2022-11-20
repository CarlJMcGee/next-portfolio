import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import Nav from "../components/Nav";
import Bio from "../components/Bio";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Carl McGee</title>
        <meta name="description" content="Generated by create-t3-app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-purple-light to-purple-dark">
        <Nav />
        <Bio />
      </main>
    </>
  );
};

export default Home;
