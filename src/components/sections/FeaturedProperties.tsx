import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  MapPin,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle2,
  Share2,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import propertyBw1 from "@/assets/property-bw-1.jpg";
import propertyBw2 from "@/assets/property-bw-2.jpg";
import propertyBw3 from "@/assets/property-bw-3.jpg";
import propertyBw4 from "@/assets/property-bw-4.jpg";
import propertyBw5 from "@/assets/property-bw-5.jpg";

const properties = [
  {
    id: 1,
    title: "Premium Plot",
    location: "Coimbatore District",
    price: "₹15.5 Lakhs",
    image: propertyBw1,
    size: "5.2 Cents",
    pricePerAcre: "₹3.0L/Cent",
    roi: "+22%",
    features: ["DTCP Approved", "Corner Plot", "Gated Community"],
    status: "Available",
    statusColor: "bg-blue-100 text-blue-700",
    type: "Plot",
    description:
      "Premium plot in well-planned layout with all modern amenities and excellent connectivity.",
    seller: {
      name: "Raman Kumar",
      phone: "+91 98765 43210",
      email: "raman@example.com",
      verified: true,
    },
  },
  {
    id: 2,
    title: "Modern Penthouse",
    location: "Manhattan, NY",
    price: "$3,200,000",
    pricePerArea: "$1,142/sqft",
    image: propertyBw2,
    size: "2,800 sqft",
    beds: 3,
    baths: 3,
    type: "Penthouse",
    roi: "+18%",
    status: "Sold",
    statusColor: "bg-red-100 text-red-700",
    features: [
      "Terrace",
      "Floor-to-ceiling windows",
      "Smart Home",
      "Designer Finishes",
    ],
    description: `Located in the heart of Manhattan, this modern penthouse offers urban sophistication and stunning skyline views.`,
    seller: {
      name: "Urban Realty",
      phone: "+1 555 987 6543",
      email: "info@penthouseurban.com",
      verified: true,
    },
  },
  {
    id: 3,
    title: "Downtown Loft",
    location: "Los Angeles, CA",
    price: "$1,750,000",
    pricePerArea: "$921/sqft",
    image: propertyBw3,
    size: "1,900 sqft",
    beds: 2,
    baths: 2,
    type: "Loft",
    roi: "+15%",
    status: "Available",
    statusColor: "bg-green-100 text-green-700",
    features: ["Exposed Brick", "Rooftop Access", "Gourmet Kitchen"],
    description: `This chic downtown loft combines industrial style with modern comforts.`,
    seller: {
      name: "LA Living",
      phone: "+1 555 246 8013",
      email: "loft@downtownla.com",
      verified: false,
    },
  },
  {
    id: 4,
    title: "Corporate Office",
    location: "San Francisco, CA",
    price: "$4,500,000",
    pricePerArea: "$375/sqft",
    image: propertyBw4,
    size: "12,000 sqft",
    beds: 0,
    baths: 8,
    type: "Office Space",
    roi: "+9%",
    status: "Under Contract",
    statusColor: "bg-yellow-100 text-yellow-700",
    features: ["Meeting Rooms", "High Security", "Downtown Address"],
    description: `Prime corporate office space located in San Francisco’s financial district.`,
    seller: {
      name: "SF Corporate Realty",
      phone: "+1 555 789 3456",
      email: "office@sfcorporate.com",
      verified: false,
    },
  },
  {
    id: 5,
    title: "Family Townhouse",
    location: "Chicago, IL",
    price: "$890,000",
    pricePerArea: "$371/sqft",
    image: propertyBw5,
    size: "2,400 sqft",
    beds: 4,
    baths: 3,
    type: "Townhouse",
    roi: "+13%",
    status: "Available",
    statusColor: "bg-green-100 text-green-700",
    features: ["Near Schools", "Garage", "Backyard Patio"],
    description: `Perfect family townhouse located near great schools and parks.`,
    seller: {
      name: "Chicago Home Sales",
      phone: "+1 555 334 7788",
      email: "familyhome@chicago.com",
      verified: true,
    },
  },
];

