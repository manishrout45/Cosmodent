import React from "react";
import { FaCheck } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* 🔥 Left Content */}
        <div className="text-center lg:text-left">
          <p className="text-[#cfa831] font-semibold mb-3 text-sm sm:text-base">
            Why Choose Us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-6 leading-snug">
            Exceptional Dental Care You Can Trust
          </h2>

          <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
            We provide advanced dental treatments with a patient-first approach.
            Our experienced team ensures comfort, precision, and long-lasting results.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              "Personalized Treatment Plans",
              "Advanced Technology & Equipment",
              "Friendly & Experienced Doctors",
              "Flexible Appointment Scheduling",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 justify-center lg:justify-start">
                <FaCheck className="text-[#cfa831] mt-1 text-sm sm:text-base" />
                <p className="text-gray-700 text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🖼️ Right Image Section */}
        <div
          className="relative w-full 
          h-[260px] sm:h-[300px] 
          md:h-[420px] md:max-w-[500px] md:mx-auto 
          lg:h-[500px] lg:max-w-full"
        >

          {/* Base Image */}
          <img
            src="https://img.freepik.com/free-photo/dentist-making-professional-teeth-cleaning-withb-cotton-female-young-patient-dental-office_496169-907.jpg?w=740"
            alt="Dental Care"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />

          {/* 🔥 Overlay Image */}
          <img
            src="/assets/images/ToothMask.png"
            alt="Overlay"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl transition duration-500 scale-100 sm:scale-105 md:scale-110"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;