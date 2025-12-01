"use client";

import { Container } from "../container";
import { cn } from "@/lib/utils";
import React from "react";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/three";
import { SkeletonFour } from "./skeletons/fourth";

export const FeaturesTertiary = () => {
  return (
    <section className="pt-10 md:pt20 lg:pt-32 px-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-neutral-200 dark:divide-neutral-800">
          <div className="md:border-r md:border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <div className="p-4 md:p-8">
                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                  Audit Trail
                </h2>
                <p className="text-neutral-600 text-balance max-w-md mt-2 dark:text-neutral-400">
                  Tracks every agent action with full input-output visibility
                  and timestamps.
                </p>
              </div>
              <CardSkeleton>
                <SkeletonOne />
              </CardSkeleton>
            </div>
          </div>

          <div className="md:border-b border-neutral-200 dark:border-neutral-800">
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Role-Based Access
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-balance max-w-md mt-2">
                Controls who can launch, review, or manage agents based on
                roles.
              </p>
            </div>
            <CardSkeleton className="mask-radial-from-30%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>

          <div className="md:border-r border-neutral-200 dark:border-neutral-800">
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Approval Queue
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-balance max-w-md mt-2">
                Sends agent-generated content to human reviewers before
                it&apos;s published.
              </p>
            </div>
            <CardSkeleton className="mask-radial-from-20% mask-r-from-50%">
              <SkeletonThree />
            </CardSkeleton>
          </div>

          <div>
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Guardrail Engine
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-balance max-w-md mt-2">
                Applies brand, tone, and policy checks before output goes live.
              </p>
            </div>
            <CardSkeleton className="mask-radial-from-80%">
              <SkeletonFour />
            </CardSkeleton>
          </div>
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
