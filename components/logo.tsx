import { cn } from "@/lib/utils";
import Link from "next/link";
import { SVGProps } from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-1", className)}>
      <LogoIcon />
      <span className="font-display font-extralight text-sm text-neutral-600">
        Agenforce
      </span>
    </Link>
  );
};

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.92285 14.8848H0V9.96191H4.92285V14.8848ZM19.6924 14.8848H9.84668V9.96191H4.92383V5.03809H9.84668V0.115234H19.6924V14.8848ZM9.84668 9.96191H14.7695V5.03906H9.84668V9.96191ZM4.92285 5.03809H0V0.115234H4.92285V5.03809Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
