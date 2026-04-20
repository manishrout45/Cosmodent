import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Kuldeep Kumar Patnaik",
    role: "MDS (Community Dentistry)",
    img: "/assets/images/DrKuldeep.jpeg",
  },
  {
    name: "Dr. Debahuti Patnaik",
    role: "Dental Surgeon",
    img: "/assets/images/DrDebahuti.jpeg",
  },
  {
    name: "Dr. Ranjan Pradhan",
    role: "MDS, Orthodontics",
    img: "/assets/images/DrRanjan.jpeg",
  },
  {
    name: "Dr. Roshni Senapati",
    role: "MDS (Oral & Maxillofacial Surgeon)",
    img: "/assets/images/DrRoshni.jpeg",
  },
  
];

export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <p className="text-[#cfa831] font-semibold mb-3 text-sm sm:text-base">
          Our Doctor
        </p>

        <h2 className="text-4xl font-bold mb-10">
          Our Dedicated Doctors Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {doctors.map((doc, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className="group relative bg-white p-3 shadow-md overflow-hidden cursor-pointer"
              >

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-[350px] object-cover"
                  />

                  {/* 🔥 Social Icons */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 flex flex-col gap-3 
                    ${
                      isActive
                        ? "left-3"
                        : "left-[-60px] group-hover:left-3"
                    }`}
                  >
                    <span className="bg-white p-2 shadow hover:bg-blue-500 hover:text-white transition">
                      <FaFacebookF />
                    </span>
                    <span className="bg-white p-2 shadow hover:bg-blue-500 hover:text-white transition">
                      <FaLinkedinIn />
                    </span>
                    <span className="bg-white p-2 shadow hover:bg-blue-500 hover:text-white transition">
                      <FaTwitter />
                    </span>
                  </div>

                  {/* 🔥 Bottom Hover Content */}
                  <div
                    className={`absolute left-0 w-full transition-all duration-500 bg-transparent
                    ${
                      isActive
                        ? "bottom-0"
                        : "bottom-[-220px] group-hover:bottom-0"
                    }`}
                  >

                    {/* Curve Shape */}
                    <div
                      className="absolute -top-2 left-0 w-full h-24 bg-white"
                      style={{
                        clipPath: "ellipse(70% 100% at 50% 100%)",
                      }}
                    ></div>

                    {/* Content */}
                    <div className="relative bg-white pt-6 pb-4 text-center">
                      <h3 className="font-semibold text-lg">{doc.name}</h3>
                      <p className="text-gray-500 text-sm">{doc.role}</p>
                    </div>

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