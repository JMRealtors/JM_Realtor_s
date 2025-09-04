import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Home, Ruler, ArrowRight, Search, Filter, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const allProjects = [
  {
    id: 1,
    name: "EstateCore - Prime Vista",
    location: "Whitefield",
    category: "ongoing",
    availablePlots: 245,
    totalPlots: 320,
    propertyType: "Villa Plots",
    sizeRange: "1200 - 3500",
    priceRange: "₹45L - ₹1.2Cr",
    amenities: ["Clubhouse", "Swimming Pool", "Gym", "Park"],
    status: "Available",
    completion: "Dec 2024"
  },
  {
    id: 2,
    name: "EstateCore - Garden Valley",
    location: "Electronic City", 
    category: "ongoing",
    availablePlots: 189,
    totalPlots: 250,
    propertyType: "Gated Community",
    sizeRange: "1500 - 2800",
    priceRange: "₹65L - ₹95L",
    amenities: ["Security", "Landscaping", "Kids Play Area", "Jogging Track"],
    status: "Selling Fast",
    completion: "Mar 2025"
  },
  {
    id: 3,
    name: "EstateCore - Serenity Heights",
    location: "Sarjapur Road",
    category: "ongoing", 
    availablePlots: 156,
    totalPlots: 200,
    propertyType: "Premium Villas",
    sizeRange: "2000 - 4000", 
    priceRange: "₹85L - ₹1.8Cr",
    amenities: ["Premium Clubhouse", "Spa", "Tennis Court", "Concierge"],
    status: "Available",
    completion: "Jun 2025"
  },
  {
    id: 4,
    name: "EstateCore - Future Park",
    location: "Hennur Road",
    category: "upcoming",
    availablePlots: 320,
    totalPlots: 320,
    propertyType: "Villa Plots",
    sizeRange: "1100 - 2500",
    priceRange: "₹38L - ₹85L",
    amenities: ["Smart Homes", "Solar Power", "EV Charging", "Waste Management"],
    status: "Launching Soon",
    completion: "Dec 2025"
  },
  {
    id: 5,
    name: "EstateCore - Tech Hub",
    location: "ORR - Bellandur",
    category: "upcoming",
    availablePlots: 275,
    totalPlots: 275,
    propertyType: "Smart Homes",
    sizeRange: "1400 - 3200",
    priceRange: "₹72L - ₹1.4Cr",
    amenities: ["Co-working Space", "High-speed Internet", "Smart Security", "Tech Center"],
    status: "Pre Launch",
    completion: "Mar 2026"
  },
  {
    id: 6,
    name: "EstateCore - Heritage Park",
    location: "JP Nagar",
    category: "completed",
    availablePlots: 0,
    totalPlots: 180,
    propertyType: "Villa Community",
    sizeRange: "1800 - 3500",
    priceRange: "Sold Out",
    amenities: ["Heritage Club", "Library", "Yoga Center", "Senior Living"],
    status: "Completed",
    completion: "Completed"
  },
  {
    id: 7,
    name: "EstateCore - Royal Gardens",
    location: "Koramangala",
    category: "completed",
    availablePlots: 0,
    totalPlots: 120,
    propertyType: "Luxury Villas",
    sizeRange: "2500 - 5000",
    priceRange: "Sold Out",
    amenities: ["Private Gardens", "Luxury Spa", "Valet Service", "Wine Cellar"],
    status: "Completed", 
    completion: "Completed"
  }
];

const categories = [
  { id: "all", label: "All Projects", count: allProjects.length },
  { id: "ongoing", label: "Ongoing", count: allProjects.filter(p => p.category === "ongoing").length },
  { id: "upcoming", label: "Upcoming", count: allProjects.filter(p => p.category === "upcoming").length },
  { id: "completed", label: "Completed", count: allProjects.filter(p => p.category === "completed").length }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");

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

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === "all" || project.location === locationFilter;
    
    return matchesCategory && matchesSearch && matchesLocation;
  });

  const locations = ["all", ...Array.from(new Set(allProjects.map(p => p.location)))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Discover Premium Residential Developments Across Prime Locations
              </p>
              <p className="text-lg opacity-90">
                From ongoing constructions to upcoming launches and completed communities, 
                explore our portfolio of thoughtfully designed residential projects.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-6 py-2 transition-all duration-300",
                    selectedCategory === category.id && "shadow-elegant"
                  )}
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects or locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.slice(1).map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline" className="w-full">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id}
                  className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-56 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                      <Home className="w-20 h-20 text-primary opacity-50" />
                    </div>
                    <Badge 
                      className={cn("absolute top-3 right-3", getStatusColor(project.status))}
                    >
                      {project.status}
                    </Badge>
                    {project.category !== "completed" && (
                      <Badge variant="outline" className="absolute top-3 left-3 bg-white/90">
                        {project.availablePlots} Available
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Property Type</span>
                        <span className="font-medium">{project.propertyType}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Size Range</span>
                        <span className="font-medium">{project.sizeRange} sq ft</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Price Range</span>
                        <span className="font-bold text-primary">{project.priceRange}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Completion</span>
                        <span className="font-medium">{project.completion}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Key Amenities:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.amenities.slice(0, 3).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {project.amenities.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          >
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{project.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                              <Home className="w-16 h-16 text-primary opacity-50" />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="font-medium">{project.location}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Property Type</p>
                                <p className="font-medium">{project.propertyType}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Size Range</p>
                                <p className="font-medium">{project.sizeRange} sq ft</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Price Range</p>
                                <p className="font-bold text-primary">{project.priceRange}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Available Plots</p>
                                <p className="font-medium">{project.availablePlots} / {project.totalPlots}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Completion</p>
                                <p className="font-medium">{project.completion}</p>
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-sm text-muted-foreground mb-2">All Amenities:</p>
                              <div className="flex flex-wrap gap-2">
                                {project.amenities.map((amenity, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {amenity}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-2 pt-4">
                              <Button variant="default" size="sm" className="flex-1" asChild>
                                <Link to="/contact">Get In Touch</Link>
                              </Button>
                              <Button variant="outline" size="sm" className="flex-1">
                                <Phone className="w-4 h-4 mr-1" />
                                Call Now
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      {project.status !== "Completed" && (
                        <Button variant="default" size="sm" className="flex-1" asChild>
                          <Link to="/contact">Enquire Now</Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <Home className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search criteria
                </p>
                <Button variant="outline" onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                  setLocationFilter("all");
                }}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Invest in Your Future?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get personalized recommendations based on your preferences and budget. 
                Our experts are here to help you find the perfect property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/contact">Schedule Site Visit</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/contact">Download Brochure</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}