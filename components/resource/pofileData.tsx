"use client";

import React from "react";

export default function ProfileData({admin}:{admin:any[]}) {
  const leadership = [
    {
      name: "Nisthar Hassan",
      designation: "Managing Director",
      phone: "+91-9349553027",
      email: "office@nissanbizsolutions.com",
      linkedin: "v",
    },
    {
      name: "Niyaz Hassan",
      designation: "Director",
      phone: "+91-9886692690",
      email: "office@nissanbizsolutions.com",
      linkedin: "",
    },
    {
      name: "Mammen Varghese",
      designation: "General Manager",
      phone: "+91-8086667323",
      email: "office@nissanbizsolutions.com",
      linkedin: "",
    },
  ];

  function BuildingIcon() {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 21h16M6 21V7l6-3 6 3v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M9 18h.01M15 18h.01" />
      </svg>
    );
  }

  function PhoneIcon() {
    return (
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03z" />
      </svg>
    );
  }

  function MailIcon() {
    return (
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  return (
    <section className="w-full bg-[#F3FBFB] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#276F70]">
            <span className="h-px w-7 bg-[#5FAAAD]" />
            Administration
            <span className="h-px w-7 bg-[#5FAAAD]" />
          </p>
        </div>

        {/* Leadership cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {admin.map((person, index) => (
            <article
              key={person.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#D7E8E6] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0056D2]/30 hover:shadow-xl sm:p-7"
            >
              {/* Brand accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0F2628] to-[#5FAAAD]" />

              {/* Icon and designation */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#5FAAAD]/10 text-[#0F2628] transition-colors duration-300 group-hover:bg-[#0F2628] group-hover:text-white">
                  <BuildingIcon />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#276F70]">
                    {person.option}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Leadership {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>

              {/* Name */}
              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#102D33] sm:text-2xl">
                {person.title}
              </h3>

              <div className="my-5 h-px bg-gray-100" />

              {/* Contact details */}
              <div className="mt-auto space-y-3">
                {person.phone && (
                  <a
                    href={`tel:${person.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-3 rounded-xl bg-[#F3FBFB] p-3 text-sm text-[#0F2628] transition-colors hover:bg-[#E7F4F4] hover:text-[#5FAAAD]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#5FAAAD] shadow-sm">
                      <PhoneIcon />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Mobile
                      </span>
                      <span className="mt-0.5 block font-medium">
                        {person.phone}
                      </span>
                    </span>
                  </a>
                )}

                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-3 rounded-xl bg-[#F3FBFB] p-3 text-sm text-[#0F2628] transition-colors hover:bg-[#E7F4F4] hover:text-[#5FAAAD]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#5FAAAD] shadow-sm">
                      <MailIcon />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Official Email
                      </span>
                      <span className="mt-0.5 block break-all font-medium">
                        {person.email}
                      </span>
                    </span>
                  </a>
                )}

                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-[#F3FBFB] p-3 text-sm text-[#0F2628] transition-colors hover:bg-[#E7F4F4] hover:text-[#5FAAAD]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg  bg-white text-[#5FAAAD] font-bold">
                      in
                    </span>
                    View LinkedIn Profile
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
