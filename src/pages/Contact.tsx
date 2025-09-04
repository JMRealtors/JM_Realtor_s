import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["EstateCore Headquarters", "Brigade Road, Bangalore - 560001", "Karnataka, India"],
    action: "Get Directions"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 80 4567 8900", "Available Mon-Sat, 9 AM - 7 PM"],
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@estatecore.com", "sales@estatecore.com", "We'll respond within 24 hours"],
    action: "Send Email"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9 AM - 7 PM", "Saturday: 9 AM - 6 PM", "Sunday: By appointment"],
    action: "Schedule Meeting"
  }
];

const inquiryTypes = [
  "Property Inquiry",
  "Site Visit Request", 
  "Investment Consultation",
  "Sales Information",
  "Customer Support",
  "Career Opportunities",
  "Partnership",
  "General Inquiry"
];

const officeLocations = [
  {
    name: "Headquarters",
    address: "Brigade Road, Bangalore",
    phone: "+91 80 4567 8900",
    manager: "Rajesh Kumar"
  },
  {
    name: "Whitefield Branch",
    address: "ITPL Main Road, Whitefield",
    phone: "+91 80 4567 8901", 
    manager: "Priya Sharma"
  },
  {
    name: "Electronic City Branch",
    address: "Hosur Road, Electronic City",
    phone: "+91 80 4567 8902",
    manager: "Amit Patel"
  }
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Let's Discuss Your Real Estate Dreams
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Our expert team is here to help you find the perfect property, answer your questions, 
                and guide you through every step of your real estate journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card hover:shadow-card-hover transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-6 h-6 text-primary" />
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Enter your first name" 
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Enter your last name" 
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="your.email@example.com" 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            placeholder="+91 98765 43210" 
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the type of inquiry" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type, index) => (
                              <SelectItem key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your requirements, questions, or how we can help you..."
                          className="min-h-32"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" variant="default" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="default" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Site Visit
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      Request Callback
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="w-4 h-4 mr-2" />
                      Download Brochure
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat with Expert
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Our Offices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {officeLocations.map((office, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium text-foreground">{office.name}</h4>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                        <p className="text-sm text-muted-foreground">{office.phone}</p>
                        <p className="text-xs text-primary">Manager: {office.manager}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our services and properties
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What is the booking process?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our booking process is simple: choose your plot, book with a token amount, 
                    complete documentation, and move forward with construction.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Do you provide financing options?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we have partnerships with leading banks and financial institutions 
                    to provide competitive home loan options for our customers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What are the payment terms?</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer flexible payment plans including construction-linked payments, 
                    down payment options, and EMI facilities through our banking partners.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Are there any hidden charges?</h3>
                  <p className="text-sm text-muted-foreground">
                    No, we believe in complete transparency. All charges including registration, 
                    development fees, and amenities are clearly mentioned upfront.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Take the Next Step?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let our experts help you find the perfect property that matches your dreams and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => {
                    toast({
                      title: "Consultation Request",
                      description: "We'll contact you within 2 hours to schedule your consultation.",
                    });
                  }}
                >
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => {
                    window.location.href = "tel:+919876543210";
                  }}
                >
                  Call +91 98765 43210
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