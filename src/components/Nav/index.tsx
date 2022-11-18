import { Button } from "@mantine/core";
import * as React from "react";

export interface INavProps {}

export default function Nav(props: INavProps) {
  return (
    <div className="flex flex-row justify-between bg-gradient-to-r from-blue-light to-turquoise-dark shadow-xl">
      <h1 className="m-3 text-6xl font-bold text-white">Carl McGee</h1>
      <div className="m-5 flex flex-row justify-center">
        <Button>Home</Button>
        <Button>Projects</Button>
        <Button>Contact</Button>
        <Button>Resume</Button>
      </div>
    </div>
  );
}
