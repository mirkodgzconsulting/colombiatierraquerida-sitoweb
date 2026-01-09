import Image from 'next/image';

export default function Location() {
    return (
        <section id="lugar" className="w-full bg-white py-12 md:py-16 flex flex-col gap-16 items-center">
            {/* Map Section */}
            <div className="w-full max-w-7xl px-4">
                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-[#f8f5e6]">
                    <Image src="/mapa.avif" alt="Mapa del evento Idroscalo" fill className="object-cover object-center" sizes="(max-width: 1280px) 100vw, 1280px" />

                    {/* Map Overlay Buttons (Bottom Center) */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm p-1.5 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex gap-1 text-[10px] md:text-xs font-bold uppercase tracking-wide z-10">
                        <button className="px-4 py-2 hover:bg-gray-100 text-gray-500 rounded transition-colors">Come Arrivare</button>
                        <div className="w-px bg-gray-200 my-1"></div>
                        <button className="px-4 py-2 hover:bg-gray-100 text-gray-500 rounded transition-colors">Parcheggio</button>
                        <div className="w-px bg-gray-200 my-1"></div>
                        <button className="px-4 py-2 bg-[#D91B3E] text-white rounded shadow-sm hover:bg-[#b91533] transition-colors">Ingresso</button>
                        <div className="w-px bg-gray-200 my-1"></div>
                        <button className="px-4 py-2 hover:bg-gray-100 text-gray-500 rounded transition-colors">Servizi</button>
                    </div>
                </div>
            </div>

            {/* Info Split Section */}
            <div className="w-full max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Text Content */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-[#193DBB] font-bold text-sm tracking-wider uppercase font-sans">
                        EL ESCENARIO PERFECTO PARA COLOMBIA, TIERRA QUERIDA
                    </h4>
                    <h2 className="text-[#0F172A] font-bold text-4xl md:text-5xl font-sans uppercase leading-tight">
                        IDROSCALO MILANO
                    </h2>
                    <div className="text-gray-600 text-lg leading-relaxed text-justify flex flex-col gap-4 font-sans">
                        <p>
                            Ubicado a solo 8 km del emblemático Duomo de Milán y adyacente al aeropuerto de Linate, <span className="font-bold text-gray-900">Idroscalo Milano</span> es un oasis de bienestar de <span className="font-bold text-gray-900">1,6 millones de metros cuadrados</span>.
                        </p>
                        <p>
                            Con su ambiente natural, amplios espacios al aire libre y fácil acceso, este lugar se convierte en el escenario ideal para celebrar juntos el evento <span className="font-bold text-gray-900">“Colombia, Tierra Querida”</span>.
                        </p>
                    </div>
                </div>

                {/* Image Card with Overlay */}
                <div className="relative w-full h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                    <Image src="/hidroscalo.jpg" alt="Vista aérea Idroscalo Milano" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />

                    {/* Floating Location Card */}
                    <div className="absolute bottom-6 right-6 md:right-8 w-64 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-xl z-20 border border-white/60">
                        <h3 className="text-[#334155] font-bold text-lg mb-1 font-sans">Idroscalo Milano</h3>
                        <p className="text-gray-500 text-sm mb-3">Città metropolitana di Milano</p>
                        <a href="https://share.google/99OInEWvatDZXMTSu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group cursor-pointer">
                            <span className="text-[#ea580c] font-bold text-sm group-hover:underline">View Location</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
