import { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, Building, Award } from "lucide-react";

const stats = [
  {
    icon: Building,
    value: "500+",
    label: "Properties Sold",
    description: "Successfully delivered premium real estate projects",
  },
  {
    icon: Users,
    value: "1,200+",
    label: "Happy Clients",
    description: "Satisfied customers who trust our expertise",
  },
  {
    icon: TrendingUp,
    value: "$2.8B+",
    label: "Total Sales",
    description: "Combined value of all transactions completed",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Decades of excellence in real estate industry",
  },
];

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = [500, 1200, 2800, 15];
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters(targets.map(target => Math.min(Math.floor((target * step) / steps), target)));
      
      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-background border-t border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Our Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence and client satisfaction in the real estate industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className={`text-center p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transform transition-all duration-700 hover:scale-105 ${
                  isVisible 
                    ? "animate-slide-up opacity-100" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 animate-float">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                  {index === 2 ? `$${(counters[index] / 1000).toFixed(1)}B` : 
                   index === 1 ? `${counters[index].toLocaleString()}` : 
                   `${counters[index]}${index === 0 ? '+' : index === 3 ? '+' : '+'}`}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}