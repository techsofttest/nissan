"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ApplyModal from "@/components/online/modal";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface AboutSectionProps {
  showButton?: boolean;
  about:
  | {
    title: string;
    sub: string;
    content: string;
    image: string;
  }
  | undefined;
}

export default function AboutSection({
  about,
  showButton = true,
}: AboutSectionProps) {
  const [open, setOpen] = useState(false);

  return (<section id="about" className="py-24 bg-white"> <div className="max-w-7xl mx-auto px-6 md:px-12">
    {/* Heading */} <ScrollReveal direction="left"> <div className="mb-8"> <span className="text-[14px] font-semibold tracking-widest text-[#5FAAAD] uppercase">
      {about?.sub} </span>

      {about?.title && (
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-[#101820] leading-snug mt-2">
          {about.title}
        </h2>
      )}
    </div>
    </ScrollReveal>

    {/* L-shaped content flow */}
    <div className="flow-root">
      {/* Image floats right on desktop; content wraps beside and below */}
      <ScrollReveal
        direction="right"
        delay={200}
        className="w-full lg:w-[50%] lg:float-right lg:ml-10 lg:mb-6"
      >
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[520px] rounded-sm overflow-hidden group">
          <img
            src={about?.image || "/about/about.png"}
            alt="Nissan Business Solutions Team Consulting"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        </div>
      </ScrollReveal>

      {/* Content flows beside image, then across the full width below it */}
      <ScrollReveal direction="up" delay={150}>
        {about?.content && (
          <div
            className="space-y-4 text-base text-[#43515A] leading-relaxed pt-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
            dangerouslySetInnerHTML={{
              __html: about.content,
            }}
          />
        )}

        {showButton && (
          <div className="pt-4 pb-6">
            <Button
              type="button"
              onClick={() => setOpen(true)}
              variant="tertiary"
              icon={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              }
            >
              Apply
            </Button>
          </div>
        )}
      </ScrollReveal>
    </div>
  </div>

    <ApplyModal open={open} onClose={() => setOpen(false)} />
  </section>


  );
}
