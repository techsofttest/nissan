import React from "react";
import Button from "@/components/ui/Button";

interface Service {
  slug: string;
  title: string;
  image: string;
  content: string;
  services: string[];
}

interface Data {
  service: Service[];
  compact?: boolean;
}

export default function ServicesSection({
  service,
  compact = false,
}: Data) {
  return (
    <div
      className={
        compact
          ? "w-full"
          : "bg-[#F3FBFB] py-24"
      }
    >
      <div
        className={
          compact
            ? "w-full"
            : "mx-auto max-w-7xl px-6 md:px-12"
        }
      >

        {/* Heading - only for normal ServicesSection */}
        {!compact && (
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <span className="text-[14px] font-semibold uppercase tracking-widest text-[#5FAAAD]">
              OUR CORE SERVICES
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-[#101820] sm:text-3xl lg:text-5xl">
              Solutions built around your business needs.
            </h2>
          </div>
        )}

        {/* Services */}
        <div
          className={
            compact
              ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "grid grid-cols-1 gap-8 md:grid-cols-2"
          }
        >
          {service.map((item, index) => (
            <div
              key={item.slug || index}
              className="overflow-hidden rounded-sm bg-white shadow-sm"
            >
              {/* Image */}
              <div
                className={
                  compact
                    ? "h-[200px] w-full overflow-hidden"
                    : "h-[260px] w-full overflow-hidden"
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div
                className={
                  compact
                    ? "flex min-h-[220px] flex-col justify-between p-6"
                    : "flex min-h-[260px] flex-col justify-between p-6 sm:p-8"
                }
              >
                <div>
                  <h3
                    className={
                      compact
                        ? "text-lg font-bold leading-snug text-[#102D33]"
                        : "text-xl font-bold text-[#101820] sm:text-2xl"
                    }
                  >
                    {item.title}
                  </h3>

                  <div
                    className={
                      compact
                        ? "mt-3 text-sm leading-6 text-[#536568]"
                        : "mt-4 text-[14px] leading-relaxed text-[#43515A]"
                    }
                    dangerouslySetInnerHTML={{
                      __html: item.content,
                    }}
                  />
                </div>

                {/* Button */}
                <div className="mt-5">
                  <Button
                    href={`/service/${item.slug}`}
                    variant="tertiary"
                    size="sm"
                    icon={
                      <svg
                        className="h-4 w-4 text-[#5FAAAD]"
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
                    View more
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}