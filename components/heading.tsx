import { cn } from "@/lib/utils";
import React from "react";

export const Heading = ({
  children,
  className,
  as = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "text-2xl font-bold md:text-4xl lg:text-6xl tracking-tight font-display",
        className
      )}
    >
      {children}
    </Tag>
  );
};
