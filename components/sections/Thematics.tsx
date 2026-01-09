import Image from 'next/image';

const THEMATICS = [
    {
        title: "ACTO CIVICO",
        description: "Himno Nacional de Colombia",
        image: "/Tematica/features-01.avif",
        radiusClass: "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-2xl rounded-br-2xl"
    },
    {
        title: "CULTURA",
        description: "Demostración de Cultura",
        image: "/Tematica/features-02.avif",
        radiusClass: "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-2xl rounded-br-2xl"
    },
    {
        title: "GASTRONOMÍA",
        description: "Platos típicos de Colombia",
        image: "/Tematica/features-03.avif",
        radiusClass: "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-2xl rounded-br-2xl"
    },
    {
        title: "DESFILE FOLCLORICO",
        description: "Con la participación de los grupos de Danza",
        image: "/Tematica/features-04.avif",
        radiusClass: "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-2xl rounded-br-2xl"
    },
    {
        title: "MÚSICA",
        description: "Participación de cantantes colombianos",
        image: "/Tematica/features-05.avif",
        radiusClass: "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-2xl rounded-br-2xl"
    },
    {
        title: "TURISMO",
        description: "Promoción turistica de Colombia en Italia",
        image: "/Tematica/features-06.avif",
        radiusClass: "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-2xl rounded-br-2xl"
    }
];

export default function Thematics() {
    return (
        <section id="tematica" className="w-full bg-[#fcfcff] py-12 md:py-20 px-4 md:px-8 lg:px-16 font-sans">
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">

                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-[#D91B3E] font-bold text-sm tracking-widest uppercase">
                        CONOCE LO QUE SE LLEVARÁ A CABO
                    </h4>
                    <h2 className="text-[#0F172A] text-3xl md:text-5xl font-bold leading-tight">
                        Temáticas principales de esta Edición 2025
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {THEMATICS.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#193DBB] p-6 pb-8 rounded-2xl flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-blue-900/10"
                        >
                            <div className={`relative w-[85%] mx-auto aspect-square overflow-hidden bg-blue-800 ${item.radiusClass}`}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="flex flex-col gap-1 text-white">
                                <h3 className="font-bold text-xl uppercase tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm font-medium leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
