import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body className="min-h-screen min-w-full bg-gradient-to-br from-purple-light to-purple-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
