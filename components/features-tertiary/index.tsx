"use client";

import { Container } from "../container";
import { cn } from "@/lib/utils";
import React from "react";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";

export const FeaturesTertiary = () => {
  return (
    <section className="pt-10 md:pt20 lg:pt-32 px-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
          <div>
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-800">
                Audit Trail
              </h2>
              <p className="text-neutral-600 text-balance max-w-md mt-2">
                Tracks every agent action with full input-output visibility and
                timestamps.
              </p>
            </div>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>

          <div>
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-800">
                Role-Based Access
              </h2>
              <p className="text-neutral-600 text-balance max-w-md mt-2">
                Controls who can launch, review, or manage agents based on
                roles.
              </p>
            </div>
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20"></div>
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
