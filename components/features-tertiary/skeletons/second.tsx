"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { LogoIcon } from "@/components/logo";

export const SkeletonTwo = () => {
  return (
    <div className="flex-1 gap-2 rounded-t-3xl w-full h-full px-8 flex-col items-center justify-center space-y-4">
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        <Item />
        <Item src="/7.webp" />
        <Item src="/8.webp" />
        <Item />
      </div>

      <div className="grid grid-cols-5 gap-1 justify-center w-full mx-auto">
        <Item />
        <Item src="/9.webp" />
        <Item containerClassName="from-black/50 via-transparent to-black/50">
          <div className="h-full w-full flex items-center justify-center bg-white rounded-[12px] p-2 md:p-0">
            <LogoIcon className="size-12 dark:text-black" />
          </div>
        </Item>
        <Item src="/10.webp" />
        <Item />
      </div>

      <div className="grid grid-cols-4 gap-1 justify-center max-w-md mx-auto">
        <Item />
        <Item src="/11.webp" />
        <Item src="/12.webp" />
        <Item />
      </div>
    </div>
  );
};

const Item = ({
  children,
  className,
  src = "",
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full justify-self-center aspect-square rounded-xl border border-dashed border-neutral-200 dark:border-neutral-600 relative p-0.5 overflow-hidden",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-neutral-100)]/10",
        className
      )}
    >
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 0.8 + 0.2,
          ease: "easeInOut",
        }}
        className={cn(
          "flex items-center justify-center w-full h-full  relative rounded-[12px] p-px z-10",
          src && "bg-linear-to-br from-blue-500 via-transparent to-blue-500",
          containerClassName
        )}
      >
        {children ?? (
          <>
            {src && (
              <Image
                src={src}
                alt="item"
                height={120}
                width={120}
                className="object-cover aspect-square object-center rounded-[12px] relative z-20"
                draggable="false"
              />
            )}
          </>
        )}
      </motion.div>
      <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[5px_5px] bg-fixed"></div>
    </div>
  );
};
