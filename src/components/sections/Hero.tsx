import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import { Link } from "react-router-dom";

const banners = [
  {
    image: heroBanner1,
    title: "Premium Real Estate Solutions",
    subtitle: "Discover your perfect home with our curated selection of luxury properties",
  },
  {
    image: heroBanner2,
    title: "Investment Opportunities Await",
    subtitle: "Build your wealth portfolio with prime real estate investments",
  },
  {
    image: heroBanner3,
    title: "Modern Living Redefined",
    subtitle: "Experience contemporary luxury in our exclusive developments",
  },
];

export function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBanner ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          {banners[currentBanner].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in opacity-90">
          {banners[currentBanner].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale">
          <Button size="lg" variant="premium" className="shadow-premium hover:shadow-glow transform hover:scale-105" asChild>
            <Link to="/projects">
              Explore Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary hover:border-white shadow-elegant" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevBanner}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 animate-float"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextBanner}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 animate-float"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Banner Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}