"use client";

import React, { useState, useEffect, useRef } from "react";

interface DetailItem {
  title: string;
  icon: React.ReactNode | string;
  description: string;
}

interface PageProps {
  page?: {
    title?: string;
    sub?: string;
    content?: string;
    image?: string;
    detail?: DetailItem[];
  };
}

export default function WhyUsSection({ page }: PageProps) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
const renderIcon = (icon: string) => {
  const svg = icon
    .replace(/strokeLinecap=/g, "stroke-linecap=")
    .replace(/strokeLinejoin=/g, "stroke-linejoin=")
    .replace(/strokeWidth=\{([^}]+)\}/g, 'stroke-width="$1"');

  return (
    <span
      className="[&>svg]:w-14 [&>svg]:h-14"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
 
  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#F3FBFB] px-6 md:px-12 overflow-hidden">
      <div
        ref={sectionRef}
        className={`relative mx-auto text-white overflow-hidden transition-all duration-1000 cubic-bezier(0.16,1,0.3,1) ${isVisible
          ? "w-full max-w-7xl rounded-md md:rounded-md py-20 px-6 md:px-12 scale-100 opacity-100"
          : "w-[85%] max-w-3xl rounded-md py-12 px-6 scale-90 opacity-50"
          }`}
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={page?.image||"/home-hero/b2.png"}
            alt="Why Choose Nissan Business Solutions"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030B0B] via-[#0F2628]/90 to-[#0F2628]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto"> 
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-28">
            {page?.sub  &&(<span className="text-[14px] font-semibold tracking-widest text-[#E6F3F4] uppercase">{page?.sub} </span>)}
            {page?.title && (<h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">{page?.title}
            </h2>)}
          </div>
        {page?.detail &&
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {page?.detail?.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 group cursor-pointer">
                <div className="flex items-center justify-center text-white mb-3 [&>svg]:w-14 [&>svg]:h-14 [&>svg]:text-white transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:[&>svg]:text-[#5FAAAD]">
                   {typeof feat.icon === "string"? renderIcon(feat.icon): feat.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight pt-1 group-hover:text-[#E6F3F4] transition-colors duration-300">
                  {feat.title}
                </h3>
                <div className="text-[14px] text-[#E6F3F4]/90 leading-relaxed pt-1" dangerouslySetInnerHTML={{__html:feat.description}} />
              </div>
            ))}
          </div>}
        </div>
      </div>
    </section>
  );
}
