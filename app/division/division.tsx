"use client";

import React from "react";

const splitContent = (content: string | undefined | null) =>
    (content ?? "")
        .split(/\n+/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

function ArrowIcon() {
    return (
        <svg
            aria-hidden="true"
            className="h-4 w-4 shrink-0"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5" />
        </svg>
    );
}

interface Detail {
    title: string;
    icon: string;
    option: string;
    description: string;
}

interface PageSection {
    title: string;
    sub: string;
    content: string;
    image: string | null;
    detail?: Detail[];
}

interface DivisionPageProps {
    data: {
        seo: {
            meta_title: string;
            meta_key: string;
            meta_desc: string;
        };

        hero: {
            title: string;
            content: string;
            image: string;
        };

        detail: Detail[];

        training: PageSection | null;
        course: PageSection | null;
        practical: PageSection | null;
        eligibility: PageSection | null;
        duration: PageSection | null;
        metho: PageSection | null;
        comp: PageSection | null;
    };
}
export default function DivisionPage({ data }: DivisionPageProps) {
    const heroTitle =
        data?.hero?.title?.trim() || "Our Divisions";

    const heroContent =
        data?.hero?.content?.trim() ||
        "To deliver services efficiently and maintain specialised attention across different areas, Nissan Business Solutions operates through dedicated divisions and associated organisations, each aligned to a distinct strategic purpose.";

    const trainingSection = data?.training ?? {
        title: "Practical Accounting Training",
        sub: "School of Accounts & Management (SAM)",
        content: "",
        image: null,
    };

    const  practicalSection= data?.course ?? {
        title: "Practical Accounting Programme",
        sub: "About the programme",
        content: "",
        image: null,
        detail: [],
    };

    const courseSection = data?.practical ?? {
        title: "Course Curriculum",
        sub: "What you will learn",
        content: "",
        image: null,
        detail: [],
    };

    const eligibilitySection = data?.eligibility ?? {
        title: "Course Eligibility",
        sub: "Admissions",
        content: "",
        image: null,
        detail: [],
    };

    const durationSection = data?.duration ?? {
        title: "Course Duration",
        sub: "Learning formats",
        content: "",
        image: null,
        detail: [],
    };

    const methodologySection = data?.metho ?? {
        title: "Practical Training Methodology",
        sub: "Learning approach",
        content: "",
        image: null,
        detail: [],
    };

    const additionalSection = data?.comp ?? {
        title: "More about the programme",
        sub: "Additional information",
        content: "",
        image: null,
        detail: [],
    };

    const trainingParagraphs = splitContent(
        trainingSection.content
    );


    return (
        <main className="min-h-screen bg-[#F5F8F5] text-[#142F32]">

            {/* =====================================================
                HERO
            ===================================================== */}

            <header className="relative isolate overflow-hidden bg-[#102D33] text-white">

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(95,170,173,0.24),transparent_35%),radial-gradient(circle_at_0%_90%,rgba(95,170,173,0.12),transparent_35%)]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]"
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-28 -top-40 hidden h-[34rem] w-[34rem] rounded-full border border-white/10 lg:block"
                />

                <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">

                    <div>

                        <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-7xl">
                            {heroTitle}
                            <span className="text-white">.</span>
                        </h1>

                        
                    </div>

                    
