import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServicesSection from "@/components/service/listPage";

export type ServiceItem = {
  slug: string;
  title: string;
  image: string;
  content: string;
  services: string[];
};

interface Props {
  service: ServiceItem;
  otherServices: ServiceItem[];
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
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
  );
}

export default function ServiceDetail({
  service,
  otherServices,
}: Props) {
  return (
    <>
      {/* Service Details */}
    <section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">

      <div className="lg:sticky lg:top-24 lg:self-start">
        <ScrollReveal direction="left">
          
       <Link
                                 href="/service"
                                 className="group mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#276F70] transition hover:text-[#0F2628]"
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
          <div className="group relative overflow-hidden rounded-sm bg-[#F3F7F7] shadow-sm">
            <img
              src={service.image}
              alt={service.title}
              className="h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[420px] lg:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102D33]/20 via-transparent to-transparent" />
          </div>
        </ScrollReveal>
      </div>

      {/* RIGHT - NORMAL PAGE SCROLL */}
      <ScrollReveal direction="right">
        <div>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#5FAAAD]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#276F70]">
              our Services
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-[#102D33] sm:text-3xl">
           {service.title}
          </h2>
           {service.content && (
                                 <div
                                     className="mt-5 max-w-2xl text-[15px] leading-7 text-[#43515A] sm:text-base sm:leading-8"
                                     dangerouslySetInnerHTML={{
                                         __html: service.content,
                                     }}
                                 />
                             )}

          <div className="mt-6 space-y-3">
            {service.services.map((item, index) => (
              <div
                key={index}
                className="group flex gap-3.5 rounded-sm border border-[#E6EEED] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#0F2628] hover:shadow-lg sm:p-5"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E1F0EF] text-xs font-bold text-[#276F70] transition-colors duration-300 group-hover:bg-[#5FAAAD]/20 group-hover:text-[#5FAAAD]">
                  {index + 1}
                </div>

                <p className="text-[14px] leading-6 text-[#43515A] transition-colors duration-300 group-hover:text-[#E6F3F4]/95 sm:leading-7">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </ScrollReveal>

    </div>
  </div>
</section>

      {/* Other Services */}
      {otherServices.length > 0 && (
        <section className="border-t border-[#F1F5F5] bg-[#F7F9F9]">
          <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">

            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#276F70]">
                  Explore More
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#102D33] sm:text-3xl">
                  Other Services
                </h2>
              </div>

              <Link
                href="/service"
                className="group hidden items-center gap-2 text-sm font-semibold text-[#276F70] transition hover:text-[#102D33] sm:inline-flex"
              >
                View All Services

                <span className="transition-transform group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            {/* Reusable Services Section */}
            <ServicesSection
              service={otherServices}
              compact
            />

            {/* Mobile View All */}
            <div className="mt-6 flex justify-center sm:hidden">
              <Link
                href="/service"
                className="group inline-flex items-center gap-2 rounded-full border border-[#DCE8E7] bg-white px-5 py-2.5 text-sm font-semibold text-[#276F70] shadow-sm transition hover:border-[#A8C7C2] hover:text-[#102D33]"
              >
                View All Services

                <span className="transition-transform group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </Link>
            </div>

          </div>
        </section>
      )}
    </>
  );
}