import React from "react";
import { FaStar, FaClock, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="dark-section relative w-full min-h-screen flex items-center">
      
      {/* Background Image */}
      <img
        src="https://img.freepik.com/premium-photo/joyful-woman-comfortable-dental-care_730743-158.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A5A]/90 via-[#1F2A5A]/70 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 text-white py-20">
        
        <p className="mb-4 text-sm md:text-base text-white/80">
          Family Dental Care
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
          Elevating Smiles with Expert Care and a Gentle Touch
        </h1>

        {/* Button */}
        <button className="mt-6 border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
          Book Appointment
        </button>

        {/* Rating */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="text-white/80">Google Rating</span>
          <span className="font-semibold">5.0</span>

          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <span className="text-white/80">
            Based on 23k Reviews
          </span>
        </div>
      </div>

      {/* 🔥 Bottom Info Bar */}
<div className="absolute bottom-0 left-0 w-full bg-[#1F2A5A]/90 backdrop-blur-md text-white border-t border-white/10">
  <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
    
    {/* Item 1 */}
    <div className="flex flex-col items-center md:items-start px-6">
      <FaClock className="text-[#C9A23F] mb-2" />
      <p className="font-semibold">Opening Hours</p>
      <p className="text-white/70 text-sm">Mon - Fri: 08.00 - 18.00</p>
    </div>

    {/* Divider */}
    <div className="hidden md:block h-12 w-px bg-white/20"></div>

    {/* Item 2 */}
    <div className="flex flex-col items-center md:items-start px-6">
      <FaMapMarkerAlt className="text-[#C9A23F] mb-2" />
      <p className="font-semibold">Our Location</p>
      <p className="text-white/70 text-sm">100 S Main St, New York</p>
    </div>

    {/* Divider */}
    <div className="hidden md:block h-12 w-px bg-white/20"></div>

    {/* Item 3 */}
    <div className="flex flex-col items-center md:items-start px-6">
      <FaEnvelope className="text-[#C9A23F] mb-2" />
      <p className="font-semibold">Email Us</p>
      <p className="text-white/70 text-sm">contact@dentiacare.com</p>
    </div>

  </div>
</div>
    </section>
  );
}