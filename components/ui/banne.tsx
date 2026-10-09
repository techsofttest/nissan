interface Banner{
    title: string;
    content: string;
    image:string;
}
export default function Banner({title,content,image}:Banner) {
    return (
  <section className="relative min-h-[420px] overflow-hidden text-white sm:min-h-[500px]">
                <div aria-hidden="true" className="absolute inset-0">
                    <img
                        src={image}
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
                 
                    <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                        {title}
                        <span className="text-[#5FAAAD]">.</span>
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">{content}</p>
                </div>
            </section>
    );
}