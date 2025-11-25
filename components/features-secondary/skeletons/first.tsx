"use client";

import React from "react";
import { motion } from "motion/react";
import {
  FileIcon,
  GoogleSheetsIcon,
  HubspotIcon,
  HumanIcon,
  SalesforceIcon,
  SettingsIcon,
} from "@/icons";
import { cn } from "@/lib/utils";

export const SkeletonOne = () => {
  return (
    <div className="flex-1 flex flex-col gap-2 rounded-t-3xl max-w-sm mx-auto w-full h-full bg-neutral-100 border border-neutral-200 inset-x-0 absolute p-2">
      <Card
        icon={<FileIcon className="size-4" />}
        title="Connect Data"
        description="Link CRMs, helpdesks, and APIs to give agents secure, role-based access."
      />
      <Card
        icon={<HumanIcon className="size-4" />}
        variant="red"
        title="Human-in-the-Loop"
        description="Add reviews, approvals and escalations without slowing work."
      />
      <Card
        icon={<SettingsIcon className="size-4" />}
        variant="green"
        title="Define Processing Logic"
        description="Create workflows, decision points, and conditional actions for each task."
      />
    </div>
  );
};

export const Card = ({
  icon,
  variant = "blue",
  title,
  description,
}: {
  icon: React.ReactNode;
  variant?: "blue" | "red" | "green";
  title: string;
  description: string;
}) => {
  return (
    <div className="p-4 shadow-black/10 border border-transparent ring-1 ring-black/10 rounded-2xl bg-white flex items-start gap-4">
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
        <p className="text-lg font-bold text-neutral-800">{title}</p>
        <p className="text-base font-normal text-neutral-600">{description}</p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          <Tag icon={<SalesforceIcon />} title="Salesforce" />
          <Tag icon={<HubspotIcon />} title="Hubspot" />
          <Tag icon={<GoogleSheetsIcon />} title="Sheets" />
        </div>
      </div>
    </div>
  );
};

const Tag = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="flex items-center gap-2 px-1 py-0.5 border border-neutral-200 rounded-sm text-sm">
      {icon}
      <p className="text-xs text-neutral-500">{title}</p>
    </div>
  );
};
