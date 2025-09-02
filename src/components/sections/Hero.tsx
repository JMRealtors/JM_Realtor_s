import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage1 from "@/assets/hero-banner-1.jpg";
import heroImage2 from "@/assets/hero-banner-2.jpg";
import heroImage3 from "@/assets/hero-banner-3.jpg";

const heroSlides = [
  {
    image: heroImage1,
    title: "Premium Villa Plots",
    subtitle: "Discover Your Dream Home in Prime Locations",
    description: "Experience luxury living with our carefully planned residential developments featuring modern amenities and world-class infrastructure."
  },
  {
    image: heroImage2,
    title: "Gated Communities",
    subtitle: "Security & Serenity Combined", 
    description: "Live in thoughtfully designed communities with 24/7 security, landscaped gardens, and premium facilities for your family."
  },
  {
    image: heroImage3,
    title: "Modern Amenities",
    subtitle: "Lifestyle Redefined",
    description: "Enjoy clubhouses, swimming pools, fitness centers, and recreational facilities designed for contemporary living."
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleExploreProjects = () => {
    navigate('/projects');
  };

  const handleScheduleVisit = () => {
    navigate('/contact');
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Hero Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-slide-up">
            {heroSlides[currentSlide].title}
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-6 text-white/90 animate-slide-up animation-delay-200">
            {heroSlides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-xl animate-slide-up animation-delay-400">
            {heroSlides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300"
              onClick={handleExploreProjects}
            >
              Explore Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
              onClick={handleScheduleVisit}
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide ? "bg-white animate-scale-in" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}