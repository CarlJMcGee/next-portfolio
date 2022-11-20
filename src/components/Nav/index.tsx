import * as React from "react";
import { LinkButton } from "../Button";

export default function Nav() {
  return (
    <div className="flex flex-row justify-between bg-gradient-to-r from-blue-light to-turquoise-dark shadow-xl">
      <h1 className="m-3 text-6xl font-bold text-white">Carl McGee</h1>
      <div className="m-5 flex flex-row justify-center">
        <LinkButton href="/">Home</LinkButton>
        <LinkButton href="/projects">Projects</LinkButton>
        <LinkButton href="/contact">Contact</LinkButton>
        <LinkButton href="/resume">Resume</LinkButton>
      </div>
    </div>
  );
}
