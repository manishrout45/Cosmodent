import React from "react";
import { FaPlus } from "react-icons/fa";

export default function ServiceSection() {
  const services = [
    {
      title: "General Dentistry",
      desc: "Complete oral care for every smile with cleanings, exams, and more.",
      icon: "/assets/images/tooth-1.png",
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Enhance your smile’s beauty with whitening, veneers, and more.",
      icon: "/assets/images/tooth-2.png",
    },
    {
      title: "Pediatric Dentistry",
      desc: "Gentle and fun dental care for kids to grow healthy, happy smiles.",
      icon: "/assets/images/tooth-3.png",
    },
    {
      title: "Restorative Dentistry",
      desc: "Repair and restore your teeth for lasting comfort and function.",
      icon: "/assets/images/tooth-4.png",
    },
  ];

  return (
    <section className="w-full py-28 bg-gradient-to-br from-[#eef2f7] to-[#dbe4f0]">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <p className="text-[#C9A23F] font-medium mb-2">Our Services</p>

        <h2 className="text-3xl md:text-5xl font-bold text-[#1f2a5a] mb-4">
          Complete Care for Every Smile
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-20">
          From routine cleanings to advanced restorations, we provide personalized
          dental solutions for patients of all ages.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {services.map((item, i) => (
            <div
              key={i}
              className="group bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500"
            >

              {/* 🔥 Image Icon */}
              <div className="mb-6 flex items-center justify-start">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#1f2a5a] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>

              {/* Button */}
              <button className="flex items-center gap-2 border border-gray-300 rounded-full h-10 w-10 px-3 text-[#1f2a5a] overflow-hidden transition-all duration-500 ease-out group-hover:w-36 group-hover:bg-[#1F2A5A] group-hover:text-white group-hover:border-[#1F2A5A]">
                
                <FaPlus className="min-w-[16px]" />

                <span className="opacity-0 whitespace-nowrap transition-all duration-300 group-hover:opacity-100">
                  Read more
                </span>

              </button>

            </div>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="mt-20">
          <button className="group relative inline-flex items-center justify-center px-10 py-3 rounded-lg bg-[#1F2A5A] text-white text-sm font-medium overflow-hidden transition duration-300 hover:shadow-lg">
            
            {/* Default Text */}
            <span className="relative z-10">View All Services</span>

            {/* Hover Background Slide */}
            <span className="absolute inset-0 bg-[#C9A23F] translate-y-full group-hover:translate-y-0 transition duration-300"></span>

            {/* Hover Text */}
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              View All Services
            </span>

          </button>
        </div>

      </div>
    </section>
  );
}