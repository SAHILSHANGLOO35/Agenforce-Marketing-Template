"use client";

import { Container } from "../container";
import { cn } from "@/lib/utils";
import React from "react";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { FileIcon, HumanIcon, SettingsIcon } from "@/icons";

export const FeaturesSecondary = () => {
  return (
    <section className="pt-10 md:pt20 lg:pt-32 px-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-x divide-neutral-200 dark:divide-neutral-800">
          <div>
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-800">
                Agent Studio
              </h2>
              <p className="text-neutral-600 text-balance max-w-md mt-2">
                Design, launch and customize AI agents for marketing, sales,
                support and ops, built around your workflows.
              </p>
            </div>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>

          <div>
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-800">
                Multi-Agent Orchestration
              </h2>
              <p className="text-neutral-600 text-balance max-w-md mt-2">
                Coordinate multiple agents across workflows using memory,
                interrupts, and conditional logic.
              </p>
            </div>
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
          <SecondaryFeatures
            icon={<FileIcon className="size-4" />}
            title="Workflow Automation"
            description="Automate campaigns, tickets and CRM updates without manual handoffs."
          />
          <SecondaryFeatures
            icon={<SettingsIcon className="size-4" />}
            title="Integration Fabric."
            description="Connect CRMs, service desks, data warehouses and cloud apps seamlessly."
          />
          <SecondaryFeatures
            icon={<HumanIcon className="size-4" />}
            title="Human-in-the-Loop"
            description="Add reviews, approvals and escalations without slowing work."
          />
        </div>
      </Container>
    </section>
  );
};

export const SecondaryFeatures = ({
  icon,
  title,
  description,
  className,
}: {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-4 max-w-sm", className)}>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center size-6 rounded-full bg-neutral-400 text-white">
          {icon}
        </div>
        <div className="font-bold text-lg text-neutral-600 dark:text-neutral-400">
          {title}
        </div>
      </div>
      <div className="text-base text-neutral-500">{description}</div>
    </div>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-80 sm:h-60 flex flex-col md:h-80 relative overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};
