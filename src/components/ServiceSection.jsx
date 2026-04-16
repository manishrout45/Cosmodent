import React from "react";
import { FaPlus, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ServiceSection() {
  const navigate = useNavigate();

  const services = [
    {
      id: "tooth-cleaning",
      title: "Tooth Cleaning",
      desc: "Professional cleaning to remove plaque, tartar, and stains for a healthier, brighter smile.",
      icon: "/assets/images/tooth-1.png",
    },
    {
      id: "root-canal-treatment",
      title: "Root Canal Treatment",
      desc: "Safe and painless procedure to save infected teeth and relieve severe tooth pain.",
      icon: "/assets/images/tooth-4.png",
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      desc: "Enhance your smile’s appearance with advanced aesthetic dental treatments.",
      icon: "/assets/images/tooth-3.png",
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening",
      desc: "Get a visibly brighter and whiter smile with our safe and effective whitening solutions.",
      icon: "/assets/images/tooth-2.png",
    },
  ];

  const skinServices = [
    { id: "acne-pigmentation", title: "Acne & Pigmentation Treatment" },
    { id: "hair-fall-treatment", title: "Hair Fall Treatment" },
    { id: "anti-aging-care", title: "Anti-Aging Care" },
    { id: "skin-glow-therapy", title: "Skin Glow Therapy" },
    { id: "laser-hair-reduction", title: "Laser Hair Reduction" },
    { id: "body-tightening-treatment", title: "Body Tightening Treatment" },
  ];

  return (
    <section className="w-full py-28 bg-gradient-to-br from-[#f7f7ee] to-[#f8f8e2]">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Header */}
        <p className="text-[#cfa831] font-medium mb-2">Our Services</p>

        <h2 className="text-3xl md:text-5xl font-bold text-[#1f2a5a] mb-4">
          Complete Care for Every Smile
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-20">
          From routine cleanings to advanced restorations, we provide personalized dental solutions for patients of all ages.
        </p>

        {/* Dental Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item) => (
            <div
              key={item.id}
              className="group bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500"
            >
              {/* Icon */}
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

              {/* 🔥 SAME PREMIUM BUTTON */}
              <button
                onClick={() => navigate(`/service/${item.id}`)}
                className="flex items-center gap-2 border border-[#cfa831] rounded-full h-10 w-10 px-3 text-[#cfa831] overflow-hidden transition-all duration-500 ease-out group-hover:w-36 group-hover:bg-[#cfa831] group-hover:text-white"
              >
                <FaPlus className="min-w-[16px]" />
                <span className="opacity-0 whitespace-nowrap transition-all duration-300 group-hover:opacity-100">
                  Read more
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* 🔥 SKIN SECTION */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1f2a5a] mb-10">
            Skin & Aesthetic Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skinServices.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/service/${item.id}`)}
                className="cursor-pointer group flex items-center gap-4 bg-white/70 backdrop-blur-md rounded-xl px-6 py-4 border border-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#cfa831]/10 text-[#cfa831] group-hover:bg-[#cfa831] group-hover:text-white transition">
                  <FaCheckCircle size={14} />
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm font-medium group-hover:text-[#1f2a5a] transition">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-20">
          <button className="group relative inline-flex items-center justify-center px-10 py-3 rounded-lg bg-[#cfa831] text-white text-sm font-medium overflow-hidden transition duration-300 hover:shadow-lg">

            <span className="relative z-10">View All Services</span>

            <span className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition duration-300"></span>

            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              View All Services
            </span>

          </button>
        </div>

      </div>
    </section>
  );
}