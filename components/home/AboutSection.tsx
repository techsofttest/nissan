import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection({about}:{about:any}) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Headline Column */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left">
              <span className="text-[14px] font-semibold tracking-widest text-[#5FAAAD] uppercase">
               About Nissan Business Solutions 
              </span>{about.title &&
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-[#101820] leading-snug mt-2">
                {about.title}
              </h2>}
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
             {about.content &&(
              <div className="space-y-4 text-base text-[#43515A] leading-relaxed pt-2" dangerouslySetInnerHTML={{__html:about.content}} />)}
              <div className="pt-4">
                <Button
                  href="#why-us"
                  variant="tertiary"
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                >
                  Know about us
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image Box */}
          <div className="lg:col-span-6 h-full flex">
            <ScrollReveal direction="right" delay={200} className="w-full">
              <div className="relative w-full h-[400px] sm:h-[620px] rounded-sm overflow-hidden group">
                <img
                  src={about.image || "about/about.png"}
                  alt="Nissan Business Solutions Team Consulting"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Bottom Caption overlay */}{about.sub &&
                (<div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1">
                  <h3 className="text-lg font-semibold text-white tracking-tight">{about.sub}</h3>
                </div>)}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
