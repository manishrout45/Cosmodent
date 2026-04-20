import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit → WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "917077514443"; // 🔥 Replace with WhatsApp number

    const text = `🦷 *New Consultation Request*

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📝 Message: ${formData.message}

Please contact me regarding dental consultation.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-[#f7f7ee] to-[#f8f8e2]"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* LEFT MAP */}
        <div className="w-full lg:w-1/2 h-[600px] flex items-center justify-center">
          <div
            className="relative w-[90%] h-[90%] overflow-hidden border-4 border-white"
            style={{
              clipPath: `path("M50% 5% 
                C20% 5%, 10% 25%, 15% 45% 
                C20% 65%, 25% 85%, 35% 95% 
                C45% 100%, 55% 100%, 65% 95% 
                C75% 85%, 80% 65%, 85% 45% 
                C90% 25%, 80% 5%, 50% 5% Z")`,
            }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden">
              <iframe
                title="Cosmodent Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.35768883756!2d85.892202284545!3d20.450496976388447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190dfd7e8e7b4b%3A0x1b4f89f99454ad8e!2sCOSMODENT%20SPECIALTY%20CENTRE!5e0!3m2!1sen!2sin!4v1775628016700!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-between">
          
          <p className="text-[#cfa831] font-semibold mb-3">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Request A Consultation
          </h2>

          <p className="text-gray-600 mb-8">
            Have questions or need help? Reach out to us and our team will guide you with the best dental care solutions.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="border-b border-gray-300 focus:outline-none focus:border-b-[#cfa831] flex-1 pb-3"
              />

              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="border-b border-gray-300 focus:outline-none focus:border-b-[#cfa831] flex-1 pb-3"
              />
            </div>

            <textarea
              name="message"
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="4"
              className="border-b border-gray-300 focus:outline-none focus:border-b-[#cfa831] pb-3"
            ></textarea>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="group relative self-start inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#cfa831] text-white font-medium overflow-hidden transition duration-300 hover:shadow-lg"
            >
              <span className="relative z-10">Submit Request →</span>
              <span className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition duration-300"></span>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                Submit Request →
              </span>
            </button>
          </form>

          {/* OPENING HOURS */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Opening Hours
            </h3>
            <p className="text-gray-600">Mon – Sat: 9 am to 8 pm</p>
            <p className="text-gray-600">Sun: 10 am to 3 pm</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;