import * as React from "react";
import Foot from "../Foot";
import Nav from "../Nav";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Nav />
      {children}
      <Foot />
    </>
  );
}
