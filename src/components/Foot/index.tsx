import { Group } from "@mantine/core";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Image from "next/image";
import * as React from "react";
import github from "./assets/GitHub-Mark-Light-64px.png";
import linkedIn from "./assets/In-White-48@2x.png";

export default function Foot() {
  const loginHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (e.altKey) {
      signIn();
    }
  };

  return (
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 100,
      }}
      transition={{
        type: "tween",
        duration: 0.8,
      }}
      className="my-10 w-full"
    >
      <Group position="center">
        <p className="text-center text-lg text-white" onClick={loginHandler}>
          Carl McGee 2022
        </p>
        <motion.a
          initial={{
            scale: "0%",
          }}
          animate={{
            scale: "100%",
          }}
          transition={{
            type: "spring",
            delay: 1,
          }}
          whileHover={{
            scale: "150%",
            transition: {
              type: "spring",
              bounce: 0.8,
              delay: 0,
            },
          }}
          href="https://github.com/CarlJMcGee"
        >
          <Image src={github.src} alt="github logo" width={30} height={30} />
        </motion.a>
        <motion.a
          initial={{
            scale: "0%",
          }}
          animate={{
            scale: "100%",
          }}
          transition={{
            type: "spring",
            delay: 1.3,
          }}
          whileHover={{
            scale: "150%",
            transition: {
              type: "spring",
              bounce: 0.8,
              delay: 0,
            },
          }}
          href="https://www.linkedin.com/in/carl-mcgee-3b9648a0/"
        >
          <Image
            src={linkedIn.src}
            alt="linked in logo"
            width={30}
            height={30}
          />
        </motion.a>
      </Group>
    </motion.div>
  );
}
