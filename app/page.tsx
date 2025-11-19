import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Speed } from "@/components/speed";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCloud />
      <Features />
      <Speed />
    </div>
  );
}
