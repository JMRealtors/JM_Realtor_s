import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Users,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: [
      "JM Realtors – Coimbatore Office",
      "123, Avinashi Road, Peelamedu",
      "Coimbatore, Tamil Nadu – 641004",
    ],
    action: "Get Directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+91 98765 43210",
      "+91 422 123 4567",
      "Available Mon–Sat, 9 AM – 7 PM",
    ],
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "info@jmrealtors.com",
      "coimbatore@jmrealtors.com",
      "We usually respond within 24 hours",
    ],
    action: "Send Email",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday – Friday: 9 AM – 7 PM",
      "Saturday: 9 AM – 6 PM",
      "Sunday: By prior appointment",
    ],
    action: "Schedule Meeting",
  },
];

const inquiryTypes = [
  "Land / Plot Inquiry",
  "Site Visit Request",
  "Investment Consultation",
  "Layout Details",
  "Customer Support",
  "Career Opportunities",
  "Partnership",
  "General Inquiry",
];

const officeLocations = [
  {
    name: "Head Office – Peelamedu",
    address: "123, Avinashi Road, Peelamedu, Coimbatore – 641004",
    phone: "+91 422 123 4567",
    manager: "S. Karthikeyan",
  },
  {
    name: "Gandhipuram Branch",
    address: "Cross Cut Road, Gandhipuram, Coimbatore – 641012",
    phone: "+91 422 234 5678",
    manager: "M. Divya",
  },
  {
    name: "Saibaba Colony Branch",
    address: "NSR Road, Saibaba Colony, Coimbatore – 641011",
    phone: "+91 422 345 6789",
    manager: "R. Prakash",
  },
];

// Hero background image (similar pattern as other pages)
const heroImageUrl =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1470&q=80";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <Header />

      <main>
        {/* Hero Section with background image */}
        <section className="relative py-20 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white overflow-hidden">
          {/* Background image */}
          <img
            src={heroImageUrl}
            alt="Contact JM Realtors Coimbatore"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            loading="lazy"
          />
          {/* Overlay to keep text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-700/60 to-blue-500/60" />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Let’s Discuss Your Land Investment Plans in Coimbatore
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Our Coimbatore-based team is here to guide you with DTCP-approved
                layouts, residential and commercial plots across key locations in
                and around Coimbatore. Reach out today and move closer to your
                ideal investment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 text-center border border-blue-100"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-5">
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-sm text-gray-600 leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-500 text-blue-600 hover:bg-blue-50"
                    >
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-white shadow-xl rounded-2xl border border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                      Send Us a Message
                    </CardTitle>
                    <p className="text-gray-500 text-sm mt-2">
                      Fill out the form below and our Coimbatore team will contact
                      you shortly.
                    </p>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) =>
                            handleInputChange("inquiryType", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type, index) => (
                              <SelectItem
                                key={index}
                                value={type.toLowerCase().replace(/\s+/g, "-")}
                              >
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
                          placeholder="Tell us about your requirements, preferred location in Coimbatore, and budget..."
                          className="min-h-32"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="bg-white shadow-md rounded-2xl border border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      variant="default"
                      className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Site Visit in Coimbatore
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-500 text-blue-600 hover:bg-blue-50"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Request Callback from Coimbatore Team
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-500 text-blue-600 hover:bg-blue-50"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Download Coimbatore Layout Brochure
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-500 text-blue-600 hover:bg-blue-50"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat with Land Expert
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-md rounded-2xl border border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      Our Coimbatore Offices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {officeLocations.map((office, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-gray-800">
                          {office.name}
                        </h4>
                        <p className="text-sm text-gray-600">{office.address}</p>
                        <p className="text-sm text-gray-600">{office.phone}</p>
                        <p className="text-xs text-blue-600">
                          Manager: {office.manager}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about our Coimbatore layouts and
                land services
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-md border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    What is the booking process for plots?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Choose your preferred plot, pay the booking amount, verify
                    documents, and proceed with registration at the Coimbatore
                    Sub-Registrar Office. Our team will guide you through each
                    step.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Do you assist with bank loans for land purchase?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Yes, we coordinate with leading banks and NBFCs in Coimbatore
                    to help you get loans for approved layouts, subject to
                    eligibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Are all projects DTCP / LPA approved?
                  </h3>
                  <p className="text-sm text-gray-600">
                    We focus primarily on DTCP / LPA-approved layouts with clear
                    titles. Approval and document details will be shared for each
                    specific project.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Can I schedule multiple site visits in one day?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Yes, based on location clusters (Okkilipalayam, Kinathukadavu,
                    Othakal Mandapam, etc.), we can plan back-to-back site visits
                    to optimize your time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Take the Next Step?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let our Coimbatore experts help you choose the right layout and
                plot that matches your plans and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => {
                    toast({
                      title: "Consultation Request",
                      description:
                        "We'll contact you within 2 hours to schedule your consultation.",
                    });
                  }}
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
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
