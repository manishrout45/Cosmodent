import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";

const testimonials = [
  {
    name: "Alexa P.",
    role: "Customer",
    image: "https://img.freepik.com/premium-photo/woman-wearing-white-shirt-black-jacket-with-white-shirt-that-says-she-is-smiling_1294269-1864.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    text: "They're professional, friendly, and genuinely care about your dental health.",
  },
  {
    name: "Michael S.",
    role: "Customer",
    image: "https://img.freepik.com/premium-photo/man-with-glasses-sweater-that-says-he-s-wearing-glasses_916191-430008.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    text: "I've always been nervous about dental visits, but the staff made me feel comfortable.",
  },
  {
    name: "Robert L.",
    role: "Customer",
    image: "https://img.freepik.com/premium-photo/professional-linkedin-profile-photo-young-man-suit-tie-smiling-confidently_1141323-1517.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    text: "Exceptional service! The team always goes the extra mile.",
  },
  {
    name: "David K.",
    role: "Customer",
    image: "https://img.freepik.com/premium-photo/man-wearing-glasses-shirt-that-says-he-is-smiling_984237-62020.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    text: "Highly professional and friendly environment.",
  },
  {
    name: "Chris M.",
    role: "Customer",
    image: "https://img.freepik.com/premium-photo/smiling-young-businessman-suit-profile-picture_1063985-24436.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    text: "Amazing experience every time. Clean clinic and supportive staff.",
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
    <section className="relative bg-[#F5F7FA] py-24 overflow-hidden">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#C9A23F] font-medium mb-2">Testimonials</p>
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
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-3 rounded-full hover:bg-[#C9A23F] hover:text-white transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-3 rounded-full hover:bg-[#C9A23F] hover:text-white transition"
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
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#C9A23F]/10 text-[#C9A23F]">
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