import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Home, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type ProjectCategory = "ongoing" | "upcoming" | "completed";

type Project = {
  id: number;
  name: string;
  location: string;
  category: ProjectCategory;
  availablePlots: number;
  totalPlots: number;
  propertyType: string;
  sizeRange: string;
  priceRange: string;
  amenities: string[];
  status: string;
  completion: string;
  image: string; // image URL
};

const allProjects: Project[] = [
  {
    id: 1,
    name: "Prime Vista Layout - Okkilipalayam",
    location: "Okkilipalayam, Coimbatore",
    category: "ongoing",
    availablePlots: 42,
    totalPlots: 65,
    propertyType: "DTCP Approved Residential Plots",
    sizeRange: "1200 - 3200",
    priceRange: "₹18L - ₹45L",
    amenities: ["Gated Community", "Street Lights", "Drainage", "Park"],
    status: "Available",
    completion: "Dec 2024",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Garden Valley Layout - Othakal Mandapam",
    location: "Othakal Mandapam, Coimbatore",
    category: "ongoing",
    availablePlots: 35,
    totalPlots: 80,
    propertyType: "Residential Villa Plots",
    sizeRange: "1000 - 2400",
    priceRange: "₹16L - ₹38L",
    amenities: [
      "Children's Park",
      "Security Cabin",
      "Tar Road",
      "Good Ground Water",
    ],
    status: "Selling Fast",
    completion: "Mar 2025",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Serenity Heights Layout - Kinathukadavu",
    location: "Kinathukadavu, Coimbatore",
    category: "ongoing",
    availablePlots: 28,
    totalPlots: 70,
    propertyType: "Premium Residential Plots",
    sizeRange: "1200 - 3000",
    priceRange: "₹14L - ₹40L",
    amenities: ["Clubhouse", "Landscaped Park", "Compound Wall"],
    status: "Available",
    completion: "Jun 2025",
    image:
      "https://images.unsplash.com/photo-1512914890250-353c97c9e7e2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Future Park Extension - Pollachi Road",
    location: "Pollachi Road, Coimbatore",
    category: "upcoming",
    availablePlots: 120,
    totalPlots: 120,
    propertyType: "DTCP Approved Plots",
    sizeRange: "1000 - 2400",
    priceRange: "₹12L - ₹32L",
    amenities: ["Smart Street Lights", "Entry Arch", "Wide Roads", "Park"],
    status: "Launching Soon",
    completion: "Dec 2025",
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Tech Hub Layout - Aathupalam",
    location: "Aathupalam, Coimbatore",
    category: "upcoming",
    availablePlots: 90,
    totalPlots: 120,
    propertyType: "Residential and Small Commercial Plots",
    sizeRange: "800 - 2400",
    priceRange: "₹10L - ₹28L",
    amenities: [
      "Commercial Corner Plots",
      "EV Charging Provision",
      "24x7 Security",
    ],
    status: "Pre Launch",
    completion: "Mar 2026",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Heritage Greens Layout - Gandhipuram",
    location: "Gandhipuram, Coimbatore",
    category: "completed",
    availablePlots: 0,
    totalPlots: 110,
    propertyType: "Residential Plots",
    sizeRange: "900 - 2400",
    priceRange: "Sold Out",
    amenities: ["Community Hall", "Park", "Association Office"],
    status: "Completed",
    completion: "Completed",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Royal Gardens Layout - Peelamedu",
    location: "Peelamedu, Coimbatore",
    category: "completed",
    availablePlots: 0,
    totalPlots: 150,
    propertyType: "Premium Residential Plots",
    sizeRange: "1200 - 3000",
    priceRange: "Sold Out",
    amenities: ["Landscaped Gardens", "Children's Play Area", "Security"],
    status: "Completed",
    completion: "Completed",
    image:
      "https://images.unsplash.com/photo-1505842679540-5b2c1c5e650b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "River View Layout - Nanjundapuram",
    location: "Nanjundapuram, Coimbatore",
    category: "ongoing",
    availablePlots: 22,
    totalPlots: 60,
    propertyType: "Residential Plots",
    sizeRange: "1000 - 2200",
    priceRange: "₹19L - ₹36L",
    amenities: ["Riverside Walkway", "Park", "Street Lights"],
    status: "Available",
    completion: "Oct 2025",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "Green Meadows Layout - Selvapuram",
    location: "Selvapuram, Coimbatore",
    category: "ongoing",
    availablePlots: 18,
    totalPlots: 55,
    propertyType: "Budget Residential Plots",
    sizeRange: "800 - 1800",
    priceRange: "₹12L - ₹25L",
    amenities: ["Compound Wall", "Tar Road", "Plantation"],
    status: "Selling Fast",
    completion: "Aug 2025",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  {
    id: "all",
    label: "All Projects",
    count: allProjects.length,
  },
  {
    id: "ongoing",
    label: "Ongoing",
    count: allProjects.filter((p) => p.category === "ongoing").length,
  },
  {
    id: "upcoming",
    label: "Upcoming",
    count: allProjects.filter((p) => p.category === "upcoming").length,
  },
  {
    id: "completed",
    label: "Completed",
    count: allProjects.filter((p) => p.category === "completed").length,
  },
];

function getStatusColor(status: string) {
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

const heroImageUrl =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("all");

  const filteredProjects = allProjects.filter((project) => {
    const categoryMatch =
      selectedCategory === "all" || project.category === selectedCategory;
    const searchMatch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatch =
      locationFilter === "all" || project.location === locationFilter;

    return categoryMatch && searchMatch && locationMatch;
  });

  const locations = [
    "all",
    ...Array.from(new Set(allProjects.map((p) => p.location))),
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col min-w-full">
      <Header />

      <main className="flex-grow">
        {/* HERO */}
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
              Land Projects in Coimbatore
            </h1>
            <p className="text-2xl font-light opacity-90 mb-4">
              Explore curated residential and commercial land developments
              across Coimbatore.
            </p>
            <p className="text-lg opacity-90 mb-12">
              From ongoing DTCP-approved layouts to upcoming launches and fully
              completed communities, find the right land investment for your
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#b6dbfa] to-[#4886e3] text-white hover:brightness-110 rounded-lg px-10 py-4 font-semibold"
                asChild
              >
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#1b4dbf] to-[#4665ff] text-white hover:brightness-110 rounded-lg px-10 py-4 font-semibold"
                asChild
              >
                <Link to="/contact">Book a Site Visit</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
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

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search layouts or locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select
                  value={locationFilter}
                  onValueChange={setLocationFilter}
                >
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

        {/* PROJECT CARDS */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col"
                >
                  {/* Image header */}
                  <div className="relative overflow-hidden rounded-t-2xl h-44 w-full">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                    <Badge
                      className={cn(
                        "absolute top-3 right-3",
                        getStatusColor(project.status)
                      )}
                    >
                      {project.status}
                    </Badge>
                    {project.category !== "completed" && (
                      <Badge
                        variant="outline"
                        className="absolute top-3 left-3 bg-white/90 text-[#095af7]"
                      >
                        {project.availablePlots} Plots Available
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#095af7] mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-[#227be6] mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Project Type</span>
                        <span className="font-medium">
                          {project.propertyType}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Plot Size Range</span>
                        <span className="font-medium">
                          {project.sizeRange} sq ft
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Price Range</span>
                        <span className="font-bold text-[#095af7]">
                          {project.priceRange}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Completion</span>
                        <span className="font-medium">
                          {project.completion}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">
                        Key Amenities:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.amenities.slice(0, 3).map((amenity, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs text-[#095af7] bg-[#e3f0fa]"
                          >
                            {amenity}
                          </Badge>
                        ))}
                        {project.amenities.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="text-xs text-[#095af7] bg-[#e3f0fa]"
                          >
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
                        <Link
                          to={`/contact?project=${encodeURIComponent(
                            project.name
                          )}`}
                        >
                          Contact
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <Home className="w-16 h-16 text-[#4886e3] mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold text-[#095af7] mb-2">
                  No Projects Found
                </h3>
                <p className="text-[#227be6] mb-4">
                  Try adjusting your filters or search criteria
                </p>
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
