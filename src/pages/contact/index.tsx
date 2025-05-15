import { motion } from "framer-motion";
import type { NextPage } from "next";
import { Button } from "../../components/Button";

const ContactPage: NextPage = () => {
  const contactContainer = {
    hidden: {
      opacity: "0%",
    },
    show: {
      opacity: "100%",
      transition: {
        delay: 0.4,
        duration: 0.5,
        delayChildren: 0.7,
        staggerChildren: 0.7,
      },
    },
  };
  const contactItems = {
    hidden: {
      opacity: "0%",
      x: -200,
      scale: "100%",
    },
    show: {
      opacity: "100%",
      x: 0,
    },
  };

  return (
    <main>
      <br />
      <br />
      <motion.h2
        variants={contactContainer}
        initial="hidden"
        animate="show"
        className="m-3 text-center text-4xl text-white"
      >
        If you want to get a hold of me...
      </motion.h2>
      <motion.div
        variants={contactContainer}
        initial="hidden"
        animate="show"
        className="m-4 flex flex-col justify-center gap-10 text-xl md:flex-row"
      >
        <motion.h3
          variants={contactItems}
          className="text-white"
          whileHover={{
            scale: "120%",
            transition: {
              type: "tween",
              duration: 0.25,
            },
          }}
        >
          &lt;Email me at{" "}
          <a
            className="text-blue-400 hover:text-turquoise-light"
            href="mailto:Carl.Jack.McGee@gmail.com"
          >
            Carl.Jack.McGee@gmail.com
          </a>
          /&gt;
        </motion.h3>
        <motion.h3
          variants={contactItems}
          className="text-white"
          whileHover={{
            scale: "120%",
            transition: {
              type: "tween",
              duration: 0.25,
            },
          }}
        >
          &lt;Message me on{" "}
          <a
            className="text-blue-400 hover:text-turquoise-light"
            href="https://www.linkedin.com/in/carl-mcgee-3b9648a0/"
          >
            LinkedIn
          </a>
          /&gt;
        </motion.h3>
        <motion.h3
          variants={contactItems}
          className="text-white"
          whileHover={{
            scale: "120%",
            transition: {
              type: "tween",
              duration: 0.25,
            },
          }}
        >
          &lt;Post an issue at my{" "}
          <a
            className="text-blue-400 hover:text-turquoise-light"
            href="https://github.com/CarlJMcGee"
          >
            Github
          </a>
          /&gt;
        </motion.h3>
      </motion.div>

      <br />
      <br />

      <motion.h2
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: "100%",
          y: 0,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 2.5,
        }}
        className="m-3 text-center text-4xl text-white"
      >
        Take a look at my resume...
      </motion.h2>
      <div className="flex justify-center">
        <motion.a
          initial={{
            scale: 0,
          }}
          animate={{
            scale: "100%",
          }}
          transition={{
            type: "spring",
            bounce: 0.7,
            delay: 2.7,
          }}
          href={"./assets/Carl McGee - Resume.pdf"}
          download="Carl McGee - Resume"
        >
          <Button hover="hover:bg-turquoise-light" classname="py-2">
            Resume
          </Button>
        </motion.a>
      </div>

      <br />
      <br />

      <motion.h2
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: "100%",
          y: 0,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 2.8,
        }}
        className="m-3 text-center text-5xl text-white"
      >
        I hope to hear from you soon!
      </motion.h2>
    </main>
  );
};

export default ContactPage;
