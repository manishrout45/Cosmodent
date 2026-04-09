import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaCheck,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Active link style function
  const linkClass = ({ isActive }) =>
    `cursor-pointer transition ${
      isActive
        ? "text-[#C9A23F] font-semibold"
        : isScrolled
        ? "hover:text-blue-600"
        : "hover:text-blue-200"
    }`;

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "text-[#1F2A5A]" : "text-white"
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-white transition-all duration-500 ${
          isScrolled ? "opacity-100 shadow-md backdrop-blur-md" : "opacity-0"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/logo/Logo.png"
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
          <h1
            className={`text-2xl font-extrabold transition duration-300 ${
              isScrolled ? "text-[#1F2A5A]" : "text-white"
            }`}
          >
            COSMODENT
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/services" className={linkClass}>
            Services <FaChevronDown size={10} className="inline ml-1" />
          </NavLink>

          <NavLink to="/dentists" className={linkClass}>
            Dentists
          </NavLink>

          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Button */}
          <button className="hidden md:inline-flex group relative items-center justify-center px-5 py-2 rounded-lg text-sm text-white bg-[#1F2A5A] overflow-hidden transition duration-300 hover:shadow-lg">
            <span className="relative z-10 flex items-center gap-2">
              Book Appointment
            </span>
            <span className="absolute inset-0 bg-[#C9A23F] translate-y-full group-hover:translate-y-0 transition duration-300"></span>
          </button>

          {/* Desktop Sidebar Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="hidden md:flex flex-col gap-1"
          >
            <span className={`w-6 h-[2px] ${isScrolled ? "bg-black" : "bg-white"}`}></span>
            <span className={`w-4 h-[2px] ${isScrolled ? "bg-black" : "bg-white"}`}></span>
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars className={isScrolled ? "text-[#1F2A5A]" : "text-white"} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 bg-[#1F2A5A]/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#1F2A5A] z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FaTimes onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="flex flex-col gap-6 px-6 text-white">

          <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={() => setMenuOpen(false)} className={linkClass}>
            Services
          </NavLink>

          <NavLink to="/dentists" onClick={() => setMenuOpen(false)} className={linkClass}>
            Dentists
          </NavLink>

          <NavLink to="/blog" onClick={() => setMenuOpen(false)} className={linkClass}>
            Blog
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={linkClass}>
            Contact
          </NavLink>
        </ul>
      </div>

      {/* ================= DESKTOP SIDEBAR ================= */}

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-[#1F2A5A]/50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-[#1f2a5a] text-white z-50 transform transition-transform duration-500 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h1 className="text-xl font-semibold">COSMODENT</h1>
          <FaTimes
            className="cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 text-sm">

          {/* Services */}
          <div>
            <h2 className="mb-4 font-semibold text-[#C9A23F]">Our Services</h2>
            <ul className="space-y-2 text-white/80">
              {[
                "General Dentistry",
                "Cosmetic Dentistry",
                "Pediatric Dentistry",
                "Restorative Dentistry",
                "Preventive Dentistry",
                "Orthodontics",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheck className="text-[#1F2A5A]" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 font-semibold text-[#C9A23F]">Contact Us</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <FaClock /> Monday - Friday 08.00 - 18.00
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> 100 S Main St, New York
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> contact@dentiacare.com
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h2 className="mb-4 font-semibold text-[#C9A23F]">About Us</h2>
            <p className="text-white/70 leading-relaxed">
              At Dentia, we’re dedicated to providing high-quality,
              personalized dental care for patients of all ages.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}