import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Client {
  image: string;
  title?: string;
}

interface TrustMarqueeProps {
  client?: Client[];
  clientpage:{
    title: string;
    sub: string;
    content: string;
    }| undefined;
}

export default function TrustMarquee({ client = [],clientpage }: TrustMarqueeProps) {
  return (
    <section className="py-20 bg-white overflow-hidden">

        <ScrollReveal direction="up">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-4 mb-12">
            <span className="text-[14px] font-semibold tracking-widest text-[#5FAAAD] uppercase">{clientpage?.title}</span>

            <h2 className="text-2xl sm:text-5xl font-semibold tracking-tight text-[#101820]" dangerouslySetInnerHTML={{__html:clientpage?.sub ?? ""}} />

            <div className="text-[15px] text-[#43515A]" dangerouslySetInnerHTML={{__html:clientpage?.content ?? ""}} />
          </div>
        </ScrollReveal>

        <div className="relative w-full overflow-hidden mt-24">
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center py-4">

            {[...client, ...client].map((logo, index) => (
              <div key={`${logo.image}-${index}`}
                className="inline-flex items-center justify-center shrink-0 opacity-75 hover:opacity-100 transition-all duration-300 px-4 group" >
                <img  alt={logo.title || "Client Partner Logo"} src={logo.image}
                  className="h-18 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"/>
              </div>
            ))}

          </div>
        </div>

    </section>
  );
}