import { HeroSection } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/Problem";
import { WhatWeTestSection } from "@/components/sections/WhatWeTest";
import { DeliverablesSection } from "@/components/sections/Deliverables";
import { PackagesSection } from "@/components/sections/Packages";
import { ProcessSection } from "@/components/sections/Process";
import { TrustSection } from "@/components/sections/Trust";
import { FAQSection } from "@/components/sections/FAQ";
import { FinalCTASection } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main className="space-y-4">
      <HeroSection />
      <ProblemSection />
      <WhatWeTestSection />
      <DeliverablesSection />
      <PackagesSection />
      <ProcessSection />
      <TrustSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
