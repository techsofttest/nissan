import React from "react";

export interface ServiceItem {
  title: string;
  slug: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  services: ServiceItem[];
}

interface ServicesMegaMenuProps {
  services: ServiceCategory[];
}

export default function ServicesMegaMenu({
  services,
}: ServicesMegaMenuProps) {
  return (
    <div className="absolute left-0 right-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <div className="bg-white shadow-2xl backdrop-blur-xl text-[#101820] py-8 px-6 md:px-12 max-h-[75vh] overflow-y-auto custom-scrollbar">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
            <a href={`/service/${service.slug}`} key={service.slug || index} className="space-y-4">

                {/* Category Title */}
                <div className="border-b border-[#E6F3F4] pb-3">
                  <h4 className="text-[13.5px] font-bold text-[#0F2628] tracking-wide leading-snug flex items-center gap-2">
                    <span>{service.title}</span>
                  </h4>
                </div>

                {/* Sub-services */}{service.services &&(
                <ul className="space-y-2.5">
                  {service.services.map((item, i) => (
                    <li
                      key={item.slug || i}
                      className="group/item"
                    >
                      <div
                        className="flex items-start gap-2 text-[13px] text-[#2C3E50] font-medium hover:text-[#5FAAAD] transition-colors leading-snug"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-[#5FAAAD] shrink-0 mt-0.5 group-hover/item:text-[#0F2628] transition-colors"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M4 3v7h8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <span>{item.title}</span>
                      </div>
                    </li>
                  ))}
                </ul>)}

              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}