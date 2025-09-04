import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import propertyBw1 from "@/assets/property-bw-1.jpg";
import propertyBw2 from "@/assets/property-bw-2.jpg";
import propertyBw3 from "@/assets/property-bw-3.jpg";
import propertyBw4 from "@/assets/property-bw-4.jpg";
import propertyBw5 from "@/assets/property-bw-5.jpg";

const properties = [
  {
    id: 1,
    title: "Luxury Villa Estate",
    location: "Beverly Hills, CA",
    price: "$2,850,000",
    image: propertyBw1,
    beds: 5,
    baths: 4,
    sqft: "4,200",
    status: "Available",
    statusColor: "bg-estate-success" as const,
  },
  {
    id: 2,
    title: "Modern Penthouse",
    location: "Manhattan, NY",
    price: "$3,200,000",
    image: propertyBw2,
    beds: 3,
    baths: 3,
    sqft: "2,800",
    status: "Sold",
    statusColor: "bg-destructive" as const,
  },
  {
    id: 3,
    title: "Downtown Loft",
    location: "Los Angeles, CA",
    price: "$1,750,000",
    image: propertyBw3,
    beds: 2,
    baths: 2,
    sqft: "1,900",
    status: "Available",
    statusColor: "bg-estate-success" as const,
  },
  {
    id: 4,
    title: "Corporate Office",
    location: "San Francisco, CA",
    price: "$4,500,000",
    image: propertyBw4,
    beds: 0,
    baths: 8,
    sqft: "12,000",
    status: "Under Contract",
    statusColor: "bg-estate-gold" as const,
  },
  {
    id: 5,
    title: "Family Townhouse",
    location: "Chicago, IL",
    price: "$890,000",
    image: propertyBw5,
    beds: 4,
    baths: 3,
    sqft: "2,400",
    status: "Available",
    statusColor: "bg-estate-success" as const,
  },
];

export function FeaturedProperties() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, each offering unique features and exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className={`group overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 transform ${
                isVisible 
                  ? "animate-slide-up opacity-100" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <Badge 
                  className={`absolute top-4 left-4 ${property.statusColor} text-white border-0`}
                >
                  {property.status}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-foreground">{property.price}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft} sq ft</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center ${isVisible ? "animate-scale" : "opacity-0"}`}>
          <Button size="lg" asChild>
            <Link to="/projects">
              View All Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}