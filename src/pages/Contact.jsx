import React from "react";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <>
      {/* 🔥 HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f2a5a] to-[#cfa831] opacity-90"></div>

        {/* Optional Light Overlay Shape */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <div className="w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl">
          <p className="text-[#f3e7c7] mb-3 tracking-wide">
            Get in Touch
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>

          <p className="text-gray-200 text-sm md:text-base mb-6">
            We’re here to help you. Reach out to us for any queries, support, or service requests.
          </p>

          {/* CTA */}
          <button className="px-6 py-3 bg-white text-[#1f2a5a] rounded-full font-medium hover:scale-105 transition">
            Send Message
          </button>
        </div>
      </section>

      {/* 📩 Contact Section */}
      <ContactSection />
    </>
  );
}