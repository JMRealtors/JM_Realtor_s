import { Building, MapPin, Users, Home, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Building,
    number: "15+",
    label: "Projects",
    description: "Successfully completed"
  },
  {
    icon: MapPin,
    number: "1200+",
    label: "Villa Plots",
    description: "Premium locations"
  },
  {
    icon: Users,
    number: "800+",
    label: "Happy Customers",
    description: "Satisfied families"
  },
  {
    icon: Home,
    number: "2M+",
    label: "Sq.Ft Delivered",
    description: "Quality construction"
  },
  {
    icon: TrendingUp,
    number: "15M+",
    label: "Sq.Ft in Pipeline",
    description: "Future developments"
  }
];

export function Statistics() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}