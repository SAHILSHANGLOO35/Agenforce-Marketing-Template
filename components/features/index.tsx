import { Container } from "../container";
import { Heading } from "../heading";
import { SubHeading } from "../subheading";
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./card";
import { IconPlus } from "@tabler/icons-react";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonTwo } from "./skeletons/second";

export const Features = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 px-4">
      <Container className="flex flex-col">
        <div className="flex lg:flex-row flex-col lg:items-baseline-last justify-between gap-10">
          <Heading className="text-center lg:text-left">
            Built for Fast Moving Teams That Need Control.
          </Heading>
          <SubHeading className="text-center lg:text-left mx-auto lg:mx-0">
            Agents work inside your existing tools, with built-in approvals,
            brand and policy guardrails, and full traceability. Every action is
            auditable, every outcome accountable.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 md:my-20">
          <Card className="rounded-bl-3xl rounded-tl-3xl">
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
            <CardContent className="flex items-center justify-between">
              <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
              <CardCTA>
                <IconPlus />
              </CardCTA>
            </CardContent>
          </Card>
          <Card>
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
            <CardContent className="flex items-center justify-between">
              <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
              <CardCTA>
                <IconPlus />
              </CardCTA>
            </CardContent>
          </Card>
          <Card className="rounded-tr-3xl rounded-br-3xl">
            <CardSkeleton>
              <SkeletonThree />
            </CardSkeleton>
            <CardContent className="flex items-center justify-between">
              <CardTitle>
                Approvals, Guardrails, and Full Auditability
              </CardTitle>
              <CardCTA>
                <IconPlus />
              </CardCTA>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};
