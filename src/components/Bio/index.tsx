import { motion } from "framer-motion";
import { Image } from "@mantine/core/";
import * as React from "react";
import headShot from "./assets/Headshot.jpg";

export default function Bio() {
  return (
    <motion.div
      className="m-10 flex flex-col p-2 align-middle md:flex-row"
      initial={{
        x: -50,
        opacity: "0%",
      }}
      animate={{
        x: 0,
        opacity: "100%",
      }}
      transition={{
        type: "tween",
        duration: 0.8,
      }}
    >
      <Image
        src={headShot.src}
        alt="Carl McGee headshot"
        width={300}
        fit="contain"
        withPlaceholder
        styles={() => ({
          root: {
            display: "flex",
            justifyContent: "center",
          },
          image: {
            borderRadius: 999,
          },
        })}
      />
      <p className="m-4 flex-1 text-lg text-white">
        <span className="text-3xl">Adaptable Software Engineer</span>
        experienced in developing, testing, and maintaining software
        applications. Strong grasp of coding fundamentals and debugging
        processes combined with proactive problem-solving, root-cause analysis
        abilities. Proven contributor in collaborative Agile environments,
        delivering high-quality solutions that drive business objectives.
        <br />
        <br />
        Detailed oriented and passionate about learning new technologies, I am
        experienced working with web technologies like React and Springboot as
        well as modern CI/CD pipelines like Jenkins, Urban Code Deploy, and
        Harness. I have a strong familiarity of Agile methodologies and have
        experience working in fast-paced, highly regulated environments.
        <br />
        <br />
        My background using donor management systems working in blood collection
        informs my decisions in creating positive experiences when using my web
        apps. When in the public health field, the end user should not have to
        think about the software they&apos;re using as they work with donors and
        hospitals. My main objective in creating any application is to have the
        users think about the app as little as possible with clean and clear UI,
        responsive interfaces, and intuitive UX.
      </p>
    </motion.div>
  );
}
