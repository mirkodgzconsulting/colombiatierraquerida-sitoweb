import { Handshake, Heart } from "lucide-react";

export default function Commemoration() {
    return (
        <section id="nosotros" className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 flex justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-[#D91B3E] tracking-wider uppercase text-sm md:text-base">
                        FIESTA NACIONAL DE COLOMBIA EN ITALIA 2025
                    </h4>

                    <h2 className="text-[#1e293b] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight font-sans">
                        Conmemoración del Primer Grito de Independencia
                    </h2>

                    <div className="text-gray-600 text-base md:text-lg leading-relaxed text-justify flex flex-col gap-4 font-sans">
                        <p>
                            El evento cívico-cultural &quot;Colombia Tierra Querida&quot; se fundó el 20 de febrero de 2023 en la ciudad de Milán con el fin de celebrar y conmemorar la fiesta nacional de Colombia, con el objetivo principal de difundir la tradición, la cultura, la gastronomía y el turismo de Colombia en Italia.
                        </p>
                        <p>
                            Esta iniciativa fue fundada por Pilar Herrera, presidenta de la Asociación Unidos por Colombia; el empresario y líder comunitario Jose Guillermo Osorio; y el empresario Carlos Álvarez Deza. Cada 20 de julio, los colombianos celebramos el Primer Grito de Independencia, una fecha que simboliza el inicio de nuestra libertad.
                        </p>
                        <p>
                            En Milán, esta celebración se convierte en un punto de encuentro para recordar nuestras raíces, compartir nuestra cultura y fortalecer el orgullo de ser colombianos, aunque estemos lejos de casa. ¡Prepárate para vivir una experiencia única! Disfruta de la alegría, el sabor y el ritmo de Colombia a través de presentaciones artísticas, música en vivo, danzas tradicionales y deliciosa gastronomía. ¡Una celebración que te hará sentir el corazón de Colombia en pleno Milán!
                        </p>
                    </div>

                    <div className="pt-4">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#D91B3E] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b01633] transition-colors"
                        >
                            Siguenos en Instagram
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Column: Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    {/* Card 1 */}
                    <div className="bg-[#EFEEFF] border-2 border-[#2E1065] rounded-xl p-8 flex flex-col items-center justify-center text-center gap-2 shadow-[6px_6px_0px_0px_#2E1065] min-h-[220px]">
                        <span className="text-5xl font-bold text-[#2E1065] font-sans">25</span>
                        <p className="text-[#1e3a8a] font-bold text-lg leading-tight">
                            Expositores gastronomicos y comerciales
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#EFEEFF] border-2 border-[#2E1065] rounded-xl p-8 flex flex-col items-center justify-center text-center gap-2 shadow-[6px_6px_0px_0px_#2E1065] min-h-[220px] md:-mt-8">
                        <span className="text-5xl font-bold text-[#2E1065] font-sans">+5000</span>
                        <p className="text-[#1e3a8a] font-bold text-lg leading-tight">
                            colombianos, latinos e italianos
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#EFEEFF] border-2 border-[#2E1065] rounded-xl p-8 flex flex-col items-center justify-center text-center gap-2 shadow-[6px_6px_0px_0px_#2E1065] min-h-[220px]">
                        <Heart className="w-16 h-16 text-[#2E1065] stroke-[2.5]" />
                        <p className="text-[#1e3a8a] font-bold text-lg leading-tight mt-2">
                            Más de 15 Asociaciones e Instituciones
                        </p>
                    </div>

                    {/* Card 4 (Yellow) */}
                    <div className="bg-[#ffd738] border-2 border-[#0F172A] rounded-xl p-8 flex flex-col items-center justify-center text-center gap-2 shadow-[6px_6px_0px_0px_#0F172A] min-h-[220px]">
                        <Handshake className="w-16 h-16 text-[#0F172A] stroke-[2.5]" />
                        <p className="text-[#0F172A] font-bold text-lg leading-tight mt-2">
                            Más de 15 empresas presentes
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
