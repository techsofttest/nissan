"use client";

import React from "react";
import Link from "next/link";

export interface ServiceCategory {
  title: string;
  slug: string;
}

interface ServicesMegaMenuProps {
  services: ServiceCategory[];
}

export default function ServicesMegaMenu({ services }: ServicesMegaMenuProps) {
  return (
    <div className="absolute left-0 right-0 top-full invisible z-50 opacity-0 transition-all duration-300 group-hover/services:visible group-hover/services:opacity-100">
      <div className="custom-scrollbar max-h-[75vh] overflow-y-auto bg-white/95 px-6 py-8 text-[#101820] shadow-2xl backdrop-blur-xl md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((category, index) => (
              <Link
                key={category.slug || index}
                href={`/service/${category.slug}`}
                className="group/cat flex items-center justify-between rounded-lg border border-[#E6F3F4] bg-white p-4 text-[14px] font-bold tracking-wide text-[#0F2628] shadow-sm transition-all duration-200 hover:border-[#5FAAAD] hover:bg-[#5FAAAD]/5 hover:text-[#5FAAAD]"
              >
                <span>{category.title}</span>
                <svg
                  className="h-4 w-4 shrink-0 text-[#5FAAAD] transition-transform duration-200 group-hover/cat:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}