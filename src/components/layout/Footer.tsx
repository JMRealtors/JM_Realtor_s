import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Villa Plots", href: "/projects?type=villa-plots" },
      { name: "Gated Communities", href: "/projects?type=gated-communities" },
      { name: "Premium Villas", href: "/projects?type=premium-villas" },
      { name: "Investment Properties", href: "/projects?type=investment" },
      { name: "Site Development", href: "/contact" }
    ]
  },
  {
    title: "Locations",
    links: [
      { name: "Whitefield", href: "/projects?location=whitefield" },
      { name: "Electronic City", href: "/projects?location=electronic-city" },
      { name: "Sarjapur Road", href: "/projects?location=sarjapur" },
      { name: "Hennur Road", href: "/projects?location=hennur" },
      { name: "JP Nagar", href: "/projects?location=jp-nagar" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "RERA Information", href: "/rera" },
      { name: "Refund Policy", href: "/refund" },
      { name: "Disclaimer", href: "/disclaimer" }
    ]
  }
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Brigade Road, Bangalore - 560001, Karnataka, India"
  },
  {
    icon: Phone,
    text: "+91 98765 43210 | +91 80 4567 8900"
  },
  {
    icon: Mail,
    text: "info@estatecore.com | sales@estatecore.com"
  }
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
];

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup functionality
    console.log("Newsletter signup submitted");
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with Our Latest Projects
              </h3>
              <p className="text-white/70 text-lg">
                Get exclusive updates on new launches, special offers, and real estate insights.
              </p>
            </div>
            <div className="animate-slide-up animation-delay-200">
              <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
                <Button type="submit" variant="secondary" className="bg-primary hover:bg-primary-hover">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold">EstateCore</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Building dreams and creating communities for over 6 years. We are committed to 
              delivering exceptional residential developments that stand the test of time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title} className={`animate-fade-in animation-delay-${(sectionIndex + 1) * 100}`}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm">
              © 2024 EstateCore Real Estate. All rights reserved. | RERA Reg No: PRM/KA/RERA/1234/567/AG/890/2024
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/70 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}