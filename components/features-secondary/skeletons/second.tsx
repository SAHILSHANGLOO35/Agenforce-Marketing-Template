import { LogoIcon } from "@/components/logo";
import {
  FacebookMeta,
  GoogleSheetsIcon,
  InstagramIcon,
  SlackIcon,
} from "@/icons";
import { cn } from "@/lib/utils";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import React from "react";

export const SkeletonTwo = () => {
  return (
    <div
      className="flex-1 gap-2 rounded-t-3xl w-full h-full flex items-center justify-center inset-x-0 absolute p-2"
      style={{
        transform: "rotateX(20deg) rotateY(20deg) rotateZ(-20deg)",
      }}
    >
      <Circle className="flex items-center justify-center border border-neutral-200 shadow-sm dark:bg-neutral-800/80 dark:border-neutral-700">
        <LogoIcon className="size-10 text-neutral-400" />
        <div className="size-12 flex items-center justify-center bg-white border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:120px] absolute inset-0 m-auto [--orbit-duration:10s]">
          <SlackIcon className="size-8 dark:text-black" />
        </div>
        <div className="size-12 flex items-center justify-center bg-white border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:160px] absolute inset-0 m-auto [--orbit-duration:15s]">
          <FacebookMeta className="size-8" />
        </div>
        <div className="size-12 flex items-center justify-center bg-white border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:200px] absolute inset-0 m-auto [--orbit-duration:20s]">
          <InstagramIcon className="size-8" />
        </div>
        <div className="size-12 flex items-center justify-center bg-white border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:220px] absolute inset-0 m-auto [--orbit-duration:25s]">
          <GoogleSheetsIcon className="size-8" />
        </div>
        <div className="w-72 flex items-center justify-center border border-transparent shadow-black/10 ring-black/10 rounded-sm animate-orbit [--translate-position:250px] absolute inset-0 m-auto [--orbit-duration:30s] ring-0 shadow-none bg-transparent">
          <SkeletonCard
            className="absolute bottom-0 left-12 z-30 max-w-[90%]"
            icon={<IconCircleDashedCheck className="size-4" />}
            title="Campaign Planner"
            description="Creates clear, ready-to-use campaign briefs using product info."
          />
        </div>
      </Circle>

      <Circle className="shadow border border-neutral-100 size-60 bg-neutral-100/80 dark:bg-neutral-800/80 dark:border-neutral-700 z-9"></Circle>

      <Circle className="shadow border border-neutral-100 size-80 bg-neutral-100/60 z-8 dark:bg-neutral-800/80 dark:border-neutral-700"></Circle>

      <Circle className="shadow border border-neutral-100 size-100 bg-neutral-100/40 z-7 dark:bg-neutral-800/80 dark:border-neutral-700"></Circle>

      <Circle className="shadow border border-neutral-100 size-120 bg-neutral-100/20 z-6 dark:bg-neutral-800/80 dark:border-neutral-700"></Circle>
    </div>
  );
};

const Circle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "size-40 bg-white border border-transparent absolute inset-0 m-auto rounded-full z-10",
        className
      )}
    >
      {children}
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[85%] h-fit my-auto bg-neutral-100 dark:bg-neutral-800 mx-auto w-full p-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-sm font-normal text-black dark:text-white">
          {title}
        </p>
        {badge}
      </div>
      <p className="text-sm text-neutral-500 dark:text-shadow-neutral-400 font-normal mt-3">
        {description}
      </p>
    </div>
  );
};
