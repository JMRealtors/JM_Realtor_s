import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Statistics />
        <FeaturedProperties />
      </main>
    </div>
  );
};

export default Index;
