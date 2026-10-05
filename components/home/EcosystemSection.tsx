import React from "react";
import Button from "@/components/ui/Button";

export default function EcosystemSection() {
  const trainingColumns = [
    {
      title: "School of Accounts & Management",
      description: "Practical hands-on training in manual and computerized accounting practices and EDP-related business management skills.",
      cta: "Explore Practical Training",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Placement Assistance",
      description: "Career development and placement assistance provided to successful candidates upon completing practical accounting programs.",
      cta: "Learn Placement Path",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Online EDP Training",
      description: "Flexible online Entrepreneurial Development Programmes covering essential domains of modern business and industrial management.",
      cta: "Discover Online EDP",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-[#F3FBFB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[14px] font-semibold tracking-widest text-[#5FAAAD] uppercase">
            EXTENDED ECOSYSTEM
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-[#101820]">
            Supporting businesses. Developing professionals.
          </h2>
          <p className="text-base text-[#43515A] leading-relaxed">
            Beyond consultancy services, Nissan Business Solutions supports practical accounting training, placement assistance, and online Entrepreneurial Development Programmes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingColumns.map((col, idx) => (
            <div
              key={idx}
              className="relative rounded-sm overflow-hidden border border-[#D9E0E3] bg-white group flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0F2628]/30 group-hover:bg-[#0F2628]/20 transition-colors" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-[#101820]">
                    {col.title}
                  </h3>
                  <p className="text-[14px] text-[#43515A] leading-relaxed">
                    {col.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button
                  href="#contact"
                  variant="tertiary"
                  size="sm"
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                >
                  {col.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
