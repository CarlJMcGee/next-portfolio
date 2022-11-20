import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import * as React from "react";

export function Button({ children }: React.PropsWithChildren) {
  return (
    <motion.button
      className="mx-3 rounded-md bg-blue-dark px-4 hover:bg-purple-dark"
      initial={{
        scale: "100%",
      }}
      whileHover={{
        scale: "110%",
        transition: {
          type: "spring",
          bounce: 0.8,
        },
      }}
    >
      {children}
    </motion.button>
  );
}

export interface ILinkButtonProps extends React.PropsWithChildren {
  href: string;
}

export function LinkButton({ href, children }: ILinkButtonProps) {
  const router = useRouter();

  return (
    <Link href={href}>
      <motion.button
        className={`mx-3 h-full rounded-md px-5 ${
          router.pathname === href
            ? "bg-purple-300 text-black"
            : "bg-blue-dark text-white shadow-xl hover:bg-purple-dark"
        }`}
        initial={{
          scale: "100%",
        }}
        whileHover={{
          scale: `${router.pathname !== href ? "110%" : "100%"}`,
          transition: {
            type: "spring",
            bounce: 0.8,
          },
        }}
      >
        {children}
      </motion.button>
    </Link>
  );
}
