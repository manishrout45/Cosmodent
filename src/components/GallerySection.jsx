import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    src: "/assets/images/CosmodentImg/Cosmodent-2.jpeg",
    title: "Advanced Dental Equipment",
  },
  {
    src: "/assets/images/CosmodentImg/Cosmodent-5.jpeg",
    title: "Modern Treatment Setup",
  },
  {
    src: "/assets/images/CosmodentImg/Cosmodent-13.jpeg",
    title: "High-Tech Dental Care",
  },
  {
    src: "/assets/images/CosmodentImg/Cosmodent-15.jpeg",
    title: "Expert Consultation Tools",
  },
  {
    src: "/assets/images/CosmodentImg/Cosmodent-17.jpeg",
    title: "Advanced Tools",
  },
  {
    src: "/assets/images/CosmodentImg/Cosmodent-20.jpeg",
    title: "Sterilized Clinical Environment",
  },
  {
    src: "/assets/images/CosmodentImg/Cosmodent-14.jpeg",
    title: "Sterilized Clinical Environment",
  },
];

export default function GallerySection() {
  const [active, setActive] = useState(2);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-[#cfa831] py-24 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Header */}
        <p className="text-gray-800 font-medium mb-2">Our Gallery</p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Futuristic Transformations
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-20">
          Explore our latest dental transformations, showcasing precision,
          care, and life-changing smile makeovers.
        </p>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={prev}
            className="bg-white/10 backdrop-blur p-3 rounded-full hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="bg-white/10 backdrop-blur p-3 rounded-full hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* 3D Gallery */}
        <div className="relative flex justify-center items-center h-[450px] perspective-[1200px]">

          {images.map((item, index) => {
            const total = images.length;
            let offset = index - active;

            // ✅ Infinite circular fix
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
                style={{
                  transform: `
                    translateX(${offset * 260}px)
                    rotateY(${offset * -35}deg)
                    scale(${index === active ? 1 : 0.75})
                  `,
                  zIndex: index === active ? 20 : 10 - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                }}
                onClick={() => setActive(index)}
              >
                <div className="relative w-[260px] h-[360px] rounded-2xl overflow-hidden shadow-2xl">

                  {/* Glow */}
                  <div className="absolute -inset-2 bg-[#cfa831] blur-2xl opacity-10"></div>

                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 flex items-end p-4">
                    <h3 className="text-white text-sm font-semibold">
                      {item.title}
                    </h3>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}