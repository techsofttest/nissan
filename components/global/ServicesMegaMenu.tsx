
import React from "react";

export interface ServiceCategory {
  title: string;
  slug: string;
}

interface ServicesMegaMenuProps {
  services: ServiceCategory[];
}

export default function ServicesMegaMenu({
  services = [],
}: ServicesMegaMenuProps) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-screen top-full opacity-0 invisible pointer-events-none group-hover/services:opacity-100 group-hover/services:visible group-hover/services:pointer-events-auto transition-all duration-300 z-50">
      <div className="bg-white shadow-2xl backdrop-blur-xl text-[#101820] py-8 px-6 md:px-12 max-h-[75vh] overflow-y-auto custom-scrollbar">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <a
                href={`/service/${service.slug}`}
                key={service.slug || index}
                className="space-y-4"
              >
                {/* Category Title */}
                <div className="border-b border-[#E6F3F4] pb-3">
                  <h4 className="text-[13.5px] font-bold text-[#0F2628] tracking-wide leading-snug flex items-center gap-2">
                    <span>{service.title}</span>
                  </h4>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
