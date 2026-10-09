import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";


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

export default function CtaPage() {
  return (<section className="relative min-h-[420px] overflow-hidden">

        {/* Full Section Image */}
        <img
          src="/home-hero/cta.png"
          alt="nsme"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0F2628]/65" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[420px] items-center justify-center px-6 py-16 text-center sm:px-8 lg:px-12">

          <ScrollReveal direction="up">
            <div className="mx-auto max-w-3xl">

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Need professional support?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-base sm:leading-8">
                Talk to our team about your requirements and discover how we
                can support your business.
              </p>

              <div className="mt-8 flex justify-center">
                <Button
                  href="/contact"
                  variant="primary-dark"
                  size="sm"
                  icon={
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
                  }
                >
                  Get a Consultation
                </Button>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>
  );
}
