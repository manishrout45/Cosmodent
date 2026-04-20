import React from "react";
import AboutSection from "../components/AboutSection";
import OurTeam from "../components/OurTeam";
import WhyChooseUs from "../components/WhyChooseUs";


export default function About() {
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
            Who We Are
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About Our Clinic
            </h1>

            <p className="text-gray-200 text-sm md:text-base mb-6">
            We are committed to delivering exceptional healthcare with advanced technology,
            experienced doctors, and a patient-first approach. Your health, comfort, and smile
            are our top priorities.
            </p>

        </div>
        </section>
      <AboutSection />
      <OurTeam />
      <WhyChooseUs />
</>
  );
}