"use client";

import Image from "next/image";
import { motion } from "motion/react";

export const LogoCloud = () => {
  const logos = [
    {
      title: "Open AI",
      src: "/openai.webp",
    },
    {
      title: "Hello Patient",
      src: "/hello-patient.webp",
    },
    {
      title: "Granola",
      src: "/granola.webp",
    },
    {
      title: "Character AI",
      src: "/characterai.png",
    },
    {
      title: "Oracle",
      src: "/oracle.webp",
    },
    {
      title: "Portola",
      src: "/portola.webp",
    },
  ];

  return (
    <section className="pb-10 md:pb-10 pt-10 md:pt-20 lg:pt-32 px-4">
      <h2 className="text-neutral-600 font-medium dark:text-neutral-400 text-lg text-center max-w-xl mx-auto">
        Trusted by modern operators across industries. <br />
        <span className="text-neutral-500 dark:text-neutral-400">
          From pilot to scale without chaos.
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto mt-10">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ y: -10, opacity: 0, filter: "blur(10px)" }}
            whileInView={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <Image
              key={logo.title}
              src={logo.src}
              alt={logo.title}
              width={100}
              height={100}
              className="size-20 object-contain mx-auto dark:invert"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
