
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It’s recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "Contact your dentist immediately. Rinse your mouth, apply a cold compress, and avoid chewing on the affected area.",
  },
  {
    question: "Do you offer services for kids?",
    answer:
      "Yes, we provide pediatric dentistry services tailored for children of all ages.",
  },
  {
    question: "What are my options for replacing missing teeth?",
    answer:
      "Options include dental implants, bridges, and dentures depending on your condition.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional teeth whitening is safe when performed under dental supervision.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-[#f7f7ee] to-[#f8f8e2] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#cfa831] font-medium mb-2">
            Everything You Need to Know
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c2b4a] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="border-b border-gray-300 pb-4"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left font-medium text-[#1c2b4a]"
                >
                  {faq.question}
                  {isActive ? <FiChevronUp /> : <FiChevronDown />}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}