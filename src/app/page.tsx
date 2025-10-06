import Brands from "@/components/ui/Brands/brands";
import FreeGuide from "@/components/ui/FreeGuide/freeguide";
import Hero from "@/components/ui/Hero/hero";
import HowItWorks from "@/components/ui/HowItWorks/how_it_works";
import SampleDeals from "@/components/ui/SampleDeals/sample_deals";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Brands/>
      <SampleDeals/>
      <HowItWorks/>
      <FreeGuide/>
    </main>
  );
}
