"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

export default function LifecycleSection() {
  const [activeStage, setActiveStage] = useState(0);

  const serviceStages = [
    {
      number: "01",
      title: "START",
      category: "Business Registration",
      description: "Establish your business with the right registrations and legal documentation for seamless launch.",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "COMPLY",
      category: "Tax & Government Registrations",
      description: "Manage GST, PAN, TAN, MSME, and regulatory compliance effortlessly with expert guidance.",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "PROTECT",
      category: "Intellectual Property",
      description: "Safeguard your identity, creative work, brand name, and innovations via Trademarks, Copyrights & Patents.",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "CERTIFY",
      category: "Certifications",
      description: "Acquire ISO certification, ISI quality standards, and industry credentials to establish market leadership.",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "MANAGE",
      category: "Accounting & Financial Services",
      description: "Structured accounts preparation, financial presentation, and ongoing business documentation.",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      number: "06",
      title: "OPERATE",
      category: "Licensing & Compliance",
      description: "Navigate complex commercial licences, government approvals, and statutory operational requirements.",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-[#D9E0E3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-[14px] font-semibold tracking-widest text-[#5FAAAD] uppercase">
            STRUCTURED LIFECYCLE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-[#101820]">
            From starting a business to running it with confidence.
          </h2>
          <p className="text-base text-[#43515A] leading-relaxed">
            Our services cover key requirements across business registration, compliance, intellectual property, certification, accounting and statutory licensing.
          </p>
        </div>

        {/* Interactive Stage Selector */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Stage Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {serviceStages.map((stage, idx) => (
              <button
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`w-full text-left p-4 rounded-sm transition-all duration-200 border flex items-center justify-between ${activeStage === idx
                  ? "bg-[#0F2628] text-white border-[#0F2628] shadow-md"
                  : "bg-[#F3FBFB] text-[#101820] border-[#D9E0E3] hover:bg-[#E6F3F4]/60"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[14px] font-mono font-semibold px-2 py-1 rounded-sm ${activeStage === idx ? "bg-[#5FAAAD] text-white" : "bg-[#D9E0E3] text-[#43515A]"
                    }`}>
                    {stage.number}
                  </span>
                  <div>
                    <div className="text-[14px] tracking-wider uppercase font-semibold text-opacity-80">
                      {stage.title}
                    </div>
                    <div className="text-[15px] font-medium">
                      {stage.category}
                    </div>
                  </div>
                </div>
                <span>{stage.icon}</span>
              </button>
            ))}
          </div>

          {/* Stage Detail Card */}
          <div className="lg:col-span-7 bg-[#F3FBFB] border border-[#D9E0E3] rounded-sm p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6F3F4] rounded-bl-full -z-0 opacity-60" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-mono font-semibold text-[#5FAAAD]">
                  {serviceStages[activeStage].number}
                </span>
                <span className="text-[14px] font-semibold tracking-widest text-[#43515A] uppercase bg-white px-3 py-1 border border-[#D9E0E3] rounded-sm">
                  STAGE {serviceStages[activeStage].title}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-[#101820]">
                {serviceStages[activeStage].category}
              </h3>

              <p className="text-base text-[#43515A] leading-relaxed">
                {serviceStages[activeStage].description}
              </p>

              <div className="pt-4 border-t border-[#D9E0E3] space-y-2">
                <h4 className="text-[14px] font-semibold text-[#101820] uppercase tracking-wider">Key Focus Areas:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[14px] text-[#43515A]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5FAAAD]" />
                    Full Legal Advisory
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5FAAAD]" />
                    Statutory Approvals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5FAAAD]" />
                    Documentation Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5FAAAD]" />
                    Proactive Execution
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative z-10 pt-8">
              <Button href="#services" variant="primary">
                View Related Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
