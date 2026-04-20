import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import StatsSection from "../components/StatsSection";
import { NavLink } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = servicesData[id];

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO SECTION */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f2a5a] to-[#cfa831] opacity-90"></div>

        {/* Optional Image Overlay */}
        {service.icon && (
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <img
              src={service.icon}
              alt={service.title}
              className="w-72 h-72 object-contain"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl">
          <p className="text-[#f3e7c7] mb-3 tracking-wide">
            Our Service
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>

          <p className="text-gray-200 text-sm md:text-base mb-6">
            {service.desc}
          </p>

          {/* CTA */}
          <NavLink
            to="/contact"
            className="inline-block px-6 py-3 bg-white text-[#1f2a5a] rounded-full font-medium hover:scale-105 transition"
          >
            Book Appointment
          </NavLink>
        </div>
      </section>

      {/* 🔙 Back Button */}
      <div className="max-w-5xl mx-auto px-4 mt-10">
        <button
          onClick={() => navigate(-1)}
          className="text-[#cfa831] font-medium"
        >
          ← Back
        </button>
      </div>

      {/* 📄 DETAILS SECTION - UPGRADED */}
<section className="max-w-6xl mx-auto px-4 py-16">

  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT - IMAGE / VISUAL */}
    <div className="relative">
      <div className="bg-gradient-to-br from-[#cfa831]/20 to-[#1f2a5a]/20 rounded-md p-2 flex items-center justify-center">
        {service.image && (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {/* Floating Badge */}
      <div className="absolute -bottom-6 -right-6 bg-white shadow-xl px-6 py-3 rounded-xl">
        <p className="text-sm font-medium text-[#1f2a5a]">
          ⭐ Trusted Treatment
        </p>
      </div>
    </div>

    {/* RIGHT - CONTENT */}
    <div>
      <h2 className="text-3xl font-bold text-[#1f2a5a] mb-4">
        {service.title} Overview
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        {service.details}
      </p>

      {/* FEATURES */}
      <div className="space-y-3 mb-8">
        {[
          "Safe & Advanced Procedure",
          "Experienced Specialists",
          "Quick Recovery Time",
          "Affordable Pricing",
        ].map((point, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#cfa831]/10 text-[#cfa831] text-sm">
              ✓
            </div>
            <p className="text-gray-700 text-sm">{point}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="px-8 py-3 bg-[#cfa831] text-white rounded-full font-medium hover:scale-105 transition shadow-md">
        Book Appointment
      </button>
    </div>

  </div>

  <div className="mt-16 ">
  <StatsSection />
</div>

</section>

    </div>
  );
}