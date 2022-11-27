import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import * as React from "react";

interface IButtonProps extends React.PropsWithChildren {
  onClick?: (() => any) | (() => void);
  type?: "button" | "submit" | "reset" | undefined;
  classname?: string;
  color?: string;
  hover?: string;
}

export function Button({
  children,
  onClick,
  type,
  classname,
  color = "bg-blue-dark",
  hover = "hover:bg-purple-dark",
}: IButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`mx-3 rounded-md px-4 ${color} ${hover} ${classname}`}
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
  onClick?: (() => any) | (() => void);
  type?: "button" | "submit" | "reset" | undefined;
  classname?: string;
}

export function LinkButton({
  href,
  children,
  onClick,
  type,
  classname,
}: ILinkButtonProps) {
  const router = useRouter();

  return (
    <Link href={href} className="my-2 mx-auto md:m-0">
      <motion.button
        onClick={onClick}
        type={type}
        className={`mx-3 h-full rounded-md px-10 py-3 ${
          router.pathname === href
            ? "bg-purple-300 text-black"
            : "bg-blue-dark text-white shadow-xl hover:bg-purple-dark"
        } ${classname}`}
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
