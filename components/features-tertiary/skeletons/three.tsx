import { ArrowIcon, ArrowReverseIcon } from "@/icons";
import { cn } from "@/lib/utils";
import { IconSettings, IconSparkles } from "@tabler/icons-react";
import React from "react";

export const SkeletonThree = () => {
  return (
    <div className="flex-1 flex flex-col gap-2 rounded-t-3xl mx-auto w-full h-full inset-x-10 absolute pt-2 px-2 z-20 perspective-[4000px] max-w-lg">
      <ArrowIcon className="absolute inset-x-0 mx-auto -top-4" />
      <ArrowReverseIcon className="absolute left-30 -bottom-8 mx-auto" />
      <div
        className={cn(
          "absolute inset-0",
          "flex items-center justify-center gap-10",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,var(--color-neutral-200)_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
        style={{
          transform: "rotateY(20deg) rotateX(50deg) rotateZ(40deg)",
        }}
      >
        <div className="flex items-center gap-20 ">
          <div className="px-4 py-2 rounded-full bg-orange-100 border border-orange-300 text-orange-500 font-medium flex items-center justify-center gap-2">
            <IconSettings className="size-4" />
            <span>Processing</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-green-100 border border-green-300 text-green-500 font-medium flex items-center justify-center gap-2">
            <IconSparkles className="size-4" />
            <span>Feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
};
