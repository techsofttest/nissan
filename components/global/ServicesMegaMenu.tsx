import React from "react";
import Link from "next/link";

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
    <div className="
      absolute
      left-1/2
      top-full
      z-50
      w-screen
      -translate-x-1/2
      invisible
      opacity-0
      pointer-events-none
      group-hover/services:visible
      group-hover/services:opacity-100
      group-hover/services:pointer-events-auto
      transition-all
      duration-300
    ">
      <div className="bg-white shadow-2xl text-[#101820] py-8 px-6 md:px-12 max-h-[75vh] overflow-y-auto custom-scrollbar">
        <div className="max-w-7xl mx-auto">

          {services.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {services.map((category) => (
                <Link
                  href={`/service/${category.slug}`}
                  key={category.slug}
                  className="group/item space-y-4"
                >
                  <div className="border-b border-[#E6F3F4] pb-3">
                    <h4 className="text-[13.5px] font-bold text-[#0F2628] tracking-wide leading-snug transition-colors group-hover/item:text-[#5FAAAD]">
                      {category.title}
                    </h4>
                  </div>
                </Link>
              ))}

            </div>
          ) : (
            <p className="text-sm text-gray-500">
              No services available.
            </p>
          )}

        </div>
      </div>
    </div>
  );
}