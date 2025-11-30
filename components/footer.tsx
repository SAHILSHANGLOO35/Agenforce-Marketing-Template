import React from "react";
import { Container } from "./container";
import { LogoIcon } from "./logo";
import { SubHeading } from "./subheading";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconSun,
} from "@tabler/icons-react";

export const Footer = () => {
  const productItems = [
    {
      title: "Agent Simulator",
      href: "#",
    },
    {
      title: "AI Workflows",
      href: "#",
    },
    {
      title: "Agent Builder",
      href: "#",
    },
    {
      title: "Analytics Dashboard",
      href: "#",
    },
    {
      title: "API Integration",
      href: "#",
    },
    {
      title: "Enterprise Soluion",
      href: "#",
    },
  ];

  const companyItems = [
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Press",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];

  return (
    <section className="py-10 md:py-20 lg:pt-32 px-4 overflow-hidden">
      <footer className="border-t border-neutral-200 dark:border-neutral-800 pt-10 md:pt-20 lg:pt-32 lg:pb-10 relative perspective-distant">
        <Container className="grid grid-cols-1 md:grid-cols-5 gap-10 px-4 relative z-20">
          <div className="md:col-span-2 flex flex-col gap-4 items-start">
            <div className="flex gap-1 items-center">
              <LogoIcon />
              <span className="text-sm font-display text-neutral-600 dark:text-neutral-800">
                Agenforce
              </span>
            </div>
            <SubHeading className="text-neutral-500">
              Safe, observable, outcome-driven AI
            </SubHeading>
            <Button className="shadow-brand">Start a 30-day trial</Button>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <div className="text-base font-medium text-neutral-400">
              Products
            </div>
            <ul className="flex flex-col gap-2 list-none">
              {productItems.map((item) => (
                <li
                  key={item.title}
                  className="text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <div className="text-base font-medium text-neutral-400">
              Company
            </div>
            <ul className="flex flex-col gap-2 list-none">
              {companyItems.map((item) => (
                <li
                  key={item.title}
                  className="text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <div className="text-base font-medium text-neutral-400">
              Newsletter
            </div>
            <div className="border p-px border-neutral-200 bg-neutral-100 rounded-md dark:border-neutral-800 dark:bg-neutral-700 relative items-center justify-between flex shrink-0">
              <input
                type="email"
                placeholder="Your Emal"
                className="bg-transparent px-4 py-2 placeholder-neutral-400 text-neutral-600 text-sm"
              />
              <button className="bg-black text-white absolute inset-y-0 text-center px-4 py-2 rounded-sm right-0">
                <Send className="size-4" />
              </button>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 font-inter text-sm max-w-xl">
              Get the latest product news and behind the scenes updates.
            </p>
          </div>
        </Container>

        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between mt-10 relative z-20 px-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Agenforce AI. All rights reserved.
          </p>

          <div className="flex flex-col items-start sm:items-end gap-4 *:text-sm *:text-neutral-500">
            <div className="flex items-center gap-4">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>

            <div className="flex items-center gap-4">
              <IconSun className="text-black dark:text-neutral-50 size-4" />
              <IconBrandInstagram className="text-black dark:text-neutral-50 size-4 cursor-pointer" />
              <IconBrandTwitter className="text-black dark:text-neutral-50 size-4 cursor-pointer" />
              <IconBrandLinkedin className="text-black dark:text-neutral-50 size-4 cursor-pointer" />
            </div>
          </div>
        </Container>

        <div
          className={cn(
            "absolute inset-0",
            "flex items-center justify-center gap-10",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            "mask-radial-from-50%"
          )}
          style={{
            transform: "rotateX(60deg)",
          }}
        />
      </footer>
    </section>
  );
};
