import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { Investment } from "@/components/sections/Investment";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
