import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* 🔥 Image Section */}
        <div className="relative w-full h-[450px] flex items-center justify-center">
          
          {/* Main Image */}
          <img
            src="/assets/images/CosmodentImg/Cosmodent-4.jpeg"
            alt="Cosmodent Clinic"
            className={`absolute top-0 left-0 w-[80%] h-[380px] object-cover rounded-2xl shadow-xl transition-all duration-1000 ${
              visible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 translate-y-10"
            }`}
          />

          {/* Overlapping Image */}
          <img
            src="/assets/images/CosmodentImg/Cosmodent-11.jpeg"
            alt="Dental Treatment"
            className={`absolute bottom-0 right-0 w-[55%] h-[220px] object-cover rounded-xl border-4 border-white shadow-lg transition-all duration-1000 delay-200 ${
              visible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-75 translate-y-10"
            }`}
          />
        </div>

        {/* 🔥 Content */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <p className="text-[#cfa831] font-semibold mb-3">About Cosmodent</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-[#1F2A5A]">
            Advanced Dental & Aesthetic Care for a Confident Smile
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            At Cosmodent, we specialize in modern dental and aesthetic treatments 
            designed to enhance your smile and overall confidence. Our clinic combines 
            advanced technology with expert care to deliver safe, comfortable, and 
            effective treatments for every patient.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Root Canal Treatment",
              "Smile Designing",
              "Scaling & Teeth Cleaning",
              "Teeth Bleaching",
              "Crown & Bridge Solutions",
              "Personalized Patient Care",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheck className="text-[#cfa831] mt-1" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* 🔥 View More Button */}
          <div className="mt-10">
            <Link
              to="/about"
              className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#cfa831] text-white font-medium overflow-hidden transition duration-300 hover:shadow-lg"
            >
              <span className="relative z-10">View More</span>

              {/* Hover Effect */}
              <span className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition duration-300"></span>

              {/* Text Overlay */}
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                View More
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}