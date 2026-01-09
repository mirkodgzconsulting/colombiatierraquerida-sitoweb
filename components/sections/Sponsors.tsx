import Image from "next/image";

const OFFICIAL_SPONSORS = [
    "/logos/logo1.avif",
    "/logos/logo2.avif",
    "/logos/logo3.png",
    "/logos/logo4.avif",
    "/logos/logo5.avif",
    "/logos/logo6.svg",
    "/logos/logo7.avif",
];

const PATRONAGE_SPONSORS = [
    "/sponsorslogo/sponsor1.png",
    "/sponsorslogo/sponsor2.avif",
    "/sponsorslogo/sponsor3.avif",
    "/sponsorslogo/sponsor4.avif",
    "/sponsorslogo/sponsor5.avif",
    "/sponsorslogo/sponsor6.avif",
];

export default function Sponsors() {
    return (
        <section className="w-full bg-white py-12 flex flex-col gap-12 items-center">

            {/* 1. Official Sponsors */}
            <div className="flex flex-col items-center gap-6 w-full max-w-5xl px-4">
                <h2 className="font-sans text-[#334155] text-[28px] font-bold text-center">
                    Sponsors Oficiales 2025
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
                    {OFFICIAL_SPONSORS.map((src, index) => {
                        // Logo 2 (index 1) needs ULTRA maximum size -> p-0 + scale-[1.8]
                        // Logo 7 (index 6) needs large size -> p-4
                        let paddingClass = 'p-10';
                        let imgTransform = '';

                        if (index === 1) {
                            paddingClass = 'p-0';
                            imgTransform = 'scale-[1.8]';
                        } else if (index === 6) {
                            paddingClass = 'p-4';
                        }

                        return (
                            <div
                                key={`official-${index}`}
                                className={`relative h-[180px] w-full bg-[#f7f7f7] rounded-lg flex items-center justify-center overflow-hidden ${paddingClass} ${index === 6 ? 'md:col-start-2' : ''}`}
                            >
                                <div className="relative h-full w-full">
                                    <Image
                                        src={src}
                                        alt="Sponsor Oficial"
                                        fill
                                        className={`object-contain ${imgTransform}`}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 2. Patronage */}
            <div className="flex flex-col items-center gap-6 w-full max-w-5xl px-4 mt-8">
                <h2 className="font-sans text-[#334155] text-[28px] font-bold text-center">
                    Con il patrocinio di
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
                    {PATRONAGE_SPONSORS.map((src, index) => (
                        <div key={`patronage-${index}`} className="relative h-[180px] bg-[#f7f7f7] rounded-lg flex items-center justify-center p-10">
                            <div className="relative h-full w-full">
                                <Image
                                    src={src}
                                    alt="Patrocinio"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
