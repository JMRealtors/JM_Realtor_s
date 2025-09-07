import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="bg-blue-50 text-gray-800 flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-300 to-blue-200 text-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow">
              About EstateCore
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8">
              Building Dreams, Creating Communities, Delivering Excellence
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              With over 6 years of experience in the real estate industry, we
              have established ourselves as a trusted name in residential
              development, committed to creating exceptional living experiences.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-center text-gray-700 max-w-4xl mx-auto">
              EstateCore was founded with a vision to redefine residential real
              estate by blending innovative designs with sustainable living. Over
              the years, we’ve successfully delivered projects that have not only
              met but exceeded customer expectations. Our journey has been marked
              by a relentless pursuit of quality, integrity, and customer
              satisfaction.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-blue-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To create sustainable and modern communities where families can
                thrive, while upholding the highest standards of quality and
                transparency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leader in residential real estate development, known for
                innovation, sustainability, and customer trust.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center text-blue-800">
              Why Choose EstateCore?
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Quality Construction",
                  desc: "We use premium materials and innovative designs to ensure long-lasting and beautiful homes.",
                },
                {
                  title: "Customer-Centric Approach",
                  desc: "Our focus is always on creating value and ensuring complete satisfaction for our clients.",
                },
                {
                  title: "Sustainable Living",
                  desc: "We prioritize eco-friendly practices and green initiatives in all our projects.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-300 to-blue-200 text-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Be part of our story as we continue to build sustainable
              communities and deliver dream homes for families across the region.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl shadow transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
