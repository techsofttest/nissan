
import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
interface Banner{
    title: string;
    content: string;
    image?:string;
}
export default function Banner({title,content}:Banner) {
    return (
  <section className="relative overflow-hidden bg-[#102D33] text-white">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,170,173,0.22),transparent_40%)]" />
                 <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-28 -top-40 hidden h-[34rem] w-[34rem] rounded-full border border-white/10 lg:block"
                />
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

                 <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
                     <ScrollReveal direction="up">
                         <div className="max-w-3xl">
                            
                             <Link
                                 href="/service"
                                 className="group mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#A8D5D5] transition hover:text-white"
                             >
                                 <svg
                                     className="h-4 w-4 -translate-x-0.5 transition-transform group-hover:-translate-x-1"
                                     fill="none"
                                     stroke="currentColor"
                                     viewBox="0 0 24 24"
                                 >
                                     <path
                                         strokeLinecap="round"
                                         strokeLinejoin="round"
                                         strokeWidth={2}
                                         d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                     />
                                 </svg>
                                 <span>Back to Services</span>
                             </Link>
 
                             <h1 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                                 {title}
                                 <span className="text-[#5FAAAD]">.</span>
                             </h1>
 
                             {content && (
                                 <div
                                     className="mt-5 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-base sm:leading-8"
                                     dangerouslySetInnerHTML={{
                                         __html: content,
                                     }}
                                 />
                             )}
                         </div>
                     </ScrollReveal>
                 </div>
             </section>
 
    );
}