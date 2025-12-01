"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

export const LandingImages = ({
  firstImage = "/3.webp",
  secondImage = "/4.webp",
}: {
  firstImage?: string;
  secondImage?: string;
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 mask-t-from-10% w-full h-full"></div>
      <div className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full perspective-distant pt-20 lg:pl-20 translate-x-20">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="perspective-[4000px]"
        >
          <Image
            src={secondImage}
            alt="Hero"
            height={1080}
            width={1920}
            draggable={false}
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
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="perspective-[4000px]  translate-x-20 -translate-y-10 md:-translate-y-20 lg:-translate-y-40"
        >
          <Image
            src={firstImage}
            alt="Hero"
            height={1080}
            width={1920}
            draggable={false}
            className={cn(
              "absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl select-none object-cover pointer-events-none transform-3d"
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 md:h-100 w-full mask-t-from-10% bg-background z-50"></div>
    </div>
  );
};
