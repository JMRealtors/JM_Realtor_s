import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Vision",
    description: "To create sustainable and innovative living spaces that enhance communities and improve quality of life."
  },
  {
    icon: Heart,
    title: "Mission", 
    description: "Delivering exceptional real estate experiences through integrity, quality, and customer-centric solutions."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards in design, construction, and service delivery across all our projects."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building more than homes - we create vibrant communities where families can grow and thrive together."
  }
];

const achievements = [
  { year: "2018", milestone: "Company Founded" },
  { year: "2019", milestone: "First Project Delivered" },
  { year: "2021", milestone: "1000+ Happy Families" },
  { year: "2023", milestone: "15+ Projects Completed" },
  { year: "2024", milestone: "Industry Excellence Award" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About EstateCore</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Building Dreams, Creating Communities, Delivering Excellence
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                With over 6 years of experience in the real estate industry, we have established ourselves 
                as a trusted name in residential development, committed to creating exceptional living experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded with a vision to transform the real estate landscape, EstateCore has grown from a 
                  small team with big dreams to a leading developer in premium residential projects. Our journey 
                  began with a simple belief: every family deserves a home that reflects their aspirations.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Today, we continue to innovate and set new standards in the industry, combining modern design 
                  with sustainable practices to create communities that stand the test of time.
                </p>
                <Button variant="default" size="lg">
                  View Our Projects
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

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do, from planning to delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-gradient-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                Key milestones that have shaped our growth and success
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <Badge variant="default" className="text-lg px-4 py-2 min-w-20">
                      {achievement.year}
                    </Badge>
                    <div className="flex-1 h-px bg-border"></div>
                    <div className="text-lg font-medium text-foreground flex-1 text-right">
                      {achievement.milestone}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Future?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of satisfied families who have made EstateCore their trusted partner 
                in finding the perfect home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Explore Properties
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}