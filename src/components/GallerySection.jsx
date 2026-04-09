import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    src: "https://img.freepik.com/free-photo/dentist-doing-check-up-patient_23-2149206214.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    title: "Before Treatment",
  },
  {
    src: "https://img.freepik.com/free-photo/young-female-dentist-showing-patient-dental-xray-dentistry-concept_169016-66973.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    title: "Transformation",
  },
  {
    src: "https://img.freepik.com/free-photo/dentist-treats-childs-tooth-using-rubber-dam-closeup-tooth-treatment_169016-66968.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    title: "Procedure",
  },
  {
    src: "https://img.freepik.com/premium-photo/expert-dental-care_425122-3836.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    title: "Dental Care",
  },
  {
    src: "https://img.freepik.com/premium-photo/smiling-young-woman-indian-descent-against-neutral-background_731930-138429.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    title: "Happy Smile",
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
    <section className="bg-blue-950 py-24 text-white overflow-hidden relative z-0 isolate">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Header */}
       <p className="text-[#C9A23F] font-medium mb-2">
  Our Gallery
</p>

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
            const offset = index - active;

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer"
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
                  <div className="absolute -inset-2 bg-blue-500 blur-2xl opacity-20"></div>

                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
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