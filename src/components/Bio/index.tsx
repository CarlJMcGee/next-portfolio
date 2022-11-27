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
        styles={(theme) => ({
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
        <span className="text-3xl">I&apos;m a new junior developer</span> fresh
        out of coding bootcamp. I&apos;m leaving a five year career in
        Phlebotomy and blood product donation to persue a career in web
        development and I&apos;m ready to take on new opportunities and
        challenges.
        <br />
        <br />
        I have recently received a Full Stack Web Development certificate from
        the University of Minnesota Coding Bootcamp program. There I gained
        experience working with MVC and Progressive Javascript and Typescript
        web applications in both vanilla JS using Handlebars and single-page
        sites with React and Next.js. I am proficient in using MySQL and
        sequelize, MongoDB and Mongoose, Prisma, tRPC, GraphQL, Express.js
        servers, Next.js with and without a server, Next Auth, Tailwind,
        Bootstrap and Bulma CSS libraries, server session store and client JSON
        Web Tokens, and Jest unit testing.
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
