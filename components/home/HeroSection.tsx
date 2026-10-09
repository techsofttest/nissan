import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection({hero}:{hero:any}) {
  return (
    <section className="relative bg-[#0F2628] text-white pt-24 pb-4 md:pt-32 md:pb-6 overflow-hidden flex items-center h-[100vh]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero?.image || "home-hero/b8.png"}
          alt="Nissan Business Solutions Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full h-full flex flex-col justify-between pt-4 pb-2">
        {/* Top-Left Aligned Main Headline */}
        <ScrollReveal direction="down" className="self-start text-left max-w-2xl pt-4">
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.12]">{hero?.title}</h1>
        </ScrollReveal>

        {/* Bottom-Right Aligned Description & Action Controls */}
        <ScrollReveal direction="up" delay={200} className="self-end text-right max-w-lg space-y-3 mb-0 pb-0">
          <div className="text-sm sm:text-base text-white leading-relaxed font-medium ml-auto drop-shadow-sm" dangerouslySetInnerHTML={{__html:hero?.content || ""}} />

          <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-3 pt-4">
            <Button
              href="/contact"
              variant="primary-dark"
              size="md"
              className="!bg-white hover:!bg-[#E6F3F4] !text-[#101820] !border-white shadow-md font-bold"
              icon={
                <svg className="w-4 h-4 text-[#101820]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              }
              iconPosition="right"
            >
              Get a Consultation
            </Button>

            <Button
              href="/service"
              variant="secondary"
              size="md"
            >
              Explore Services
            </Button>
          </div>

          <div className="flex items-center justify-end gap-2 text-[13px] text-[#E6F3F4]/80 font-medium pt-1">
            <svg className="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Serving businesses with integrity since 1990</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
