import React from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VisionSection({our}:{our:any}) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F2628] text-white overflow-hidden min-h-[550px] flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={our.image ||"/home-hero/b3.png"}
          alt="Corporate Vision & Mission"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/65" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full space-y-12">
        {/* Section Headline */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20">

              <div className="text-left space-y-3">
                {our.title &&
                <span className="text-[14px] font-semibold tracking-widest text-[#E6F3F4] uppercase">
                  {our.title}
                </span>}
                  {our.sub &&
                <div className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-white leading-tight"  dangerouslySetInnerHTML={{__html: our.sub ?? "", }}/>}
              </div>

            {/* <div
              className=" text-left  text-[15px] sm:text-base text-[#E6F3F4]/90 leading-relaxed [&_p]:mb-3 [&_ul]:list-disc  [&_ul]:pl-5 [&_ul]:mb-3 [&_ol]:list-decimal [&_ol]:pl-5  [&_ol]:mb-3  [&_li]:mb-1 [&_strong]:font-semibold
              " dangerouslySetInnerHTML={{
                __html: our.content ?? "",
              }}
            /> */}
          </div>
        </ScrollReveal>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4 items-start">
          {/* Vision */}
          <ScrollReveal direction="up" delay={150}>
            <div className="relative space-y-3 bg-[#0F2628]/90 backdrop-blur-sm p-6 md:p-8 rounded-sm h-full overflow-hidden group">
              {/* Animated Wave SVG Background */}
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M-50 150 C 100 80, 200 220, 450 120"
                    stroke="#5FAAAD"
                    strokeWidth="3"
                    className="animate-wave-line"
                  />
                  <path
                    d="M-50 180 C 120 240, 250 90, 450 200"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    className="animate-wave-line"
                  />
                  <path
                    d="M-50 100 C 150 200, 280 60, 450 160"
                    stroke="#5FAAAD"
                    strokeWidth="1.5"
                    opacity="0.6"
                    className="animate-wave-line"
                  />
                </svg>
              </div>
              {(our.detail?.[0]?.title || our.detail?.[0]?.description) && (
              <div className="relative z-10 space-y-3">    {our.detail?.[0]?.title && (
                <h3 className="text-xl sm:text-4xl font-semibold text-white mb-4"> {our.detail?.[0]?.title}</h3>)}
                      {our.detail?.[0]?.description && ( <div className="text-basetext-[#E6F3F4] leading-relaxed [&_p]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3 [&_strong]:font-semibold 
                  [&_a]:underline[&_a]:text-[#7CC6C9]" dangerouslySetInnerHTML={{__html:our.detail?.[0]?.description}} />)}
              </div>)}
            </div> 
          </ScrollReveal>

          {/* Mission (Shifted UPWARD like a step) */}
          <ScrollReveal direction="up" delay={300} className="md:-mt-12 lg:-mt-16 ">
            <div className="relative space-y-3 bg-[#0F2628]/90 backdrop-blur-sm p-6 md:p-8 rounded-sm h-full overflow-hidden group">
              {/* Animated Wave SVG Background */}
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M-50 120 C 150 220, 250 80, 450 180"
                    stroke="#5FAAAD"
                    strokeWidth="3"
                    className="animate-wave-line"
                  />
                  <path
                    d="M-50 200 C 100 90, 280 230, 450 110"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    className="animate-wave-line"
                  />
                  <path
                    d="M-50 160 C 120 70, 220 240, 450 130"
                    stroke="#5FAAAD"
                    strokeWidth="1.5"
                    opacity="0.6"
                    className="animate-wave-line"
                  />
                </svg>
              </div>

                 {(our.detail?.[1]?.title || our.detail?.[1]?.description) && (
              <div className="relative z-10 space-y-3">    {our.detail?.[1]?.title && (
                <h3 className="text-xl sm:text-4xl font-semibold text-white mb-4"> {our.detail?.[1]?.title}</h3>)}
                      {our.detail?.[1]?.description && ( <div className="text-basetext-[#E6F3F4] leading-relaxed [&_p]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3 [&_strong]:font-semibold 
                  [&_a]:underline[&_a]:text-[#7CC6C9]" dangerouslySetInnerHTML={{__html:our.detail?.[1]?.description}} />)}
              </div>)}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
