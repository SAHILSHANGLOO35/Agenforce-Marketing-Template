import Link from "next/link";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { Button } from "./ui/button";
import { LandingImages } from "./landing-page";

export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 px-4 overflow-hidden">
      <Container>
        <Heading as="h1" className="lg:text-left text-center">
          Agents that do the work <br /> Approvals that keep you safe.
        </Heading>

        <SubHeading className="py-8 lg:text-left text-center mx-auto lg:mx-0">
          Deploy AI agents that plan, act through your tools, and report
          outcomes-without changing how your teams work.
        </SubHeading>

        <div className="flex items-center gap-6">
          <Button className="shadow-brand">Start your free trial</Button>
          <Button asChild variant="outline">
            <Link href="#">View role based demos</Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
    </section>
  );
};
