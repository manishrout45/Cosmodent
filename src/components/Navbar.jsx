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
import { servicesData } from "../data/servicesData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  // 🔥 Dynamic services
  const allServices = Object.keys(servicesData).map((key) => ({
    id: key,
    title: servicesData[key].title,
  }));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Link styling
  const linkClass = ({ isActive }) =>
    `cursor-pointer transition ${
      isActive
        ? isScrolled
          ? "text-[#C9A23F] font-semibold"
          : "text-white font-semibold"
        : isScrolled
        ? "text-gray-800 hover:text-[#cfa831]"
        : "text-white hover:text-[#f3e7c7]"
    }`;

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "text-gray-800" : "text-white"
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
        <NavLink to="/">
          <img
            src="/assets/images/logo/Logo.png"
            alt="Logo"
            className="w-14 h-14 object-contain cursor-pointer"
          />
        </NavLink>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          {/* 🔥 SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServiceDropdown(true)}
            onMouseLeave={() => setServiceDropdown(false)}
          >
            {/* Trigger */}
            <div className={`${linkClass({ isActive: false })} flex items-center gap-1`}>
              Services <FaChevronDown size={10} />
            </div>

            {/* Dropdown */}
            <div
              className={`absolute left-0 mt-4 w-[420px] bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-lg p-4 transition-all duration-300 ${
                serviceDropdown
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {allServices.map((service) => (
                  <li key={service.id}>
                    <NavLink
                      to={`/service/${service.id}`}
                      className="block px-3 py-2 rounded-md text-gray-700 hover:bg-[#cfa831]/10 hover:text-[#cfa831] transition"
                    >
                      {service.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>

          <NavLink to="/team" className={linkClass}>
            Our Team
          </NavLink>



          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </ul>

        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-4">

          {/* Button */}
          <NavLink
            to="/contact"
            className="hidden md:inline-flex group relative items-center justify-center px-5 py-2 rounded-lg text-sm text-white bg-[#C9A23F] overflow-hidden transition duration-300 hover:shadow-lg"
          >
            <span className="relative z-10">Book Appointment</span>
            <span className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition duration-300"></span>
          </NavLink>

          {/* Sidebar Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="hidden md:flex flex-col gap-1"
          >
            <span className={`w-6 h-[2px] ${isScrolled ? "bg-black" : "bg-white"}`}></span>
            <span className={`w-4 h-[2px] ${isScrolled ? "bg-black" : "bg-white"}`}></span>
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden text-xl">
            <FaBars className={isScrolled ? "text-[#1F2A5A]" : "text-white"} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#cfa831] z-50 transform transition ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FaTimes onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="flex flex-col gap-6 px-6 text-white">

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          {/* 🔥 SERVICES MOBILE */}
          <div>
            <p className="font-semibold">Services</p>
            <ul className="ml-3 mt-2 space-y-2">
              {allServices.map((service) => (
                <li key={service.id}>
                  <NavLink
                    to={`/service/${service.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/80 text-sm hover:text-white"
                  >
                    {service.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>

          <NavLink to="/team" onClick={() => setMenuOpen(false)}>
            Our Team
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </ul>
      </div>

      {/* ================= SIDEBAR ================= */}
      <div
        className={`fixed inset-0 bg-[#cfa831]/50 z-40 transition ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-[#cfa831] text-white z-50 transform transition ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h1 className="text-xl font-semibold">COSMODENT</h1>
          <FaTimes onClick={() => setSidebarOpen(false)} />
        </div>

        <div className="p-6 space-y-8 text-sm">

          {/* Services */}
          <div>
            <h2 className="mb-4 font-semibold text-gray-800">Our Services</h2>
            <ul className="space-y-2 text-white/80">
              {allServices.map((service) => (
                <li key={service.id} className="flex items-center gap-2">
                  <FaCheck className="text-gray-800" />
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 font-semibold text-gray-800">Contact Us</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <FaClock /> Monday - Friday 08.00 - 18.00
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Near Royal Enfield Showroom, Link Road, Cuttack
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> cosmodent@gmail.com
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}