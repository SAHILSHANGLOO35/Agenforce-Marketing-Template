import { Features } from "@/components/features";
import { FeaturesSecondary } from "@/components/features-secondary";
import { FeaturesTertiary } from "@/components/features-tertiary";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Speed } from "@/components/speed";
import { Trusted } from "@/components/trusted";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCloud />
      <Features />
      <Speed />
      <FeaturesSecondary />
      <Trusted />
      <FeaturesTertiary />
    </div>
  );
}
