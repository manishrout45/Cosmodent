import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";

const testimonials = [
  {
    name: "Dipti Mohanty",
    role: "Patient",
    image: "https://cdn-icons-png.freepik.com/256/459/459122.png?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_white_label",
    text: "I recently got my teeth whitening done at Cosmodent Clinic by Dr. Debahuti Patnaik, and I’m really happy with the results. She was very gentle, professional, and made the whole process comfortable. Highly recommend her service!",
  },
  {
    name: "Susanta Das",
    role: "Patient",
    image: "https://cdn-icons-png.freepik.com/256/459/459122.png?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_white_label",
    text: "I'm very satisfied for my teeth treatment and this clinic is very clean and doctors are very cooperative and caring.",
  },
  {
    name: "Arpita Mohanty",
    role: "Patient",
    image: "https://cdn-icons-png.freepik.com/256/459/459122.png?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_white_label",
    text: "Got my filling and root canal done here with utmost comfort and easy on the pockets. The best part is Dr. Debahuti is the most co-operative dentist I have met and she handled a very difficult tooth situation at ease.",
  },
  {
    name: "Sthitapragyan Biswal",
    role: "Patient",
    image: "https://cdn-icons-png.freepik.com/256/459/459122.png?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_white_label",
    text: "Very Experienced Doctor. Very Friendly and the price of Crowns are very reasonable in comparison to other clinics, same quality same brand but the Doctor is not greedy. Thank You. Must visit for any dental requirements",
  },
  {
    name: "ORI SOURCES",
    role: "Patient",
    image: "https://cdn-icons-png.freepik.com/256/459/459122.png?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_white_label",
    text: "Excellent facial and skin treatment with visible results. The doctors at Cosmodent Speciality Center ensure safe, effective, and customized care.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (index < testimonials.length - visibleCards) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(testimonials.length - visibleCards);
    }
  };

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#cfa831] font-medium mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A5A]">
            Our Happy Patients
          </h2>
          <p className="text-gray-500 mt-4">
            Trusted by patients for quality dental & aesthetic care.
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-3 rounded-full hover:bg-[#cfa831] hover:text-white transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-3 rounded-full hover:bg-[#cfa831] hover:text-white transition"
        >
          <FaChevronRight />
        </button>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              >
                {/* 🔥 Card (Equal Height Fix) */}
                <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl  transition duration-300 h-full flex flex-col justify-between">

                  {/* Top Content */}
                  <div>
                    {/* Quote Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#cfa831]/10 text-[#cfa831]">
                      <ImQuotesLeft />
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[90px]">
                      {item.text}
                    </p>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full mx-auto mb-3 object-cover border-2 border-white shadow"
                    />

                    <h3 className="font-semibold text-[#1F2A5A] text-sm">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 Bottom Fade Effect */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-[#F5F7FA] via-[#F5F7FA]/95 via-70% to-transparent z-30"></div>
    </section>
  );
}