import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Home, Search, Filter } from "lucide-react";
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
    completion: "Dec 2024",
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
    completion: "Mar 2025",
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
    completion: "Jun 2025",
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
    completion: "Dec 2025",
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
    completion: "Mar 2026",
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
    completion: "Completed",
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
    completion: "Completed",
  },
];

const categories = [
  { id: "all", label: "All Projects", count: allProjects.length },
  { id: "ongoing", label: "Ongoing", count: allProjects.filter((p) => p.category === "ongoing").length },
  { id: "upcoming", label: "Upcoming", count: allProjects.filter((p) => p.category === "upcoming").length },
  { id: "completed", label: "Completed", count: allProjects.filter((p) => p.category === "completed").length },
];

function getStatusColor(status) {
  switch (status) {
    case "Available":
      return "bg-blue-600 text-white";
    case "Selling Fast":
      return "bg-blue-400 text-white";
    case "Launching Soon":
      return "bg-blue-500 text-white";
    case "Pre Launch":
      return "bg-blue-300 text-white";
    case "Completed":
      return "bg-gray-300 text-gray-600";
    default:
      return "bg-gray-200 text-gray-700";
  }
}

const heroImageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");

  const filteredProjects = allProjects.filter((project) => {
    const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
    const searchMatch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatch = locationFilter === "all" || project.location === locationFilter;
    return categoryMatch && searchMatch && locationMatch;
  });

  const locations = ["all", ...Array.from(new Set(allProjects.map((p) => p.location)))];

  return (
    <div className="min-h-screen bg-white flex flex-col min-w-full">
      <Header />

      <main className="flex-grow">
        <section
          className="relative py-20 bg-gradient-to-r from-[#b6dbfa] via-[#8eb8ec] to-[#4886e3] text-white"
          style={{ overflow: "hidden" }}
        >
          <img 
            src={heroImageUrl}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl z-10">
            <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">
              Our Projects
            </h1>
            <p className="text-2xl font-light opacity-90 mb-4">
              Discover Premium Residential Developments Across Prime Locations
            </p>
            <p className="text-lg opacity-90 mb-12">
              From ongoing constructions to upcoming launches and completed communities,
              explore our portfolio of thoughtfully designed residential projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#b6dbfa] to-[#4886e3] text-white hover:brightness-110 rounded-lg px-10 py-4 font-semibold"
                asChild
              >
                <Link to="/contact">View Our Projects</Link>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#1b4dbf] to-[#4665ff] text-white hover:brightness-110 rounded-lg px-10 py-4 font-semibold"
                asChild
              >
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn("px-6 py-2 transition-all duration-300", selectedCategory === category.id && "shadow-elegant")}
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search projects or locations..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
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

        <section className="py-14 bg-white">
          <div className="container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col">
                  <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#b6dbfa] via-[#8eb8ec] to-[#4886e3] flex items-center justify-center h-44 w-full">
                    <Home className="w-16 h-16 text-white opacity-60" />
                    <Badge className={cn("absolute top-3 right-3", getStatusColor(project.status))}>{project.status}</Badge>
                    {project.category !== "completed" && (
                      <Badge variant="outline" className="absolute top-3 left-3 bg-white/90 text-[#095af7]">
                        {project.availablePlots} Available
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#095af7] mb-2">{project.name}</h3>
                    <div className="flex items-center text-[#227be6] mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Property Type</span>
                        <span className="font-medium">{project.propertyType}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Size Range</span>
                        <span className="font-medium">{project.sizeRange} sq ft</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Price Range</span>
                        <span className="font-bold text-[#095af7]">{project.priceRange}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Completion</span>
                        <span className="font-medium">{project.completion}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Key Amenities:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.amenities.slice(0, 3).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs text-[#095af7] bg-[#e3f0fa]">
                            {amenity}
                          </Badge>
                        ))}
                        {project.amenities.length > 3 && (
                          <Badge variant="secondary" className="text-xs text-[#095af7] bg-[#e3f0fa]">
                            +{project.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-auto pt-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-[#095af7] to-[#227be6] text-white font-medium rounded-lg hover:brightness-110"
                        asChild
                      >
                        <Link to="/contact">Enquire Now</Link>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-white border-2 border-[#095af7] text-[#095af7] font-medium rounded-lg hover:bg-[#e3f0fa]"
                        asChild
                      >
                        <Link to={`/contact?project=${encodeURIComponent(project.name)}`}>Contact</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <Home className="w-16 h-16 text-[#4886e3] mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold text-[#095af7] mb-2">No Projects Found</h3>
                <p className="text-[#227be6] mb-4">Try adjusting your filters or search criteria</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                    setLocationFilter("all");
                  }}
                  className="bg-white border-2 border-[#095af7] text-[#095af7] px-6 rounded-lg font-semibold"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
