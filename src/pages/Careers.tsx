import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Briefcase, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const opportunities = [
  {
    title: "Luxury Residential Project",
    type: "Real Estate Development",
    location: "Bangalore",
    investment: "₹10-20 Cr",
    duration: "3-5 years",
    description: "Invest in premium residential apartments located in prime urban hubs.",
    highlights: ["High ROI potential", "Prime location", "Sustainable design"]
  },
  {
    title: "Commercial Office Spaces",
    type: "Commercial Real Estate",
    location: "Hyderabad",
    investment: "₹15-25 Cr",
    duration: "5-7 years",
    description: "Grade-A office space development with strong demand from IT companies.",
    highlights: ["Long-term leases", "Corporate demand", "Steady cash flow"]
  },
  {
    title: "Retail Mall Project",
    type: "Retail Development",
    location: "Chennai",
    investment: "₹20-30 Cr",
    duration: "4-6 years",
    description: "A modern shopping complex catering to luxury and lifestyle brands.",
    highlights: ["High footfall", "Premium brands", "Strategic location"]
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Trusted Partnerships",
    description: "We build long-term relationships with angel investors and venture capitalists."
  },
  {
    icon: Users,
    title: "Community Growth",
    description: "Your investment directly supports growing residential and commercial communities."
  },
  {
    icon: Briefcase,
    title: "Strong ROI",
    description: "Proven track record of delivering sustainable and profitable returns."
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Projects are strategically located in rapidly growing metropolitan cities."
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-gray-800">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Investment Opportunities</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Partner with us as an Angel Investor & Grow with EstateCore
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                We offer carefully curated real estate investment opportunities with
                high growth potential, prime locations, and sustainable long-term value.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Partner with EstateCore?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We bring together innovation, transparency, and profitability in every investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-200 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Current Investment Opportunities
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore projects open for angel investors and strategic partners
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <h3 className="text-xl font-semibold text-foreground">{opportunity.title}</h3>
                          <Badge variant="default">{opportunity.type}</Badge>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {opportunity.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {opportunity.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {opportunity.investment}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">{opportunity.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {opportunity.highlights.map((highlight, highlightIndex) => (
                            <Badge key={highlightIndex} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:min-w-32">
                        <Button variant="default" className="w-full lg:w-auto" asChild>
                          <Link to="/contact">Invest Now</Link>
                        </Button>
                        <Button variant="outline" className="w-full lg:w-auto" asChild>
                          <Link to="/contact">Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto text-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join hands as an angel investor and grow your wealth while building sustainable communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link to="/contact">Become an Investor</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                  <Link to="/about">Learn More About Us</Link>
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
