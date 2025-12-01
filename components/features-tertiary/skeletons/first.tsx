"use client";

import React from "react";
import { motion } from "motion/react";
import {
  AdminIcon,
  DraftingIcon,
  EmailIcon,
  RecentActivityIcon,
  ReviewIcon,
} from "@/icons";
import { IconClock } from "@tabler/icons-react";

export const SkeletonOne = () => {
  const cardItems = [
    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-blue-500 text-white shrink-0">
          <EmailIcon />
        </div>
      ),
      title: "Personalized Email",
      description: "Personalized Email sent to ••••• @gmail.com",
      badge: (
        <div className="flex items-center gap-1 border border-neutral-200 dark:border-neutral-200/10 dark:bg-neutral-200/10 rounded-md px-1 py-0.5">
          <IconClock className="size-3" />
          <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">
            15s
          </span>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-red-500 text-white shrink-0">
          <ReviewIcon />
        </div>
      ),
      title: "Peer Review",
      description:
        "Reviewed and approved 2 outputs from Content Drafting Agent",
      badge: (
        <div className="flex items-center gap-1 border border-red-200 bg-red-100 dark:border-red-200/10 dark:bg-red-100/10 rounded-md px-1 py-0.5">
          <p className="text-[10px] font-bold text-red-500">FAILED</p>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-orange-500 text-white shrink-0">
          <DraftingIcon />
        </div>
      ),
      title: "Content Drafting",
      description: "Generated draft campaign brief",
      badge: (
        <div className="flex items-center gap-1 border border-orange-200 bg-orange-100 dark:border-orange-200/10 dark:bg-orange-100/10 rounded-md px-1 py-0.5">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-black text-white shrink-0">
          <AdminIcon />
        </div>
      ),
      title: "Admin Approval",
      description: "Final approval of marketing copy before publishing",
      badge: (
        <div className="flex items-center gap-1 border border-orange-200 bg-orange-100 dark:border-orange-200/10 dark:bg-orange-100/10 rounded-md px-1 py-0.5">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-blue-500 text-white shrink-0">
          <EmailIcon />
        </div>
      ),
      title: "Weekly Campaign Report",
      description: "Generated campaign performance report",
      badge: (
        <div className="flex items-center gap-1 border border-neutral-200 dark:border-neutral-200/10 dark:bg-neutral-200/10 rounded-md px-1 py-0.5">
          <IconClock className="size-3" />
          <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">
            2m
          </span>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-red-500 text-white shrink-0">
          <ReviewIcon />
        </div>
      ),
      title: "SEO Audit",
      description:
        "Reviewed and approved 2 outputs from Content Drafting Agent",
      badge: (
        <div className="flex items-center gap-1 border border-red-200 bg-red-100 dark:border-red-200/10 dark:bg-red-100/10 rounded-md px-1 py-0.5">
          <p className="text-[10px] font-bold text-red-500">FAILED</p>
        </div>
      ),
    },

    {
      icon: (
        <div className="size-5 flex items-center justify-center rounded-sm bg-orange-500 text-white shrink-0">
          <DraftingIcon />
        </div>
      ),
      title: "Price Monitoring Agent",
      description: "Generated draft campaign brief",
      badge: (
        <div className="flex items-center gap-1 border border-orange-200 bg-orange-100 dark:border-orange-200/10 dark:bg-orange-100/10 rounded-md px-1 py-0.5">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex-1 flex flex-col gap-2 rounded-t-3xl  mx-auto w-full h-full bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-200 inset-x-10 inset-y-2 absolute pt-2 px-2">
      <Card>
        {cardItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="w-full"
          >
            <CardItem
              index={index}
              key={item.title}
              title={item.title}
              icon={item.icon}
              description={item.description}
              badge={item.badge}
            />
          </motion.div>
        ))}
      </Card>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-black/10 border border-transparent ring-1 ring-black/10 rounded-tl-2xl bg-white dark:bg-neutral-900 flex flex-col flex-1 items-start">
      <div className="flex items-center gap-2 border-b w-full px-4 py-2">
        <RecentActivityIcon />
        <span className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
          Recent Activity
        </span>
      </div>
      {children}
    </div>
  );
};

export const CardItem = ({
  icon,
  title,
  badge,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  badge: React.ReactNode;
  description: string;
  index: number;
}) => {
  return (
    <div className="flex items-center justify-between w-full pl-4 pt-4 relative overflow-hidden">
      <div className="flex items-center gap-2">
        {icon}
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          {title}
        </div>
        {badge}
      </div>

      <motion.p className="text-sm text-neutral-600 dark:text-neutral-400 flex-nowrap max-w-[16rem] w-full text-left whitespace-nowrap">
        {description.split("").map((item, idx) => (
          <motion.span
            key={idx}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: idx * 0.01 + index * 0.1,
            }}
          >
            {item}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
