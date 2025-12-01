"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { GoogleSheetsIcon, HubspotIcon, SalesforceIcon } from "@/icons";
import { cn } from "@/lib/utils";
import {
  IconClipboardData,
  IconFeatherFilled,
  IconFilter2Search,
  IconPointerUp,
} from "@tabler/icons-react";
export const SkeletonFour = () => {
  const items = [
    {
      title: "Brand & Style",
      icon: <IconClipboardData className="size-4 text-blue-500" />,
      className: "bg-blue-100 border border-blue-200",
      description:
        "Maintain consistent tone, visuals, and messaging across every customer interaction.",
    },
    {
      title: "Compliance & Policy",
      icon: <GoogleSheetsIcon className="size-4" />,
      className: "bg-green-100 border border-green-200",
      description:
        "Ensure every response aligns with internal guidelines and meets regulatory standards.",
    },
    {
      title: "Content Safety Filters",
      icon: <IconFeatherFilled className="size-4 text-blue-500" />,
      className: "bg-blue-100 border border-blue-200",
      description:
        "Automatically detect and block harmful, sensitive, or restricted content in real time.",
    },
    {
      title: "Approval Triggers",
      icon: <IconPointerUp className="size-4 text-neutral-500" />,
      className: "bg-neutral-100 border border-neutral-200",
      description:
        "Route outputs to managers or reviewers whenever key rules or thresholds are met.",
    },
    {
      title: "Output Quality Checks",
      icon: <IconFilter2Search className="size-4 text-indigo-500" />,
      className: "bg-indigo-100 border border-indigo-200",
      description:
        "Review responses for clarity, accuracy, tone, and completeness before they reach users.",
    },
  ];

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentIndexRef = useRef(0);
  const [selected, setSelected] = useState(items[0]);

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % items.length;
      setSelected(items[currentIndexRef.current]);
    }, 2000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <div>
      <div
        className="gap-4 flex max-w-lg mx-auto items-center justify-center flex-wrap mb-4"
        onMouseEnter={stopAutoPlay} // pause when hovering buttons area
        onMouseLeave={() => startAutoPlay()}
      >
        {items.map((item, index) => (
          <button
            key={item.title}
            onClick={() => {
              // keep ref in sync so autoplay doesn't jump
              currentIndexRef.current = index;
              setSelected(item);
              // restart timer so user has time to read
              stopAutoPlay();
              startAutoPlay();
            }}
            className={cn(
              "px-2 py-1 rounded-sm bg-neutral-100 flex items-center justify-center gap-1 cursor-pointer text-xs active:scale-98 transition duration-200 opacity-50",
              selected.title === item.title && "opacity-100 inset-shadow-sm",
              item.className
            )}
          >
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-200 max-w-[20rem] lg:max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2">
        <Card
          icon={selected.icon}
          title={selected.title}
          description={selected.description}
        />
      </div>
    </div>
  );
};

export const Card = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  variant?: "blue" | "red" | "green";
  title: string;
  description: string;
}) => {
  const tags = [
    { icon: <SalesforceIcon />, title: "Salesforce" },
    { icon: <HubspotIcon />, title: "HubspotIcon" },
    { icon: <GoogleSheetsIcon />, title: "Sheets" },
  ];
  return (
    <motion.div
      key={title}
      className="p-4 shadow-black/10 border border-transparent ring-1 ring-black/10 rounded-2xl bg-white flex flex-col items-start gap-4"
    >
      {" "}
      <div className="flex items-center gap-2">
        {" "}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          className={cn(
            "size-6 rounded-full text-white bg-neutral-200 flex items-center justify-center shrink-0 mt-1"
          )}
        >
          {" "}
          {icon}{" "}
        </motion.div>{" "}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.1, ease: "easeInOut" }}
          className="text-lg font-bold text-neutral-800 shrink-0"
        >
          {" "}
          {title}{" "}
        </motion.p>{" "}
      </div>{" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, ease: "easeInOut" }}
      >
        {" "}
        <p className="text-base font-normal text-neutral-600">
          {" "}
          Tone Guidelines{" "}
        </p>{" "}
        <p className="text-sm font-normal text-neutral-600 rounded-sm border border-dashed border-neutral-200 dark:border-neutral-800 px-2 py-1 mt-2 mb-4">
          {" "}
          {description}{" "}
        </p>{" "}
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {" "}
          {tags.map((tag, index) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, ease: "easeInOut" }}
              key={index}
            >
              {" "}
              <Tag
                key={tag.title + index}
                icon={tag.icon}
                title={tag.title}
              />{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </motion.div>{" "}
    </motion.div>
  );
};

const Tag = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="flex items-center gap-2 px-1 py-0.5 border border-neutral-200 rounded-sm text-sm">
      {" "}
      {icon} <p className="text-xs text-neutral-500">{title}</p>{" "}
    </div>
  );
};
