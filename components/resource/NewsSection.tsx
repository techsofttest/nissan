
import React from "react";
import { Newspaper, ArrowUpRight, CheckCircle2, Globe2 } from "lucide-react";



export default function NewsSection({news}:{news:any[]}) {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFA] py-16 sm:py-20">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#DCE8E9 1px, transparent 1px), linear-gradient(90deg, #DCE8E9 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E2F2F2] text-[#439FA3]">
              <Newspaper size={25} />
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#17363B]">
               Latest <span className="text-[#439FA3]">News</span>
              </h2>
            </div>
          </div>

          <ArrowUpRight className="text-[#439FA3]" size={24} />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {news.map((item, index) => {

            return (
              <article
                key={index}
                className="group rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#439FA3]/50 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-[#439FA3]" />
                  <h3 className="text-xl font-bold leading-snug text-[#17363B]">
                    {item.title}
                  </h3>
                </div>

                <div className="text-sm leading-7 text-[#52616B] sm:text-base" dangerouslySetInnerHTML={{__html:item.content}} />

                <div className="mt-6 flex items-center gap-2 border-t border-[#EDF1F2] pt-4 text-sm font-medium text-[#439FA3]">
               <span>{item.sub}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}