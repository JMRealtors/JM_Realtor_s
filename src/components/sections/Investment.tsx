import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, Users, DollarSign, Percent, Building, PieChart, Target, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

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
    target: "$5,250,000",
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
    target: "$11,000,000",
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
    target: "$3,825,000",
  },
];

const investorTypes = [
  {
    type: "Venture Capitalists",
    icon: Building,
    minInvestment: "$500,000+",
    equityRange: "20-40%",
    benefits: ["Board seats", "Strategic guidance", "Network access", "Due diligence support"],
    color: "bg-primary",
  },
  {
    type: "Angel Investors",
    icon: Users,
    minInvestment: "$25,000+",
    equityRange: "5-15%",
    benefits: ["Mentorship", "Industry connections", "Flexible terms", "Quick decisions"],
    color: "bg-accent",
  },
];

export function Investment() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [equityShare, setEquityShare] = useState("");
  const sectionRef = useRef(null);
  const { toast } = useToast();

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

  const calculateEquity = (amount, project) => {
    const num = parseFloat(amount.replace(/,/g, ""));
    const total = parseFloat(project.totalValue.replace(/[^\d.-]/g, ""));
    const available = parseFloat(project.equityAvailable.replace("%", ""));
    const equity = (num / total) * 100;
    return isNaN(equity) ? "" : Math.min(equity, available).toFixed(2);
  };

  const handleSubmit = () => {
    if (!selectedProject || !investmentAmount) return;
    toast({
      title: "Investment Submitted",
      description: `You expressed interest investing $${investmentAmount} in ${selectedProject.title}.`,
    });
    setSelectedProject(null);
    setInvestmentAmount("");
    setEquityShare("");
  };

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-primary mb-3">Investment Opportunities</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Partner with venture capitalists and angel investors in premium real estate ventures.
          </p>
        </div>

        {/* Investor Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {investorTypes.map((investor, idx) => {
            const Icon = investor.icon;
            return (
              <Card key={idx} className={`shadow p-6 rounded-lg`}>
                <div className="flex items-center mb-4 space-x-4">
                  <div className={`${investor.color} p-3 rounded-lg text-white`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{investor.type}</h3>
                    <p className="text-muted-foreground">Min Investment: {investor.minInvestment}</p>
                  </div>
                </div>
                <Badge variant="outline" className="mb-4">{`Equity Range: ${investor.equityRange}`}</Badge>
                <ul className="list-disc ml-6 space-y-1 text-sm text-muted-foreground">
                  {investor.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Investment Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {investmentOpportunities.map((project, idx) => (
            <Card key={project.id} className={`shadow p-6 rounded-lg max-w-md mx-auto`}>
              <CardHeader className="flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  {project.title} <span className="ml-3 text-lg font-semibold text-primary">{project.totalValue}</span>
                </h3>
                <Badge variant={project.riskLevel === "Low" ? "default" : project.riskLevel === "Medium" ? "secondary" : "destructive"}>
                  {project.riskLevel} Risk
                </Badge>
              </CardHeader>
              <p className="text-muted-foreground mb-4">{project.location}</p>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                <div>Min Investment: <b>{project.minInvestment}</b></div>
                <div>Expected ROI: <b>{project.expectedReturn}</b></div>
                <div>Equity Available: <b>{project.equityAvailable}</b></div>
                <div>Timeline: <b>{project.timeline}</b></div>
              </div>
              <div className="mb-4">
                <div className="mb-1 text-sm font-semibold text-muted-foreground">Funding Progress</div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-primary rounded-full h-2 transition-all" style={{width: `${project.raised}%`}}></div>
                </div>
                <div className="text-xs text-muted-foreground">Target: {project.target}</div>
              </div>
              <p className="mb-6">{project.description}</p>
              
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setSelectedProject(project)}
                >
                  Invest Now
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to={`/contact?project=${project.id}`}>Contact</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{selectedProject.title} - Investment Calculator</DialogTitle>
                <DialogDescription>Enter your investment amount to see estimated equity.</DialogDescription>
              </DialogHeader>
              <Input type="number" placeholder="Investment Amount ($)" value={investmentAmount} onChange={(e) => setInvestmentAmount(e.target.value)} />
              <div className="mt-4 flex justify-between text-sm">
                <span>Estimated Equity:</span>
                <span className="font-semibold">
                  {investmentAmount && selectedProject ? calculateEquity(investmentAmount, selectedProject) + "%" : "0%"}
                </span>
              </div>
              <Button className="mt-6 w-full" onClick={handleSubmit}>
                Submit Investment
              </Button>
            </DialogContent>
          </Dialog>
        )}

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" size="lg">
            <Link to="/investments">
              Schedule Consultation <PieChart className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
