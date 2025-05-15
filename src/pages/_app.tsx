import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import Layout from "../components/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider withGlobalStyles>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
