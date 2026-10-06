"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ServicesMegaMenu from "@/components/global/ServicesMegaMenu";
import { ChevronDown } from "lucide-react";
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
  service: ServiceCategory[];
}

export default function Header({service}:ServicesMegaMenuProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<number | null>(null);
const [divisionOpen, setDivisionOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white backdrop-blur-md py-4 text-[#101820] border-b border-[#D9E0E3] shadow-md"
        : "bg-gradient-to-b from-[#0F2628]/95 via-[#0F2628]/80 to-transparent py-5 text-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="relative flex items-center group py-2.5 px-6 md:px-8">
          {/* Sliced White Background Badge fully covering the logo */}
          <span className="absolute top-[-2rem] bottom-[-1rem] -left-[100vw] -right-8 md:-right-16 bg-white shadow-md transform [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)] group-hover:bg-white/95 transition-all duration-300 pointer-events-none z-0" />

          <Image
            src="/logo/logo.png"
            alt="Nissan Business Solutions Logo"
            width={160}
            height={40}
            style={{ width: "auto" }}
            className="relative z-10 h-8 md:h-10 w-auto object-contain brightness-100 invert-0 transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav
          className={`hidden lg:flex items-center space-x-8 text-[15px] font-medium transition-colors ${scrolled ? "text-[#101820]" : "text-white"
            }`}
        >
          <a
            href="/"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-[#5FAAAD]"
              }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-[#5FAAAD]"
              }`}
          >
            About Us
          </a>

          {/* Full Width Services Mega Menu */}
          <div className="group static py-1">
            <a
              href="#services"
              className={`flex items-center gap-1.5 transition-colors font-semibold ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-[#5FAAAD]"
                }`}
            >
              <span>Services</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-90 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Full-Width Mega Banner Component */}
           {service && <ServicesMegaMenu services={service} />}
          </div>

          <a
            href="#why-us"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-[#5FAAAD]"
              }`}
          >
            Why Choose Us
          </a>
            <a
            href="/division"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-[#5FAAAD]"
              }`}
          >
           Division
          </a>
   
          <a
            href="#ecosystem"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-[#5FAAAD]"
              }`}
          >
            Resources
          </a>
          <a
            href="#contact"
            className={`transition-colors py-1 ${scrolled ? "hover:text-[#5FAAAD]" : "hover:text-[#5FAAAD]"
              }`}
          >
            Contact Us
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            href="#contact"
            variant={scrolled ? "primary" : "primary-dark"}
            size="sm"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            }
          >
            Get a Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 focus:outline-none transition-colors ${scrolled ? "text-[#101820]" : "text-white"
            }`}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto custom-scrollbar ${scrolled
            ? "bg-white text-[#101820] border-[#D9E0E3]"
            : "bg-[#0F2628] text-white border-[#18393D]"
            }`}
        >
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium py-1 hover:text-[#5FAAAD]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium py-1 hover:text-[#5FAAAD]"
          >
            About Us
          </a>

          {/* Mobile Services Accordion */}
          <div className="border-y border-[#18393D]/40 py-2 my-1">
            <div className="flex items-center justify-between py-1">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-bold hover:text-[#5FAAAD]"
              >
                Services
              </a>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="p-1 focus:outline-none text-[#5FAAAD]"
                aria-label="Toggle services list"
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="pt-2 space-y-4">
                {service.map((service, index) => (
                  <div key={index} className="pl-2 border-l-2 border-[#5FAAAD]">
                    <button
                      onClick={() =>
                        setActiveMobileCategory(activeMobileCategory === index ? null : index)
                      }
                      className="w-full text-left font-semibold text-[13.5px] text-[#5FAAAD] flex items-center justify-between py-1"
                    >
                      <span>{service.title}</span>
                      <span className="text-xs">{activeMobileCategory === index ? "−" : "+"}</span>
                    </button>

                    {activeMobileCategory === index && service.services && (
                      
                      <div className="pl-2 pt-2 space-y-2">
                      {service.services.map((item, i) => (
                          <a
                            key={i}
                            href="#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-start gap-2 text-[12.5px] text-white/90 hover:text-[#5FAAAD] py-1"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-[#5FAAAD] shrink-0 mt-0.5"
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
                          </a>
                        ))}
                      </div>

                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium py-1 hover:text-[#5FAAAD]"
          >
            Why Choose Us
          </a>
          <a
            href="#ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium py-1 hover:text-[#5FAAAD]"
          >
            Resources / Blog
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[16px] font-medium py-1 hover:text-[#5FAAAD]"
          >
            Contact Us
          </a>
          <div className="pt-2">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              }
            >
              Get a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
