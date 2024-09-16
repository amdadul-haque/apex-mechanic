import { Hero } from "@/modules/home";
import FeaturesSection from "@/modules/home/features-section";

export default function Home() {
  return (
    <main className="bg-primary">
      <Hero />
      <FeaturesSection />
    </main>
  );
}
