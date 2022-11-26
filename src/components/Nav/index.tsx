import { ActionIcon, Collapse } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { LinkButton } from "../Button";
import { IconMenu2 } from "@tabler/icons";
import { motion } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const mobile = useMediaQuery("(max-width: 640px)", true, {
    getInitialValueInEffect: false,
  });

  return (
    <motion.div
      initial={{
        y: -150,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        type: "tween",
        duration: 0.8,
      }}
      className="flex w-full flex-col justify-center bg-gradient-to-tr from-blue-light to-purple-dark shadow-xl md:justify-between lg:flex-row"
    >
      <h1 className="m-3 text-center text-6xl font-bold text-white lg:text-left">
        Carl McGee
      </h1>
      {mobile ? (
        <>
          <Collapse in={open} className="mx-auto w-full md:mx-0">
            <div className="m-5 flex flex-col justify-center sm:flex-row">
              <LinkButton href="/" onClick={() => setOpen(false)}>
                Home
              </LinkButton>
              <LinkButton href="/projects" onClick={() => setOpen(false)}>
                Projects
              </LinkButton>
              <LinkButton href="/contact" onClick={() => setOpen(false)}>
                Contact
              </LinkButton>
            </div>
          </Collapse>
          <ActionIcon
            color={"grape"}
            size={"xl"}
            variant={"subtle"}
            className="mx-auto"
          >
            <IconMenu2 size={75} onClick={() => setOpen(!open)} />
          </ActionIcon>
        </>
      ) : (
        <div className="m-5 flex flex-col justify-center sm:flex-row">
          <LinkButton href="/">Home</LinkButton>
          <LinkButton href="/projects">Projects</LinkButton>
          <LinkButton href="/contact">Contact</LinkButton>
        </div>
      )}
    </motion.div>
  );
}
