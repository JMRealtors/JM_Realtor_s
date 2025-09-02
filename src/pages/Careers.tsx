import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Briefcase, ArrowRight, Heart } from "lucide-react";

const openPositions = [
  {
    title: "Senior Sales Manager",
    department: "Sales",
    location: "Bangalore",
    type: "Full-time",
    experience: "5-8 years",
    description: "Lead our sales team to achieve exceptional results and build lasting client relationships.",
    requirements: ["Real Estate experience", "Team leadership", "Client management", "Business development"]
  },
  {
    title: "Project Manager",
    department: "Operations", 
    location: "Bangalore",
    type: "Full-time",
    experience: "4-6 years",
    description: "Oversee construction projects from planning to completion ensuring quality and timelines.",
    requirements: ["Construction management", "Project planning", "Quality control", "Vendor coordination"]
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Bangalore",
    type: "Full-time", 
    experience: "2-4 years",
    description: "Drive our digital marketing initiatives and enhance our online presence.",
    requirements: ["Digital marketing", "SEO/SEM", "Social media", "Content creation"]
  },
  {
    title: "Customer Relationship Manager",
    department: "Customer Service",
    location: "Bangalore", 
    type: "Full-time",
    experience: "2-3 years",
    description: "Ensure exceptional customer experience throughout the property buying journey.",
    requirements: ["Customer service", "Communication skills", "Problem solving", "CRM systems"]
  },
  {
    title: "Finance Analyst",
    department: "Finance",
    location: "Bangalore",
    type: "Full-time",
    experience: "3-5 years", 
    description: "Support financial planning, analysis, and reporting for our growing operations.",
    requirements: ["Financial analysis", "Excel proficiency", "Real estate finance", "Reporting"]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and annual health check-ups"
  },
  {
    icon: Users,
    title: "Work-Life Balance",
    description: "Flexible working hours, work from home options, and paid time off"
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Learning opportunities, skill development programs, and clear career progression"
  },
  {
    icon: MapPin,
    title: "Great Location",
    description: "Modern office spaces in prime locations with excellent connectivity"
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Build Your Career While We Build Dreams
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Be part of a dynamic team that's transforming the real estate landscape. 
                We offer exciting opportunities, competitive benefits, and a culture of growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose EstateCore?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in nurturing talent and providing an environment where you can thrive personally and professionally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-card hover:shadow-card-hover transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground">
                Explore current opportunities and find your perfect role
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="bg-gradient-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <h3 className="text-xl font-semibold text-foreground">{position.title}</h3>
                          <Badge variant="default">{position.department}</Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {position.experience}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">{position.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {position.requirements.map((req, reqIndex) => (
                            <Badge key={reqIndex} variant="secondary" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:min-w-32">
                        <Button variant="default" className="w-full lg:w-auto">
                          Apply Now
                        </Button>
                        <Button variant="outline" className="w-full lg:w-auto">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see a role that fits? We're always looking for talented individuals.
              </p>
              <Button variant="outline" size="lg">
                Send Us Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Culture</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At EstateCore, we foster a collaborative environment where innovation thrives, 
                  diversity is celebrated, and every team member is empowered to make a meaningful impact.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Inclusive and diverse workplace where everyone belongs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Continuous learning and professional development opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Recognition and rewards for outstanding performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Open communication and transparent leadership</span>
                  </li>
                </ul>
                <Button variant="default" size="lg">
                  Learn About Our Values
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="w-24 h-24 text-primary opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-8 opacity-90">
                Take the next step in your career and join a team that's building the future of real estate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Browse Open Positions
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact HR Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}