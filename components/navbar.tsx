"use client";

import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

const navlinks = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Product",
    href: "/product",
  },
  {
    title: "Socials",
    href: "/socials",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 font-display">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden px-4 py-2 justify-between items-center relative">
      <Logo />
      <button onClick={() => setOpen(!open)}>
        <IconLayoutSidebar className="size-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(15px)",
              background: "transparent",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
              background: "rgba(255,255,255,0.5)",
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 h-full w-full z-50 px-4 py-2"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={() => setOpen(!open)}
                className="absolute right-4 top-2 cursor-pointer"
              >
                <IconX />
              </button>
            </div>

            <div className="flex flex-col gap-6 my-10">
              {navlinks.map((item, index) => (
                <motion.div
                  key={index + item.title}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.1,
                  }}
                >
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-xl text-neutral-600 dark:text-shadow-neutral-400 font-medium"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute right-4 bottom-1">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="flex gap-5"
              >
                <Link
                  href="/login"
                  className="text-sm px-4 py-2 rounded-md text-neutral-600 dark:text-neutral-400 font-medium"
                >
                  Login
                </Link>
                <Button>Signup</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="py-4 px-4 items-center justify-between hidden md:flex">
      <Logo />
      <div className="flex items-center gap-4">
        {navlinks.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="text-neutral-600 text-sm dark:text-neutral-400 font-medium"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm px-4 py-2 rounded-md text-neutral-600 dark:text-neutral-400 font-medium"
        >
          Login
        </Link>
        <Button>Signup</Button>
      </div>
    </Container>
  );
};

export const IconLayoutSidebar = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="24"
      // height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M9 4l0 16" />
    </svg>
  );
};
