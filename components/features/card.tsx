import { cn } from "@/lib/utils";
import React from "react";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-l mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "text-lg flex justify-between md:text-2xl font-bold font-display",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("px-4 pb-6 md:px-8 md:pb-6", className)}>{children}</div>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "border items-center flex justify-center border-neutral-200 dark:border-neutral-800 rounded-full shrink-0 size-5 md:size-10 active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
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
        "h-80 sm:h-60 md:h-80 relative overflow-hidden perspective-distant",
        className
      )}
    >
      {children}
    </div>
  );
};
