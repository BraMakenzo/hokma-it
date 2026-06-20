
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Stats />
      <CTA />
    </main>
  );
}
