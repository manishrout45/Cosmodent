import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">

      {/* CTA BAR */}
      <div className="bg-[#cfa831] py-6 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
          Ready to enhance your smile with expert dental care?
        </h2>

        <button className="border border-white px-5 py-2 rounded-md hover:bg-white hover:text-[#1F2A5A] transition whitespace-nowrap">
          Book Appointment
        </button>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ABOUT */}
        <div>
          <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
            <img
              src="/assets/images/logo/Logo.png"
              alt="Cosmodent Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed text-center sm:text-left">
            Cosmodent Dental & Aesthetic Clinic offers advanced dental and cosmetic treatments 
            with a focus on comfort, precision, and beautiful results. We combine modern technology 
            with expert care to give you a confident and healthy smile.
          </p>

          {/* SOCIALS */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-5 text-gray-300">
            <FaFacebookF className="hover:text-[#cfa831] cursor-pointer" />
            <FaTwitter className="hover:text-[#cfa831] cursor-pointer" />
            <FaWhatsapp className="hover:text-[#cfa831] cursor-pointer" />
            <FaInstagram className="hover:text-[#cfa831] cursor-pointer" />
            <FaYoutube className="hover:text-[#cfa831] cursor-pointer" />
          </div>
        </div>

        {/* COMPANY */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-[#cfa831] cursor-pointer">Home</li>
            <li className="hover:text-[#cfa831] cursor-pointer">Services</li>
            <li className="hover:text-[#cfa831] cursor-pointer">Gallery</li>
            <li className="hover:text-[#cfa831] cursor-pointer">About Us</li>
            <li className="hover:text-[#cfa831] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-[#cfa831] cursor-pointer">Dental & Aesthetic Care</li>
            <li className="hover:text-[#cfa831] cursor-pointer">Root Canal Treatment</li>
            <li className="hover:text-[#cfa831] cursor-pointer">Smile Designing</li>
            <li className="hover:text-[#cfa831] cursor-pointer">Scaling & Cleaning</li>
            <li className="hover:text-[#cfa831] cursor-pointer">Teeth Bleaching</li>
            <li className="hover:text-[#cfa831] cursor-pointer">Crown & Bridge</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Contact Us</h4>

          <div className="space-y-4 text-sm text-gray-300">

            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <FiMapPin className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-white">Clinic Location</p>
                <p>Near Royal Enfield Showroom, Link Road, Cuttack</p>
              </div>
            </div>

            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <FiPhone className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-white">Call Us</p>
                <p>+91 70775 14443</p>
              </div>
            </div>

            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <FiMail className="mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-white">Email</p>
                <p>cosmodent@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-gray-400 text-sm text-center md:text-left">
        <p>© 2026 COSMODENT. All Rights Reserved.</p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <span className="hover:text-white cursor-pointer">
            Terms & Conditions
          </span>
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
}