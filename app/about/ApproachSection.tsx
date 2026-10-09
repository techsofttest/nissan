import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Work {
  title: string;
  content: string;
  image: string;
}

interface WorkData {
  work?: Work;
}

export default function ApproachSection({ work }: WorkData) {
  return (
    <section
      id="approach"
      className="relative overflow-hidden border-b border-[#D9E0E3] bg-[#F7F9F9]"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(16,45,51,0.08)] lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[450px] lg:min-h-[600px]">
            <img
              src={work?.image || "/our-approach/o2.png"}
              alt={work?.title || "Our Commitment"}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102D33]/50 via-transparent to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative flex items-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16 xl:px-20">

            {/* Decorative element */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#5FAAAD]/10 blur-2xl"
            />

            <ScrollReveal direction="right">
              <div className="relative max-w-xl">

                {/* Eyebrow */}
            

                {/* Heading */}
                <h2 className="max-w-lg text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#102D33] sm:text-4xl lg:text-[3.25rem]">
                 {work?.title}
                  <span className="text-[#5FAAAD]">.</span>
                </h2>

                {/* Content */}
                {work?.content && (
                  <div
                    className="
                      mt-7
                      max-w-xl
                      text-[15px]
                      leading-7
                      text-[#536568]
                      sm:text-base
                      sm:leading-8
                      [&>p]:mb-4
                      [&>p:last-child]:mb-0
                    "
                    dangerouslySetInnerHTML={{
                      __html: work.content,
                    }}
                  />
                )}


              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}