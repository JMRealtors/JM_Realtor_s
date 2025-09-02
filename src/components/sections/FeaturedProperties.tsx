import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Ruler, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const propertyCategories = [
  { id: "ongoing", label: "Ongoing", count: 8 },
  { id: "upcoming", label: "Upcoming", count: 5 },
  { id: "completed", label: "Completed", count: 12 }
];

const properties = {
  ongoing: [
    {
      id: 1,
      name: "EstateCore - Prime Vista",
      location: "Whitefield",
      availablePlots: 245,
      propertyType: "Villa Plots",
      totalSize: "1200 - 3500",
      price: "₹45L - ₹1.2Cr",
      image: "/api/placeholder/400/300",
      status: "Available"
    },
    {
      id: 2,
      name: "EstateCore - Garden Valley", 
      location: "Electronic City",
      availablePlots: 189,
      propertyType: "Gated Community",
      totalSize: "1500 - 2800",
      price: "₹65L - ₹95L", 
      image: "/api/placeholder/400/300",
      status: "Selling Fast"
    },
    {
      id: 3,
      name: "EstateCore - Serenity Heights",
      location: "Sarjapur Road",
      availablePlots: 156,
      propertyType: "Premium Villas",
      totalSize: "2000 - 4000",
      price: "₹85L - ₹1.8Cr",
      image: "/api/placeholder/400/300", 
      status: "Available"
    }
  ],
  upcoming: [
    {
      id: 4,
      name: "EstateCore - Future Park",
      location: "Hennur Road",
      availablePlots: 320,
      propertyType: "Villa Plots",
      totalSize: "1100 - 2500",
      price: "₹38L - ₹85L",
      image: "/api/placeholder/400/300",
      status: "Launching Soon"
    },
    {
      id: 5,
      name: "EstateCore - Tech Hub",
      location: "ORR - Bellandur",
      availablePlots: 275,
      propertyType: "Smart Homes",
      totalSize: "1400 - 3200",
      price: "₹72L - ₹1.4Cr",
      image: "/api/placeholder/400/300",
      status: "Pre Launch"
    }
  ],
  completed: [
    {
      id: 6,
      name: "EstateCore - Heritage Park",
      location: "JP Nagar",
      availablePlots: 0,
      propertyType: "Villa Community",
      totalSize: "1800 - 3500",
      price: "Sold Out",
      image: "/api/placeholder/400/300",
      status: "Completed"
    },
    {
      id: 7,
      name: "EstateCore - Royal Gardens",
      location: "Koramangala",
      availablePlots: 0,
      propertyType: "Luxury Villas", 
      totalSize: "2500 - 5000",
      price: "Sold Out",
      image: "/api/placeholder/400/300",
      status: "Completed"
    }
  ]
};

export function FeaturedProperties() {
  const [activeCategory, setActiveCategory] = useState("ongoing");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-estate-success text-estate-success-foreground";
      case "Selling Fast":
        return "bg-estate-gold text-estate-gold-foreground";
      case "Launching Soon":
        return "bg-primary text-primary-foreground";
      case "Pre Launch":
        return "bg-accent text-accent-foreground";
      case "Completed":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover your ideal plot with us — whether it's ready to build, coming soon, 
            or already a success story. Each project is thoughtfully planned with modern infrastructure.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {propertyCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2 transition-all duration-300",
                activeCategory === category.id && "shadow-elegant"
              )}
            >
              {category.label}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties[activeCategory as keyof typeof properties].map((property) => (
            <Card 
              key={property.id}
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                  <Home className="w-16 h-16 text-primary opacity-50" />
                </div>
                <Badge 
                  className={cn("absolute top-3 right-3", getStatusColor(property.status))}
                >
                  {property.status}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {property.name}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Available Plots</span>
                    <span className="text-sm font-medium">{property.availablePlots} Plots</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Property Type</span>
                    <span className="text-sm font-medium">{property.propertyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Size Range</span>
                    <span className="text-sm font-medium">{property.totalSize} sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Price Range</span>
                    <span className="text-sm font-bold text-primary">{property.price}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Properties Button */}
        <div className="text-center">
          <Button variant="default" size="lg" className="shadow-elegant">
            View All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}