

function PinIcon() {
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
            <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
            <circle cx="12" cy="10" r="2.4" />
        </svg>
    );
}

function BuildingIcon() {
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
            <path d="M4 21h16M6 21V7l6-3 6 3v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M9 18h.01M15 18h.01" />
        </svg>
    );
}

export default function ContactPage({contact}:{contact:any[]}) {
    return (
        <main className="min-h-screen bg-[#F3FBFB] text-[#101820]">
            {/* Banner */}
            <section className="relative min-h-[420px] overflow-hidden text-white sm:min-h-[500px]">
                <div aria-hidden="true" className="absolute inset-0">
                    <img
                        src="home-hero/b1.png"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>

                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-[#0A2226]/92 via-[#0A2226]/72 to-[#0A2226]/40"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0A2226]/70 via-transparent to-transparent"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-16 right-16 h-72 w-72 rounded-full bg-[#5FAAAD]/20 blur-3xl"
                />

                <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col justify-end px-6 pb-14 sm:min-h-[500px] sm:px-8 sm:pb-20">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A8D9D3]">
                        Get in touch
                    </p>
                    <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                        Contact Us
                        <span className="text-[#5FAAAD]">.</span>
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                        Reach our offices in Kottayam, Kochi and Bengaluru, or
                        speak directly with the administration team.
                    </p>
                </div>
            </section>

            {/* Offices */}
            <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
                <div className="max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#276F70]">
                        Our locations
                    </p>
                    {/* <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Offices across South India
                    </h2> */}
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                    {contact.map((office,idx) => (
                        <article
                            key={idx}
                            className="flex flex-col rounded-[1.75rem] border border-[#D7E8E6] bg-white p-7 shadow-[0_10px_30px_rgba(16,45,51,0.04)]"
                        >
                            <div className="flex items-center gap-3 text-[#5FAAAD]">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F4F3]">
                                    <PinIcon />
                                </span>
                                <h3 className="text-xs font-bold uppercase tracking-[0.18em]">
                                    {office.title}
                                </h3>
                            </div>

                            {office.address && (
                                <div className="mt-6 text-sm font-semibold uppercase leading-6 tracking-wide text-[#102D33]" dangerouslySetInnerHTML={{__html:office.address}}/>
                            )}

                            <div
                                className={`space-y-0.5 text-[15px] leading-7 text-[#4A5C5E] ${office.address ? "mt-3" : "mt-6"
                                    }`}
                            >
                                {/* {office.lines.map((line) => (
                                    <p key={line}>{line}</p>
                                ))} */}
                            </div>

                            <div className="mt-6 space-y-2.5 border-t border-[#E4EEEE] pt-5 text-sm">
                                   {office.tel &&  <p className="font-medium text-[#276F70] transition"><span className="font-medium text-[#102D33]">Tel:</span>{office.tel}</p>}
                                    {office.fax && <p className="font-medium text-[#276F70] transition "><span className="font-medium text-[#102D33]">Fax:</span>{office.fax}</p>}
                                    {office.name && <p className="font-medium text-[#276F70] transition "><span className="font-medium text-[#102D33]">Contact Person:</span>{office.name}</p>}
                                
                                    {office.phone && <p><span className="font-medium text-[#102D33]">Contact No:</span> <a href={`tel:${office.phone}`} className="font-medium text-[#276F70] transition hover:text-[#102D33]">{office.phone}</a></p>}
                                    {office.web &&   <p className="pt-1"><span className="font-medium text-[#102D33]">Web:</span> <a href={office.web} target="_blank" rel="noopener noreferrer" className="font-medium text-[#276F70] transition hover:text-[#102D33]">{office.web}</a></p>}
                                    {office.email &&  <p><span className="font-medium text-[#102D33]">Email:</span> <a href={`mailto:${office.email}`} className="font-medium text-[#276F70] transition hover:text-[#102D33]">{office.email}</a></p>}
                                
                            </div>
                        </article>
                    ))}
                </div>
            </section>


        </main>
    );
}