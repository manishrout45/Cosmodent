import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterestP } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. John Smith",
    role: "Cardiologist",
    img: "https://img.freepik.com/premium-photo/dentist-thumbs-up-portrait-man-office-teeth-whitening-service-dental-care-healthcare-dentistry-orthodontist-with-thank-you-hand-sign-oral-hygiene-wellness-cleaning_590464-184391.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Dr. Emily Brown",
    role: "Dentist",
    img: "https://img.freepik.com/premium-photo/portrait-female-doctor-dentist-woman-stomatology-clinic-office_157823-4930.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Dr. Morila Wood",
    role: "Senior Doctor",
    img: "https://img.freepik.com/premium-photo/dentist-holdind-orthodontic-transparent-silicone-trainer-aligner-teeth-correction_130111-9075.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Dr. Sarah Lee",
    role: "Neurologist",
    img: "https://img.freepik.com/premium-photo/caucasian-woman-dentist-smiling-while-standing-dental-clinic-ai-generative_154515-10740.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
];

export default function OurTeam() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <p className="text-[#cfa831] font-semibold mb-3 text-sm sm:text-base">Our Doctor</p>
        <h2 className="text-4xl font-bold mb-10">
          Our Dedicated Doctors Team
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {doctors.map((doc, index) => (
            <div
              key={index}
              className="group relative bg-white p-3 shadow-md overflow-hidden"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-[350px] object-cover"
                />

                {/* 🔥 Social Icons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[-60px] group-hover:left-3 transition-all duration-500 flex flex-col gap-3">
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
<div className="absolute bottom-[-220px] left-0 w-full group-hover:bottom-0 transition-all duration-500 bg-transparent">

  {/* ✨ REAL CURVE SHAPE */}
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
          ))}

        </div>
      </div>
    </section>
  );
}