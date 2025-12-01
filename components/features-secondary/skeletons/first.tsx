"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  FileIcon,
  GoogleSheetsIcon,
  HubspotIcon,
  HumanIcon,
  SalesforceIcon,
  SettingsIcon,
} from "@/icons";
import { cn } from "@/lib/utils";

interface Items {
  icon: React.ReactNode;
  variant: string;
  title: string;
  description: string;
}

export const SkeletonOne = () => {
  const items = [
    {
      icon: <FileIcon className="size-4" />,
      variant: "blue",
      title: "Connect Data",
      description:
        "Link CRMs, helpdesks, and APIs to give agents secure, role-based access.",
    },
    {
      icon: <HumanIcon className="size-4" />,
      variant: "red",
      title: "Human-in-the-Loop",
      description:
        "Add reviews, approvals and escalations without slowing work.",
    },
    {
      icon: <SettingsIcon className="size-4" />,
      variant: "green",
      title: "Define Processing Logic",
      description:
        "Create workflows, decision points, and conditional actions for each task.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);

  const [activeCards, setActiveCards] = useState<Items[] | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveCards((prev) => {
        if (!prev) {
          return [items[0]];
        }
        if (prev.length >= items.length) {
          clearInterval(interval);
          return prev;
        }
        return [items[prev.length], ...prev];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <div
      ref={ref}
      className="flex-1 flex flex-col gap-2 rounded-t-3xl max-w-sm mx-auto w-full h-full bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-800 border border-neutral-200 inset-x-0 absolute p-2"
    >
      {activeCards &&
        activeCards.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            variant={item.variant}
            title={item.title}
            description={item.description}
          />
        ))}
    </div>
  );
};

export const Card = ({
  icon,
  variant,
  title,
  description,
}: {
  icon: React.ReactNode;
  variant?: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        scale: 0.8,
        y: -10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 300,
          damping: 25,
        },
        opacity: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.3, ease: "easeOut" },
      }}
      className="p-4 shadow-black/10 border border-transparent ring-1 ring-black/10 rounded-2xl bg-white dark:bg-neutral-800 flex items-start gap-4"
    >
      <div
        className={cn(
          "size-6 rounded-full text-white flex items-center justify-center shrink-0 mt-1",
          variant === "blue" && "bg-blue-500",
          variant === "red" && "bg-red-500",
          variant === "green" && "bg-green-500"
        )}
      >
        {icon}
      </div>
      <div>
        <p className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
          {title}
        </p>
        <p className="text-base font-normal text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          <Tag icon={<SalesforceIcon />} title="Salesforce" />
          <Tag icon={<HubspotIcon />} title="Hubspot" />
          <Tag icon={<GoogleSheetsIcon />} title="Sheets" />
        </div>
      </div>
    </motion.div>
  );
};

const Tag = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="flex items-center gap-2 px-1 py-0.5 border border-neutral-200 dark:border-neutral-500 rounded-sm text-sm">
      {icon}
      <p className="text-xs text-neutral-500 dark:text-neutral-400">{title}</p>
    </div>
  );
};
