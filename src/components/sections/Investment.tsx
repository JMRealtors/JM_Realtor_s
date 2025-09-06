import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, Users, DollarSign, Percent, Building, PieChart, Target, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const investmentOpportunities = [
  {
    id: 1,
    title: "Luxury Residential Complex",
    location: "Beverly Hills, CA",
    totalValue: "$15,000,000",
    minInvestment: "$100,000",
    expectedReturn: "18-22%",
    equityAvailable: "35%",
    investorType: "VC & Angel",
    timeline: "24 months",
    riskLevel: "Medium",
    description: "Premium residential development with high-end amenities and guaranteed returns.",
    raised: 65,
    target: "$5,250,000"
  },
  {
    id: 2,
    title: "Commercial Office Tower", 
    location: "Manhattan, NY",
    totalValue: "$28,000,000",
    minInvestment: "$250,000",
    expectedReturn: "15-20%",
    equityAvailable: "40%",
    investorType: "VC Preferred",
    timeline: "36 months",
    riskLevel: "Low",
    description: "Class A commercial building in prime Manhattan location with long-term tenants.",
    raised: 80,
    target: "$11,200,000"
  },
  {
    id: 3,
    title: "Mixed-Use Development",
    location: "Austin, TX", 
    totalValue: "$8,500,000",
    minInvestment: "$50,000",
    expectedReturn: "20-25%",
    equityAvailable: "45%",
    investorType: "Angel Friendly",
    timeline: "18 months",
    riskLevel: "High",
    description: "Innovative mixed-use project combining retail, office, and residential spaces.",
    raised: 40,
    target: "$3,825,000"
  }
];

const investorTypes = [
  {
    type: "Venture Capitalists",
    icon: Building,
    minInvestment: "$500,000+",
    equityRange: "20-40%",
    benefits: ["Board seats", "Strategic guidance", "Network access", "Due diligence support"],
    color: "bg-primary"
  },
  {
    type: "Angel Investors", 
    icon: Users,
    minInvestment: "$25,000+",
    equityRange: "5-15%",
    benefits: ["Mentorship", "Industry connections", "Flexible terms", "Quick decisions"],
    color: "bg-estate-gold"
  }
];

export function Investment() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof investmentOpportunities[0] | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [equityShare, setEquityShare] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const calculateEquity = (amount: string, project: typeof investmentOpportunities[0]) => {
    const investment = parseFloat(amount.replace(/,/g, ""));
    const totalValue = parseFloat(project.totalValue.replace(/[$,]/g, ""));
    const availableEquity = parseFloat(project.equityAvailable.replace("%", ""));
    const maxEquityFromInvestment = (investment / totalValue) * 100;
    return Math.min(maxEquityFromInvestment, availableEquity).toFixed(2);
  };

  const handleInvestmentSubmit = () => {
    if (!selectedProject || !investmentAmount) return;
    
    toast({
      title: "Investment Interest Submitted",
      description: `We'll contact you about your $${investmentAmount} investment in ${selectedProject.title}.`,
    });
    
    setInvestmentAmount("");
    setEquityShare("");
    setSelectedProject(null);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Investment Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partner with venture capitalists and angel investors in premium real estate ventures. 
            Secure equity stakes in high-growth properties with guaranteed returns.
          </p>
        </div>

        {/* Investor Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {investorTypes.map((investor, index) => {
            const Icon = investor.icon;
            return (
              <Card 
                key={investor.type}
                className={`shadow-card hover:shadow-card-hover transition-all duration-500 ${
                  isVisible 
                    ? "animate-slide-up opacity-100" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`${investor.color} text-white p-3 rounded-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{investor.type}</CardTitle>
                      <p className="text-muted-foreground">Min: {investor.minInvestment}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      Equity Range: {investor.equityRange}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {investor.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Target className="h-4 w-4 text-primary mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Investment Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {investmentOpportunities.map((opportunity, index) => (
            <Card 
              key={opportunity.id}
              className={`shadow-card hover:shadow-card-hover transition-all duration-500 ${
                isVisible 
                  ? "animate-scale opacity-100" 
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 250}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  <Badge 
                    variant={opportunity.riskLevel === "Low" ? "default" : 
                            opportunity.riskLevel === "Medium" ? "secondary" : "destructive"}
                  >
                    {opportunity.riskLevel} Risk
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{opportunity.location}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Total Value</p>
                    <p className="font-semibold">{opportunity.totalValue}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Min Investment</p>
                    <p className="font-semibold text-primary">{opportunity.minInvestment}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Expected Return</p>
                    <p className="font-semibold text-estate-success">{opportunity.expectedReturn}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Equity Available</p>
                    <p className="font-semibold">{opportunity.equityAvailable}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Funding Progress</span>
                    <span>{opportunity.raised}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${opportunity.raised}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Target: {opportunity.target} • Timeline: {opportunity.timeline}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {opportunity.description}
                </p>

                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">
                    {opportunity.investorType}
                  </Badge>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full"
                      onClick={() => setSelectedProject(opportunity)}
                    >
                      <DollarSign className="mr-2 h-4 w-4" />
                      Invest Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Investment Calculator</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="investment">Investment Amount ($)</Label>
                        <Input
                          id="investment"
                          placeholder="Enter amount"
                          value={investmentAmount}
                          onChange={(e) => {
                            setInvestmentAmount(e.target.value);
                            if (selectedProject) {
                              setEquityShare(calculateEquity(e.target.value, selectedProject));
                            }
                          }}
                        />
                      </div>
                      
                      {investmentAmount && selectedProject && (
                        <div className="p-4 bg-muted rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Estimated Equity:</span>
                            <span className="text-lg font-bold text-primary">{equityShare}%</span>
                          </div>
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span>Project:</span>
                            <span>{selectedProject.title}</span>
                          </div>
                        </div>
                      )}
                      
                      <Button onClick={handleInvestmentSubmit} className="w-full">
                        Submit Investment Interest
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <Button size="lg" variant="premium" asChild>
            <a href="mailto:investments@estatecore.com">
              <PieChart className="mr-2 h-5 w-5" />
              Schedule Investment Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}