<div className="mt-7 max-w-xl text-base leading-8 text-[#D1E3E0] sm:text-lg" dangerouslySetInnerHTML={{__html:heroContent}} />

                </div>
            </header>


            {/* =====================================================
                DIVISIONS
            ===================================================== */}

            <section
                id="our-divisions"
                aria-labelledby="divisions-heading"
            >

                <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">

                    <div className="grid gap-6 border-b border-[#DCE7E1] pb-9 lg:grid-cols-[1fr_280px] lg:items-end">

                        <div>

                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#276F70]">
                                01 / Our organisation
                            </p>

                        </div>

                    </div>

                    <div className="mt-10 space-y-5">

                        {data?.detail?.map((division, idx) => (

                            <article
                                id={`division-${idx}`}
                                key={idx}
                                className="relative scroll-mt-6 overflow-hidden rounded-[1.75rem] border border-[#DEE8E1] bg-white shadow-[0_8px_32px_rgba(15,42,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A8CCC0] hover:shadow-[0_20px_50px_rgba(15,42,42,0.09)]"
                            >

                                <div
                                    aria-hidden="true"
                                    className="absolute inset-y-0 left-0 w-1 bg-[#5FAAAD]"
                                />

                                <div className="grid gap-6 p-6 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8 sm:p-9">

                                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDF5F1] text-lg font-bold text-[#276F70] ring-1 ring-[#D5E6DC]">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>

                                    <div>

                                        <h3 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-[1.75rem]">
                                            {division.title}
                                        </h3>
                                        <div className=" mt-6 space-y-3 border-t border-[#E9EFEB] pt-6 text-[15px] leading-7 text-[#536866]
                                        [&_ul]:mt-5 [&_ul]:grid [&_ul]:gap-x-8 [&_ul]:gap-y-3 [&_ul]:sm:grid-cols-2 [&_li]:relative [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:pl-5 [&_li]:text-sm
                                         [&_li]:leading-6 [&_li]:text-[#405957]  [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.65em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-[#5FAAAD]
                                         "dangerouslySetInnerHTML={{__html: division.description,}}/>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>



            <section
                id="training-professional-development"
                aria-labelledby="training-heading"
                className="border-t border-[#E0EAE4] bg-white"
            >

                <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">

                    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

                        <div>

                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#276F70]">
                                02 / Training &amp; Professional Development
                            </p>

                            <h2
                                id="training-heading"
                                className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl"
                            >
                                {trainingSection.title}
                                <span className="text-[#5FAAAD]">
                                    .
                                </span>
                            </h2>

                            {trainingSection.sub && (
                                <p className="mt-5 text-sm font-medium text-[#52716C]">
                                    {trainingSection.sub}
                                </p>
                            )}

                        </div>

                        <div className="space-y-5 text-[15px] leading-8 text-[#536866] lg:pt-7">

                            {trainingSection.content &&(
                                <div dangerouslySetInnerHTML={{__html:trainingSection.content}} />
                            )}

                        </div>

                    </div>


                    {/* =================================================
                        PROGRAMME + ELIGIBILITY
                    ================================================= */}

                    <div className="mt-16 grid gap-6 lg:grid-cols-2">

                        {/* Programme */}

                        <article className="rounded-[1.75rem] border border-[#E0EAE4] bg-[#F8FAF8] p-7 sm:p-9">

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#276F70]">
                                {courseSection.sub || "About the programme"}
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                                {courseSection.title}
                            </h3>

                            <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#536866]">

                                <div dangerouslySetInnerHTML={{__html:courseSection.content}}/>

                            </div>
                            { courseSection.detail   && (
                                <ul className="mt-5 space-y-3">

                                    {courseSection.detail .map(
                                        (item, idx) => (

                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-[15px] leading-7 text-[#405957]"
                                            >

                                                <span
                                                    aria-hidden="true"
                                                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5FAAAD]"
                                                />

                                                <div>
                                                    <p className="font-medium">
                                                        {item.title}
                                                    </p>

                                                    {item.description && (
                                                        <p className="mt-1 text-sm text-[#536866]" dangerouslySetInnerHTML={{__html:item.description}} />
                                                    )}
                                                </div>

                                            </li>

                                        )
                                    )}

                                </ul>
                            )}
                        </article>


                        {/* Eligibility */}

                        <article className="rounded-[1.75rem] border border-[#E0EAE4] bg-[#F8FAF8] p-7 sm:p-9">

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#276F70]">
                                {eligibilitySection.sub || "Admissions"}
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                                {eligibilitySection.title}
                            </h3>

                            {eligibilitySection.content && (
                                <div className="mt-5 text-[15px] leading-7 text-[#536866]  mt-5
                            

                            [&_ul]:space-y-3
                            [&_ul]:mt-3

                            [&_li]:relative
                            [&_li]:pl-5
                            [&_li]:leading-6

                            [&_li]:before:absolute
                            [&_li]:before:left-0
                            [&_li]:before:top-[0.65em]
                            [&_li]:before:h-1.5
                            [&_li]:before:w-1.5
                            [&_li]:before:rounded-full
                            [&_li]:before:bg-[#5FAAAD]" dangerouslySetInnerHTML={{__html:eligibilitySection.content}} />
                            )}

                          
                        </article>

                    </div>


                    {/* =================================================
                        COURSE DURATION
                    ================================================= */}

                    {(durationSection.title ||
                        durationSection.content  ||
                        durationSection?.detail) && (

                        <section
                            aria-labelledby="duration-heading"
                            className="mt-8 rounded-[1.75rem] bg-[#EDF5F0] p-6 sm:p-9"
                        >

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#276F70]">
                                {durationSection.sub || "Learning formats"}
                            </p>

                            <h3
                                id="duration-heading"
                                className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                            >
                                {durationSection.title}
                            </h3>

                            {durationSection.content && (
                                <div className="mt-5 space-y-3 text-[15px] leading-7 text-[#536866]">
                                <div dangerouslySetInnerHTML={{__html:durationSection.content}}/>

                                </div>
                            )}

                            {durationSection.detail && (
                            <div className="mt-7 grid gap-5 lg:grid-cols-2">
                                {durationSection.detail.map((item, index) => (
                                    <article
                                        key={index}
                                        className="rounded-2xl border border-[#DCE9E0] bg-white p-6 sm:p-7"
                                    >
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <h4 className="text-lg font-semibold">
                                                {item.title}
                                            </h4>

                                            {item.option && (
                                                <span className="rounded-full bg-[#E8F4EE] px-4 py-1.5 text-sm font-semibold text-[#1D6061]">
                                                    {item.option}
                                                </span>
                                            )}
                                        </div>

                                        {item.description && (
                                            <div
                                                className=" mt-5 text-sm leading-6 text-[#536866] [&_p]:mb-4  [&_p]:leading-6 [&_ul]:space-y-3 [&_ul]:mt-3  [&_li]:relative
                                                    [&_li]:pl-5 [&_li]:leading-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.65em] [&_li]:before:h-1.5
                                                    [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-[#5FAAAD]
                                                "dangerouslySetInnerHTML={{__html: item.description,}}/>
                                        )}
                                    </article>
                                ))}
                            </div>
                        )}
                        </section>

                    )}



                    {(methodologySection.title ||
                        methodologySection) && (

                        <article className="mt-8 grid gap-8 rounded-[1.75rem] bg-[#12343A] p-7 text-white sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

                            <div>

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8D9D3]">
                                    {methodologySection.sub || "Learning approach"}
                                </p>

                                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                                    {methodologySection.title}
                                </h3>

                            </div>

                            <div className="space-y-4 text-[15px] leading-8 text-[#D1E3E0]">

                               <div dangerouslySetInnerHTML={{__html:methodologySection.content}}/>

                            </div>

                        </article>

                    )}


                    {/* =================================================
                        COURSE CURRICULUM
                    ================================================= */}

                    {(practicalSection.title ||
                        practicalSection.content) && (

                        <section
                            aria-labelledby="curriculum-heading"
                            className="mt-20"
                        >

                            <div className="flex flex-wrap items-end justify-between gap-4">

                                <div>

                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#276F70]">
                                        {practicalSection.sub || "What you will learn"}
                                    </p>

                                    <h3
                                        id="curriculum-heading"
                                        className="mt-3 text-3xl font-semibold tracking-tight"
                                    >
                                        {practicalSection.title}
                                    </h3>

                                </div>

                                {practicalSection.detail && (
                                    <span className="rounded-full border border-[#DCE9E0] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#52716C]">
                                       {practicalSection.detail.length} modules
                                    </span>
                                )}

                            </div>


                            {practicalSection.content && (
                                <div className="mt-5 max-w-3xl space-y-4 text-[15px] leading-7 text-[#536866]">

                                    {splitContent(
                                        practicalSection.content
                                    ).map(
                                        (paragraph, index) => (
                                            <p key={index}>
                                                {paragraph}
                                            </p>
                                        )
                                    )}

                                </div>
                            )}


                            {practicalSection.detail && (

                                <div className="mt-7 grid gap-5 lg:grid-cols-2">

                                    {practicalSection.detail.map(
                                        (module, index) => (

                                            <article
                                                key={index}
                                                className="rounded-[1.5rem] border border-[#E0EAE4] bg-[#F8FAF8] p-6 sm:p-8"
                                            >

                                                <h4 className="text-lg font-semibold tracking-tight">
                                                    {module.title}
                                                </h4>

                                                <div
                                                    aria-hidden="true"
                                                    className="mt-5 h-0.5 w-12 rounded-full bg-[#5FAAAD]"
                                                />

                                                {module.option && (
                                                    <p className="mt-4 text-sm font-medium text-[#276F70]">
                                                        {module.option}
                                                    </p>
                                                )}

                                                {module.description && (
                                                    <div
                                                        className="mt-5 text-[15px] leading-7 text-[#536866]  mt-5
                            text-sm
                            leading-6
                            text-[#536866]

                            [&_p]:mb-4
                            [&_p]:leading-6

                            [&_ul]:space-y-3
                            [&_ul]:mt-3

                            [&_li]:relative
                            [&_li]:pl-5
                            [&_li]:leading-6

                            [&_li]:before:absolute
                            [&_li]:before:left-0
                            [&_li]:before:top-[0.65em]
                            [&_li]:before:h-1.5
                            [&_li]:before:w-1.5
                            [&_li]:before:rounded-full
                            [&_li]:before:bg-[#5FAAAD]"
                                                        dangerouslySetInnerHTML={{
                                                            __html: module.description,
                                                        }}
                                                    />
                                                )}

                                            </article>

                                        )
                                    )}

                                </div>

                            )}

                        </section>

                    )}

                  
                    {(additionalSection.title ||
                        additionalSection.content ||
                        (additionalSection.detail &&
                            additionalSection.detail.length > 0)) && (

                        <div className="mt-20 border-t border-[#E0EAE4] pt-10">

                            <div className="flex items-end justify-between gap-6">

                                <div>

                                    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#276F70]">

                                        <span className="h-px w-8 bg-[#5FAAAD]" />

                                        {additionalSection.sub ||
                                            "Additional information"}

                                    </p>

                                    <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                                        {additionalSection.title}
                                        <span className="text-[#5FAAAD]">
                                            .
                                        </span>
                                    </h3>

                                </div>

                            </div>


                            {additionalSection.content && (

                                <div
                                    className="
                                        mt-7
                                        max-w-4xl
                                        text-[15px]
                                        leading-7
                                        text-[#536866]

                                        [&_p]:mb-4
                                        [&_p:last-child]:mb-0
                                    "
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            additionalSection.content,
                                    }}
                                />

                            )}


                            {additionalSection.detail &&
                                additionalSection.detail.length > 0 && (

                                    <div className="mt-8 grid gap-5 lg:grid-cols-2">

                                        {additionalSection.detail.map(
                                            (item, index) => (

                                                <article
                                                    key={index}
                                                    className="group relative overflow-hidden rounded-[1.5rem] border border-[#E0EAE4] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,42,42,0.08)] sm:p-8"
                                                >

                                                    {/* Top accent */}

                                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5FAAAD] to-[#A8D9D3]" />

                                                    <div className="flex items-start justify-between gap-5">

                                                        <h4 className="text-xl font-semibold">
                                                            {item.title}
                                                        </h4>

                                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF5F1] text-sm font-bold text-[#276F70]">
                                                            {String(
                                                                index + 1
                                                            ).padStart(
                                                                2,
                                                                "0"
                                                            )}
                                                        </span>

                                                    </div>

                                                    {item.option && (

                                                        <p className="mt-3 text-sm font-semibold text-[#276F70]">
                                                            {item.option}
                                                        </p>

                                                    )}

                                                    {item.description && (

                                                        <div
                                                            className="
                                                                mt-5
                                                                text-[15px]
                                                                leading-7
                                                                text-[#536866]

                                                                [&_p]:mb-4
                                                                [&_p:last-child]:mb-0

                                                                [&_blockquote]:mt-5
                                                                [&_blockquote]:border-l-2
                                                                [&_blockquote]:border-[#5FAAAD]
                                                                [&_blockquote]:bg-[#F8FAF8]
                                                                [&_blockquote]:px-5
                                                                [&_blockquote]:py-4
                                                                [&_blockquote]:text-[15px]
                                                                [&_blockquote]:font-medium
                                                                [&_blockquote]:leading-7
                                                                [&_blockquote]:not-italic
                                                            "
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    item.description,
                                                            }}
                                                        />

                                                    )}

                                                </article>

                                            )
                                        )}

                                    </div>

                                )}

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}