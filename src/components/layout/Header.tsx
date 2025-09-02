import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border animate-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">EstateCore</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 animate-fade-in">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative",
                  location.pathname === item.href
                    ? "text-primary after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:animate-scale-in"
                    : "text-muted-foreground"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex animate-fade-in">
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleGetInTouch}
              className="hover:scale-105 transition-all duration-300 shadow-elegant"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:scale-105 transition-transform duration-300"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-slide-in-right">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 hover:scale-105",
                  location.pathname === item.href
                    ? "text-primary bg-accent animate-scale-in"
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                )}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button 
                variant="default" 
                size="sm" 
                className="w-full hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleGetInTouch();
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}