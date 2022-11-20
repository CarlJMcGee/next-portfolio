import { Group } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import github from "./assets/GitHub-Mark-Light-64px.png";
import linkedIn from "./assets/In-White-48@2x.png";

export default function Foot() {
  return (
    <motion.div className="fixed bottom-0 my-10 w-full">
      <Group position="center">
        <p className="text-center text-lg text-white">Carl McGee 2022</p>
        <a href="https://github.com/CarlJMcGee">
          <Image src={github.src} alt="github logo" width={30} height={30} />
        </a>
        <a href="https://www.linkedin.com/in/carl-mcgee-3b9648a0/">
          <Image
            src={linkedIn.src}
            alt="linked in logo"
            width={30}
            height={30}
          />
        </a>
      </Group>
    </motion.div>
  );
}
