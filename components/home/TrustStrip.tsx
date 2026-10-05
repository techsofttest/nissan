import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TrustStrip({highlights}:{highlights:any[]}) {
  
  return (
    <section className="relative bg-[#0F2628] text-white py-12 overflow-hidden">
      {/* Animated single wave line background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -10 170 C 300 120, 450 20, 750 90 C 950 140, 1050 30, 1210 -10"
            stroke="#5FAAAD"
            strokeWidth="3"
            strokeLinecap="square"
            className="animate-wave-line"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#18393D]">
          {highlights.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up">
              <div
                className={`flex flex-col text-center sm:text-left ${idx === 0 ? "pt-0 sm:pr-4" : "pt-4 sm:pt-0 sm:px-6"
                  }`}
              >
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#E6F3F4] leading-tight">
                  <div>{stat.title}</div>
                  <div>{stat.icon}</div>
                </div>
                <p className="text-[13px] text-[#E6F3F4]/80 font-medium uppercase tracking-wider mt-1.5">
                  {stat.option}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
