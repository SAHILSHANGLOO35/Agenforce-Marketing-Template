"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

export const LandingImages = () => {
  return (
    <div className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full perspective-distant pt-20 lg:pl-20">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="perspective-[4000px]"
      >
        <Image
          src="/4.webp"
          alt="Hero"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl object-cover"
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="perspective-[4000px] translate-x-20 -translate-y-10 md:-translate-y-20 lg:-translate-y-40"
      >
        <Image
          src="/3.webp"
          alt="Hero"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl select-none pointer-events-none"
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};
