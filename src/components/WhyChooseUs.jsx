import React from "react";
import { FaCheck } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* 🔥 Left Content */}
        <div>
          <p className="text-[#C9A23F] font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Exceptional Dental Care You Can Trust
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            We provide advanced dental treatments with a patient-first approach.
            Our experienced team ensures comfort, precision, and long-lasting results.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Personalized Treatment Plans",
              "Advanced Technology & Equipment",
              "Friendly & Experienced Doctors",
              "Flexible Appointment Scheduling",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheck className="text-[#C9A23F] mt-1" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🖼️ Right Image Section */}
<div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px]">

  {/* Base Image */}
  <img
    src="https://img.freepik.com/free-photo/dentist-making-professional-teeth-cleaning-withb-cotton-female-young-patient-dental-office_496169-907.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
    alt="Dental Care"
    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
  />

  {/* 🔥 Overlay Image (FULL COVER) */}
  <img
    src="/assets/images/ToothMask.png"
    alt="Overlay"
    className="absolute inset-0 w-full h-full object-cover rounded-2xl  transition duration-500"
  />

</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;