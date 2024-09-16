import { CoreFeatures, Downlaods, FeaturesSection, Hero, Invoice, Newsletter } from "@/modules/home";

export default function Home() {
  return (
    <main className="bg-primary text-white">
      <Hero />
      <FeaturesSection />
      <Newsletter />
      <Invoice />
      <CoreFeatures />
      <Downlaods />
    </main>
  );
}
