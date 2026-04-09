import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#1F2A5A] text-white">

      {/* CTA BAR */}
      <div className="bg-[#C9A23F] py-6 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left">
          Ready to enhance your smile with expert dental care?
        </h2>
        <button className="border border-white px-5 py-2 rounded-md hover:bg-white hover:text-[#1F2A5A] transition">
          Book Appointment
        </button>
      </div>

      {/* MAIN FOOTER */}
      <div className="dark-section max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* ABOUT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/assets/images/logo/Logo.png"
              alt="Cosmodent Logo"
              className="h-14 w-auto object-contain"
            />
            <h3 className="text-2xl font-extrabold text-white">
              COSMODENT
            </h3>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Cosmodent Dental & Aesthetic Clinic offers advanced dental and cosmetic treatments 
            with a focus on comfort, precision, and beautiful results. We combine modern technology 
            with expert care to give you a confident and healthy smile.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-4 text-gray-300">
            <FaFacebookF className="hover:text-[#C9A23F] cursor-pointer" />
            <FaTwitter className="hover:text-[#C9A23F] cursor-pointer" />
            <FaWhatsapp className="hover:text-[#C9A23F] cursor-pointer" />
            <FaInstagram className="hover:text-[#C9A23F] cursor-pointer" />
            <FaYoutube className="hover:text-[#C9A23F] cursor-pointer" />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-[#C9A23F] cursor-pointer">Home</li>
            <li className="hover:text-[#C9A23F] cursor-pointer">Services</li>
            <li className="hover:text-[#C9A23F] cursor-pointer">Gallery</li>
            <li className="hover:text-[#C9A23F] cursor-pointer">About Us</li>
            <li className="hover:text-[#C9A23F] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-[#C9A23F] cursor-pointer">Dental & Aesthetic Care</li>
            <li className="hover:text-[#C9A23F] cursor-pointer">Root Canal Treatment</li>
            <li className="hover:text-[#C9A23F] cursor-pointer">Smile Designing</li>
            <li className="hover:text-[#C9A23F] cursor-pointer">Scaling & Cleaning</li>
            <li className="hover:text-[#C9A23F] cursor-pointer">Teeth Bleaching</li>
            <li className="hover:text-[#C9A23F] cursor-pointer">Crown & Bridge</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>

          <div className="space-y-4 text-sm text-gray-300">

            <div className="flex items-start gap-3">
              <FiMapPin className="mt-1" />
              <div>
                <p className="font-medium text-white">Clinic Location</p>
                <p>Near Royal Enfield Showroom, Link Road, Cuttack</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiPhone className="mt-1" />
              <div>
                <p className="font-medium text-white">Call Us</p>
                <p>+91 707514443</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiMail className="mt-1" />
              <div>
                <p className="font-medium text-white">Email</p>
                <p>cosmodentclinic@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p>© 2026 COSMODENT. All Rights Reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}