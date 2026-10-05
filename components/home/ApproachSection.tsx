import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface WorkDetail {
  title: string;
  icon: string;
  description: string;
}

interface Work {
  title: string;
  sub: string;
  content: string;
  image: string;
  detail: WorkDetail[];
}

interface WorkData {
  work?: Work;
}

export default function ApproachSection({ work }: WorkData) {
  const renderIcon = (icon: string) => {
    const svg = icon
      .replace(/strokeLinecap=/g, "stroke-linecap=")
      .replace(/strokeLinejoin=/g, "stroke-linejoin=")
      .replace(
        /strokeWidth=\{([^}]+)\}/g,
        'stroke-width="$1"'
      );

    return (
      <span
        className="[&>svg]:w-6 [&>svg]:h-6"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  };

  return (
    <section
      id="approach"
      className="relative bg-white border-b border-[#D9E0E3] overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[550px]">

        {/* Left Image */}
        <div className="lg:col-span-6 relative order-2 lg:order-1 min-h-[380px] lg:min-h-[550px]">
          <img
            src={work?.image || "our-approach/o2.png"}
            alt="Our Approach to Business Consulting"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 order-1 lg:order-2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center space-y-6">
          <ScrollReveal direction="right">
            <div className="max-w-xl space-y-6">

              {/* Small heading */}
              <span className="text-[14px] font-semibold tracking-widest text-[#5FAAAD] uppercase">
                {work?.sub}
              </span>

              {/* Main heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101820]">
                {work?.title}
              </h2>

              {/* Content */}
              <div className="text-base text-[#43515A] leading-relaxed" dangerouslySetInnerHTML={{  __html: work?.content ?? "",}}  />

              {/* Dynamic list */}
              <ul className="pt-2 space-y-4">
                {Array.isArray(work?.detail) &&
                  work.detail.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <div className="p-2.5 rounded-full bg-[#E6F3F4] text-[#5FAAAD] shrink-0">
                        {renderIcon(item.icon)}
                      </div>

                      <span className="text-lg font-semibold text-[#101820]">
                        {item.title}
                      </span>
                      {/* <div className="text-[14px] text-[#101820]/90 leading-relaxed pt-1" dangerouslySetInnerHTML={{__html:item.description}} /> */}
                    </li>
                  ))}
              </ul>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}