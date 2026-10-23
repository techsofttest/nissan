import Button from "@/components/ui/Button";

const arrow = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[13px] font-bold text-[#5FAAAD] uppercase tracking-wider mb-3">{children}</p>
);
interface Profiledata {
  profile: {
    title: string;
    subtitle: string;
    content: string;
    detail: {
      title: string;
      description: string;
    }[];
  } | undefined;
  career: {
    title: string;
    subtitle: string;
    content: string;
    detail: {
      title: string;
      icon: string;
      description: string;
    }[];
  } | undefined;
  job: {
    title: string;
    department: string;
    description: string;
    id: number;
    employment_type: string;
    location: string;
    responsibilities: string[],
    qualifications: string;
    experience: string;
    skills: string[];
    deadline: string;
  }[];
}

export default function CareersPage({ profile, job, career }: Profiledata) {
  return (
    <main className="overflow-x-hidden">
      {profile?.title && profile?.subtitle && profile?.content && profile?.detail && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16" aria-labelledby="profiles">
          {profile?.title && <Eyebrow>{profile?.title}</Eyebrow>}
          {profile?.subtitle && <h2 id="profiles" className="text-3xl font-bold">{profile?.subtitle}</h2>}
          {profile?.content && <div className="mt-3 mb-8 max-w-3xl text-[#3b4650]" dangerouslySetInnerHTML={{ __html: profile?.content ?? "" }} />}
          {profile?.detail?.some((c) => c.title || c.description) && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {profile?.detail.map((c, idx) => (
                <article key={idx} className="rounded-xl bg-white border border-[#D9E0E3] border-t-4 border-t-[#5FAAAD] p-6">
                  <h3 className="text-[17px] font-bold">{c.title}</h3>
                  <div className="mt-2 text-[14.5px] leading-relaxed text-[#3b4650]" dangerouslySetInnerHTML={{ __html: c.description }} />
                </article>
              ))}
            </div>)}
        </section>)}
      <section
        className="bg-white border-y border-[#D9E0E3]"
        aria-labelledby="openings"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">

          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              {career?.title && <Eyebrow>{career?.title}</Eyebrow>}
              {career?.subtitle && <h2
                id="openings"
                className="text-3xl md:text-4xl font-bold tracking-tight mt-3"
              >{career?.subtitle}
              </h2>}
              {career?.content && <div className="text-[15px] text-[#5A6A72] mt-3 max-w-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: career?.content ?? "" }} />}
            </div>

            {job.length > 0 && (
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0A6F8F] bg-[#0A6F8F]/8 border border-[#0A6F8F]/20 rounded-full px-4 py-1.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#5FAAAD] animate-pulse" />
                {job.length} {job.length === 1 ? "role" : "roles"} open
              </span>
            )}
          </div>

          {/* ── Empty state ── */}
          {job.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-[#5FAAAD]/50 bg-[#F3FBFB] p-8 md:p-12 text-center max-w-3xl mx-auto">
              {/* Icon */}
              {career?.detail?.[0]?.icon && <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0A6F8F]/10 mb-5 text-[#0A6F8F]"
                dangerouslySetInnerHTML={{
                  __html: career?.detail?.[0]?.icon ?? "",
                }}
              />}

              {career?.detail[0].title && <p className="text-[17px] font-semibold text-[#0F2628] mb-2">
                {career?.detail[0].title}
              </p>}
              {career?.detail[0].description && <div className="text-[15px] leading-relaxed text-[#5A6A72] max-w-md mx-auto mb-6" dangerouslySetInnerHTML={{ __html: career?.detail[0].description ?? "" }} />}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href={`?job=${encodeURIComponent(String("general"))}#apply`} variant="primary" size="md" icon={arrow}>
                  Submit Your CV
                </Button>
                <a
                  href="#profiles"
                  className="text-[14px] font-semibold text-[#0A6F8F] hover:text-[#0F2628] transition-colors underline underline-offset-4 decoration-[#5FAAAD]/50 hover:decoration-[#0F2628]/50"
                >
                  View profiles we look for
                </a>
              </div>
            </div>
          ) : (
            /* ── Job cards ── */
            <ul className="grid gap-5">
              {job.map((j) => (
                <li
                  key={j.id}
                  className="group relative rounded-2xl border border-[#D9E0E3] bg-[#F3FBFB] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(10,111,143,0.08)] hover:border-[#5FAAAD]/40 hover:-translate-y-0.5"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0A6F8F] transition-all duration-300 group-hover:w-1.5" />

                  <div className="p-6 md:p-8 pl-8 md:pl-10">
                    {/* Title row */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        {j.title && <h3 className="text-xl font-bold tracking-tight text-[#0F2628] group-hover:text-[#0A6F8F] transition-colors">
                          {j.title}
                        </h3>}
                        {j.department && <p className="text-[13px] font-medium text-[#5A6A72] mt-1">
                          {j.department}
                        </p>}
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A6F8F] text-white text-[11px] font-bold tracking-wide uppercase px-3.5 py-1.5 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                        Now Hiring
                      </span>
                    </div>

                    {/* Description */}
                    {j.description && <p className="mt-4 text-[15px] leading-relaxed text-[#3A4A50]">
                      {j.description}
                    </p>}

                    {/* Responsibilities */}
                    {j.responsibilities?.some((r) => r?.trim()) && <div className="mt-5">
                      <h4 className="font-bold text-[14px] uppercase tracking-[0.06em] text-[#0A6F8F] mb-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1.5">
                        {j.responsibilities.filter((r) => r?.trim()).map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2.5 text-[15px] text-[#3A4A50] leading-relaxed"
                          >
                            <svg
                              className="w-4 h-4 text-[#5FAAAD] mt-1 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>}

                    {/* Metadata grid */}
                    {(j.qualifications || j.experience || j.skills?.some((skill) => skill?.trim()) || j.employment_type || j.location || j.deadline) && <div className="mt-5 rounded-xl bg-white border border-[#D9E0E3]/80 p-5">
                      <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-[14px]">
                        {j.qualifications && <div>
                          <dt className="font-bold text-[#0A6F8F] text-[13px] uppercase tracking-wide">
                            Qualifications
                          </dt>
                          <dd className="mt-0.5 text-[#3A4A50] leading-snug">
                            {j.qualifications}
                          </dd>
                        </div>}

                        {j.experience && (
                          <div>
                            <dt className="font-bold text-[#0A6F8F] text-[13px] uppercase tracking-wide">
                              Experience
                            </dt>
                            <dd className="mt-0.5 text-[#3A4A50] leading-snug">
                              {j.experience}
                            </dd>
                          </div>
                        )}

                        {j.skills?.some((skill) => skill?.trim()) && <div>
                          <dt className="font-bold text-[#0A6F8F] text-[13px] uppercase tracking-wide">
                            Skills
                          </dt>
                          <dd className="mt-0.5 text-[#3A4A50] leading-snug">
                            {j.skills.filter((skill) => skill?.trim()).join(", ")}
                          </dd>
                        </div>}

                        {j.employment_type && (
                          <div>
                            <dt className="font-bold text-[#0A6F8F] text-[13px] uppercase tracking-wide">
                              Type
                            </dt>
                            <dd className="mt-0.5 text-[#3A4A50] leading-snug">
                              {j.employment_type}
                            </dd>
                          </div>
                        )}

                        {j.location && (
                          <div>
                            <dt className="font-bold text-[#0A6F8F] text-[13px] uppercase tracking-wide">
                              Location
                            </dt>
                            <dd className="mt-0.5 text-[#3A4A50] leading-snug">
                              {j.location}
                            </dd>
                          </div>
                        )}

                        {j.deadline && (
                          <div>
                            <dt className="font-bold text-[#0A6F8F] text-[13px] uppercase tracking-wide">
                              Apply by
                            </dt>
                            <dd className="mt-0.5 font-semibold text-[#E05A5A] leading-snug">
                              {fmt(j.deadline)}
                            </dd>
                          </div>
                        )}
                      </dl>
                    </div>}

                    {/* Footer */}
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Button href={`?job=${encodeURIComponent(String(j.title))}#apply`} variant="primary" size="md" icon={arrow}>
                        Apply Now
                      </Button>
                      <span className="text-[13px] text-[#9AABB2]">
                        Applications close{" "}
                        <strong className="text-[#0F2628]">
                          {j.deadline ? fmt(j.deadline) : "when filled"}
                        </strong>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>



    </main>
  );
}