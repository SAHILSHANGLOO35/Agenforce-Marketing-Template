import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { LandingImages } from "./landing-page";

export const Trusted = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 px-4 overflow-hidden">
      <Container>
        <Heading as="h1" className="lg:text-left text-center">
          Governed AI, <br /> Trusted Outcomes
        </Heading>

        <SubHeading className="py-8 lg:text-left text-center mx-auto lg:mx-0">
          Deploy AI agents with built-in approvals, brand guardrails, and audit
          trails. Every step is visible, reviewable, and compliant.
        </SubHeading>
        <LandingImages firstImage="/6.webp" secondImage="/5.webp" />
      </Container>
    </section>
  );
};