export function FeaturedProperties() {
  const [isVisible, setIsVisible] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Explore premium investment opportunities handpicked for growth,
            security, and value.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {properties.map((property, index) => (
            <Dialog
              open={openId === property.id}
              onOpenChange={(open) => setOpenId(open ? property.id : null)}
              key={property.id}
            >
              <Card
                className={`group overflow-hidden shadow-md hover:shadow-xl border transition-all duration-500 ${
                  isVisible
                    ? "animate-slide-up opacity-100"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${property.statusColor} border-0`}
                  >
                    {property.status}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded shadow">
                    <span className="text-sm font-semibold text-gray-800">
                      {property.price}
                    </span>
                  </div>
                </div>

                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-700 transition">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      {property.location}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 border-blue-200 text-blue-700 bg-white hover:bg-blue-50"
                    onClick={() => setOpenId(property.id)}
                  >
                    View Details <ArrowRight className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>

              {/* MODAL CONTENT */}
              <DialogContent className="max-w-3xl rounded-2xl p-0 bg-white border-0 overflow-hidden">
                <div className="flex flex-col md:flex-row md:gap-6 w-full">
                  {/* Left: Image */}
                  <div className="md:w-[48%] w-full p-6">
                    <div className="flex gap-2 items-center mb-4">
                      <Badge
                        className={`rounded px-3 py-1 ${property.statusColor}`}
                      >
                        {property.status}
                      </Badge>
                    </div>
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-56 object-cover rounded-lg mb-3 border"
                    />
                  </div>

                  {/* Right: Details */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                          {property.title}
                        </h2>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="h-5 w-5 mr-1" />{" "}
                          {property.location}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="border">
                          <Heart className="w-5 h-5 text-gray-700" />
                        </Button>
                        <Button variant="ghost" size="icon" className="border">
                          <Share2 className="w-5 h-5 text-gray-700" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="uppercase text-xs text-gray-500">
                          Total Price
                        </div>
                        <div className="font-bold text-xl text-gray-900">
                          {property.price}
                        </div>
                      </div>
                      <div>
                        <div className="uppercase text-xs text-gray-500">
                          Size
                        </div>
                        <div className="font-semibold text-gray-800">
                          {property.size}
                        </div>
                      </div>
                      <div>
                        <div className="uppercase text-xs text-gray-500">
                          ROI
                        </div>
                        <div className="font-semibold text-blue-700">
                          {property.roi}
                        </div>
                      </div>
                      <div>
                        <div className="uppercase text-xs text-gray-500">
                          Type
                        </div>
                        <div className="font-semibold text-gray-800">
                          {property.type}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-gray-900">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {property.features?.map((f, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-xs font-medium"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Seller */}
                    <div className="mb-6 border rounded-xl bg-gray-50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-800">
                          Seller Information
                        </span>
                        {property.seller.verified && (
                          <span className="ml-2 text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4" /> Verified
                          </span>
                        )}
                      </div>
                      <div className="font-medium text-gray-900">
                        {property.seller.name}
                      </div>
                      <div className="flex gap-3 mt-2">
                        <a
                          href={`tel:${property.seller.phone}`}
                          className="inline-flex items-center rounded border px-3 py-1 bg-white text-gray-800 hover:bg-gray-100 text-sm font-medium"
                        >
                          <Phone className="w-4 h-4 mr-1" /> Call
                        </a>
                        <a
                          href={`mailto:${property.seller.email}`}
                          className="inline-flex items-center rounded border px-3 py-1 bg-white text-gray-800 hover:bg-gray-100 text-sm font-medium"
                        >
                          <Mail className="w-4 h-4 mr-1" /> Email
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 hover:brightness-110 rounded-lg">
                        Schedule Site Visit
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-blue-500 text-blue-700 font-semibold py-3 rounded-lg"
                      >
                        Request Callback
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* View All */}
        <div
          className={`text-center ${isVisible ? "animate-scale" : "opacity-0"}`}
        >
          <Button
            size="lg"
            className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition duration-300"
            asChild
          >
            <Link to="/properties">
              View All Properties <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
