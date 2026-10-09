"use client";

import React, { useState, useEffect } from "react";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide while user is in the Hero area (scrolled less than 70% of viewport height)
      if (window.scrollY > window.innerHeight * 0.7) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="/contact#contact-form"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 group inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-2xl"
      aria-label="Contact Us"
    >
      {/* Animated Moving Border Line */}
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#5FAAAD_90%,#ffffff_100%)]" />

      {/* Button Content Inner Container */}
      <span className="relative z-10 bg-black group-hover:bg-[#18393D] text-white p-3.5 px-4 rounded-full flex items-center gap-2.5 transition-colors duration-300">
        <svg className="w-5 h-5 text-white group-hover:text-[#5FAAAD] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="hidden sm:inline text-[14px] font-semibold pr-1 tracking-wide">Contact Us</span>
      </span>
    </a>
  );
}
