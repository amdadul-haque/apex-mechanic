import { CoreFeatures, Downlaods, FeaturesSection, Hero, Invoice, RequestDemo } from "@/modules/home";

export default function Home() {
  return (
    <main className="bg-primary text-white">
      <Hero />
      <FeaturesSection />
      <RequestDemo />
      <Invoice />
      <CoreFeatures />
      <Downlaods />
    </main>
  );
}
