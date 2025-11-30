"use client";

import { motion } from "motion/react";
import { FAQIcon } from "@/icons";
import { Container } from "./container";
import { Heading } from "./heading";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 px-4 overflow-hidden">
      <Container>
        <FAQIcon />
        <Heading className="my-10 md:my-20">Frequently Asked Questions</Heading>
        <div className="flex flex-col gap-4">
          <Question
            question="What is Agenforce AI?"
            answer="Agenforce AI is a platform for building and managing AI agents."
          />
          <Question
            question="Who is Agenforce AI built for?"
            answer="Agenforce AI is a platform for building and managing AI agents."
          />
          <Question
            question="How does Agenforce AI work?"
            answer="Agenforce AI is a platform for building and managing AI agents."
          />
          <Question
            question="Is there a free trial available?"
            answer="Yes, we offer a 14-day free trial so you can explore all features before committing to a plan."
          />
        </div>
      </Container>
    </section>
  );
};

const Question = ({
  question,
  answer,
}: {
  question?: string;
  answer?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full p-4 md:p-8 bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-3xl"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-black text-lg md:text-2xl font-bold font-display">
          {question}
        </h3>
        <div className="size-6 relative rounded-full bg-black flex items-center justify-center">
          <IconPlus
            className={cn(
              "text-white size-6 absolute inset-0 transition-all duration-200",
              open && "scale-0 rotate-90"
            )}
          />
          <IconMinus
            className={cn(
              "text-white size-6 absolute inset-0 scale-0 -rotate-90 transition-all duration-200",
              open && "scale-100 rotate-0"
            )}
          />
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          height: open ? "auto" : 0,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <motion.p
          key={String(open)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="text-left mt-4 text-neutral-600 dark:text-neutral-800"
        >
          {answer}
        </motion.p>
      </motion.div>
    </button>
  );
};
