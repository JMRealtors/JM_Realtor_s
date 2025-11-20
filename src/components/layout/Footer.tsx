import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-100 text-blue-900 rounded-lg p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
                  <img
      src="/JM_Realtor_s/logo.png"
      alt="JM Realtors Logo"
      className="w-full h-full object-contain"
    />
                </div>
                <span className="text-2xl font-bold text-blue-900">JM Realtors</span>
              </div>
              <p className="text-blue-700 text-sm">
                Creating premium real estate experiences with innovative solutions for over a decade.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 h-9 w-9 text-blue-700 hover:bg-blue-200">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-9 w-9 text-blue-700 hover:bg-blue-200">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-9 w-9 text-blue-700 hover:bg-blue-200">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-9 w-9 text-blue-700 hover:bg-blue-200">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-900">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/about" className="text-blue-700 hover:text-blue-900 transition-colors">
                About Us
              </Link>
              <Link to="/projects" className="text-blue-700 hover:text-blue-900 transition-colors">
                Our Projects
              </Link>
              <Link to="/careers" className="text-blue-700 hover:text-blue-900 transition-colors">
                Careers
              </Link>
              <Link to="/contact" className="text-blue-700 hover:text-blue-900 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-900">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                
                <div>
                  <p className="text-blue-700 text-sm">XX XX XX</p>
                  <p className="text-blue-700 text-sm">Coimbatore</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-700" />
                <p className="text-blue-700">+91 789758 43454</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-700" />
                <p className="text-blue-700">info@jmrealtors.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-900">Newsletter</h3>
            <div className="space-y-4">
              <p className="text-blue-700 text-sm">
                Subscribe to get updates about new properties and exclusive offers.
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1 bg-blue-200 text-blue-900 border border-blue-300 placeholder-blue-700"
                />
                <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-300 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-blue-700 text-sm gap-4 md:gap-0">
          <div>© 2024 JM Realtors. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-blue-900 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-blue-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
