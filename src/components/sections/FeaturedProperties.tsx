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
import plot from "/plots.jpg";
const properties = [
  {
    id: 1,
    title: "DTCP Approved Residential Plot - Okkilipalayam",
    location: "Okkilipalayam, Coimbatore",
    price: "₹15.5 Lakhs",
    image: propertyBw1,
    size: "5.2 Cents",
    pricePerUnit: "₹3.0L / Cent",
    features: ["DTCP Approved", "Corner Plot", "Gated Community"],
    status: "Available",
    statusColor: "bg-blue-100 text-blue-700",
    type: "Residential Plot",
    description:
      "Premium DTCP approved residential plot in a well-planned layout with tar road, drainage and street lights. Ideal for investment or immediate construction.",
    seller: {
      name: "Raman Kumar",
      phone: "+91 98765 43210",
      email: "raman@example.com",
      verified: true,
    },
  },
  {
    id: 2,
    title: "Residential Plot Near Colleges - Othakal Mandapam",
    location: "Othakal Mandapam, Coimbatore",
    price: "₹12.8 Lakhs",
    image: propertyBw2,
    size: "4.0 Cents",
    pricePerUnit: "₹3.2L / Cent",
    type: "Residential Plot",
    features: ["Near Engineering Colleges", "Good Ground Water", "Tar Road"],
    status: "Sold",
    statusColor: "bg-red-100 text-red-700",
    description:
      "Well-located residential plot close to leading colleges and bus stop. Calm residential locality with good rental potential.",
    seller: {
      name: "Urban Realty",
      phone: "+91 955 987 6543",
      email: "info@urbanrealty.com",
      verified: true,
    },
  },
  {
    id: 3,
    title: "Budget Residential Plot - Kinathukadavu",
    location: "Kinathukadavu, Coimbatore",
    price: "₹8.9 Lakhs",
    image: propertyBw3,
    size: "3.5 Cents",
    pricePerUnit: "₹2.5L / Cent",
    type: "Residential Plot",
    features: ["Bus Route Layout", "Street Lights", "Calm Locality"],
    status: "Available",
    statusColor: "bg-green-100 text-green-700",
    description:
      "Budget-friendly residential plot suitable for first-time buyers and long-term investors, with easy access to Kinathukadavu town.",
    seller: {
      name: "Loft Living",
      phone: "+91 555 246 8013",
      email: "plots@loftliving.com",
      verified: false,
    },
  },
  {
    id: 4,
    title: "Commercial Plot - Pollachi Main Road",
    location: "Pollachi Road, Coimbatore",
    price: "₹45 Lakhs",
    image: propertyBw4,
    size: "8.0 Cents",
    pricePerUnit: "₹5.6L / Cent",
    type: "Commercial Plot",
    features: ["Main Road Frontage", "High Visibility", "Ideal for Showroom"],
    status: "Under Contract",
    statusColor: "bg-yellow-100 text-yellow-700",
    description:
      "Commercial plot with excellent road frontage on Pollachi main road. Suitable for showroom, office, or commercial complex.",
    seller: {
      name: "SF Corporate Realty",
      phone: "+91 555 789 3456",
      email: "office@sfcorporate.com",
      verified: false,
    },
  },
  {
    id: 5,
    title: "Residential Plot Near Schools - Aathupalam",
    location: "Aathupalam, Coimbatore",
    price: "₹10.5 Lakhs",
    image: propertyBw5,
    size: "4.2 Cents",
    pricePerUnit: "₹2.5L / Cent",
    type: "Residential Plot",
    features: ["Near Schools", "Good Water Source", "Residential Layout"],
    status: "Available",
    statusColor: "bg-green-100 text-green-700",
    description:
      "Ideal residential plot for families, located near schools, markets, and with easy access to main roads.",
    seller: {
      name: "Hari Home Sales",
      phone: "+91 555 334 7788",
      email: "sales@harihomes.com",
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
            Featured Land Parcels
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Handpicked plots in and around Coimbatore with clear titles and
            promising growth potential.
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
                    className="w-full h-64 object-cover transition-all duration-700"
                    style={{ filter: "none" }}
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
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">
                      {property.location}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    Size: <span className="font-medium">{property.size}</span>{" "}
                    &bull;{" "}
                    <span className="font-medium">
                      {property.pricePerUnit}
                    </span>
                  </p>
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
                          Plot Size
                        </div>
                        <div className="font-semibold text-gray-800">
                          {property.size}
                        </div>
                      </div>
                      <div>
                        <div className="uppercase text-xs text-gray-500">
                          Price / Unit
                        </div>
                        <div className="font-semibold text-gray-800">
                          {property.pricePerUnit}
                        </div>
                      </div>
                      <div>
                        <div className="uppercase text-xs text-gray-500">
                          Plot Type
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

        {/* Load More → Projects */}
        <div
          className={`text-center ${isVisible ? "animate-scale" : "opacity-0"}`}
        >
          <Button
            size="lg"
            className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition duration-300"
            asChild
          >
            <Link to="/projects">
              Load More <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
