
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import Button from "@/components/ui/Button";
import ServicesMegaMenu from "@/components/global/ServicesMegaMenu";

export interface ServiceItem {
  title: string;
  slug: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  services: ServiceItem[];
}

interface HeaderProps {
  service: ServiceCategory[];
}

export default function Header({ service = [] }: HeaderProps) {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] =
    useState<number | null>(null);

  // Use a solid header on service routes, even before scrolling.
  const isServicePage = /^\/service(?:\/|$)/.test(pathname ?? "");
  const isSolidHeader = isServicePage || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile drawer when navigating to another page.
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setActiveMobileCategory(null);
  }, [pathname]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setActiveMobileCategory(null);
  };

  const navLinkClass =
    "whitespace-nowrap py-2 transition-colors duration-200 hover:text-[#5FAAAD]";

  const mobileLinkClass =
    "block w-full py-2.5 text-[15px] font-medium transition-colors hover:text-[#5FAAAD]";

  return (
   <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isSolidHeader
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
        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className={`hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:gap-4 min-[1280px]:gap-6 min-[1360px]:gap-7 text-[13px] min-[1360px]:text-sm font-medium ${
            isSolidHeader ? "text-[#101820]" : "text-white"
          }`}
        >
          <Link href="/about" className={navLinkClass}>
            About Us
          </Link>

          {/* Services mega menu */}
          <div className="group/services relative py-2">
            <Link
              href="/service"
              className={`${navLinkClass} flex items-center gap-1.5 font-semibold`}
            >
              Services
              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover/services:rotate-180"
              />
            </Link>

            {service.length > 0 && (
              <ServicesMegaMenu services={service} />
            )}
          </div>

          <Link href="/why-us" className={navLinkClass}>
            Why Choose Us
          </Link>

          <Link href="/division" className={navLinkClass}>
            Division
          </Link>

          <Link href="/resourse" className={navLinkClass}>
            Resources
          </Link>

          <Link href="/career" className={navLinkClass}>
            Career
          </Link>

          <Link href="/contact" className={navLinkClass}>
            Contact Us
          </Link>
        </nav>

        {/* Desktop appointment button */}
        <div className="hidden shrink-0 min-[1200px]:block">
          <Button
            href="/contact#contact-form"
            variant={isSolidHeader ? "primary" : "primary-dark"}
            size="sm"
            icon={
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            }
          >
            For Appointments
          </Button>
        </div>

        {/* Mobile / tablet menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className={`flex shrink-0 items-center justify-center rounded-lg p-2.5 transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5FAAAD] min-[1200px]:hidden ${
            isSolidHeader ? "text-[#101820]" : "text-white"
          }`}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile / tablet navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className={`absolute inset-x-0 top-full max-h-[calc(100dvh-65px)] overflow-y-auto overscroll-contain border-t px-5 pb-6 pt-4 shadow-xl sm:px-8 sm:pb-8 min-[1200px]:hidden ${
            isSolidHeader
              ? "border-[#D9E0E3] bg-white text-[#101820]"
              : "border-[#18393D] bg-[#0F2628] text-white"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex w-full max-w-2xl flex-col divide-y divide-current/10"
          >
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={mobileLinkClass}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={mobileLinkClass}
            >
              About Us
            </Link>

            {/* Services accordion */}
            <div className="py-2">
              <div className="flex items-center justify-between gap-3">
                <Link
                  href="/service"
                  onClick={closeMobileMenu}
                  className="py-2.5 text-[15px] font-semibold transition-colors hover:text-[#5FAAAD]"
                >
                  Services
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  aria-label="Toggle services list"
                  aria-expanded={mobileServicesOpen}
                  className="rounded-md p-2 text-[#5FAAAD] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5FAAAD]"
                >
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="space-y-1 pb-2 pl-3">
                  {service.map((category, index) => (
                    <div
                      key={category.slug}
                      className="border-l-2 border-[#5FAAAD]/60 pl-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={`/service/${category.slug}`}
                          onClick={closeMobileMenu}
                          className="min-w-0 flex-1 py-2 text-sm font-semibold text-[#5FAAAD] hover:underline"
                        >
                          {category.title}
                        </Link>

                        {category.services?.length > 0 && (
                          <button
                            type="button"
                            onClick={() =>
                              setActiveMobileCategory((active) =>
                                active === index ? null : index
                              )
                            }
                            aria-label={`Toggle ${category.title} services`}
                            aria-expanded={activeMobileCategory === index}
                            className="rounded-md p-2 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5FAAAD]"
                          >
                            <ChevronDown
                              size={17}
                              className={`transition-transform duration-200 ${
                                activeMobileCategory === index
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {activeMobileCategory === index &&
                        category.services?.length > 0 && (
                          <div className="space-y-1 pb-2 pl-2">
                            {category.services.map((item) => (
                              <Link
                                key={item.slug}
                                href={`/service/${category.slug}/${item.slug}`}
                                onClick={closeMobileMenu}
                                className="flex items-start gap-2 py-2 text-[13px] leading-5 opacity-80 transition-colors hover:text-[#5FAAAD] hover:opacity-100"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5FAAAD]"
                                />
                                <span>{item.title}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}

                  {service.length === 0 && (
                    <p className="py-2 text-sm opacity-70">
                      No services available.
                    </p>
                  )}
                </div>
              )}
            </div>

            <Link
              href="/why-us"
              onClick={closeMobileMenu}
              className={mobileLinkClass}
            >
              Why Choose Us
            </Link>

            <Link
              href="/division"
              onClick={closeMobileMenu}
              className={mobileLinkClass}
            >
              Division
            </Link>

            <Link
              href="/resourse"
              onClick={closeMobileMenu}
              className={mobileLinkClass}
            >
              Resources / Blog
            </Link>

            <Link
              href="/career"
              onClick={closeMobileMenu}
              className={mobileLinkClass}
            >
              Career
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={mobileLinkClass}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile appointment CTA */}
          <div className="mx-auto mt-5 w-full max-w-2xl">
            <Button
              href="/contact#contact-form"
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={closeMobileMenu}
              icon={
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              }
            >
              For Appointments
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
