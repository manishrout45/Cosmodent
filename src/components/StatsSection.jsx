import React from "react";
import { useEffect, useRef, useState } from "react";

const statsData = [
  { value: 1000, suffix: "+", label: "Happy Patients" },
  { value: 250, suffix: "+", label: "Teeth Whitened" },
  { value: 80, suffix: "+", label: "Dental Implants" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];

function Counter({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000; // ms
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className=" bg-[#cfa831] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => (
          <div key={index}>
            <h2 className="text-3xl md:text-4xl font-bold">
              <Counter
                target={stat.value}
                suffix={stat.suffix}
                start={startCount}
              />
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-800">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}