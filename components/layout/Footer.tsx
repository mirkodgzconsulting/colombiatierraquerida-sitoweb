import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const CONTACTS = [
    {
        name: "Pilar Herrera",
        role: "Presidenta de la Asociación Unidos por Colombia, fundadora y directora general",
        phone: "+39 349 719 2810",
        email: "info@colombiatierraquerida.it"
    },
    {
        name: "Jose Guillermo Osorio",
        role: "Fundador y Responsable General del evento",
        phone: "+39 351 165 5805",
        email: "info@colombiatierraquerida.it"
    },
    {
        name: "Carlos Álvarez Deza",
        role: "Fundador, Coordinador General y Responsable de Logística",
        phone: "+39 380 697 5600",
        email: "info@colombiatierraquerida.it"
    },
    {
        name: "MEDIACOM Group",
        role: "Responsable de Comunicación y Relaciones Institucionales",
        phone: "+39 366 990 2415",
        email: "info@mediacomgroup.it"
    }
];

export default function Footer() {
    return (
        <footer className="w-full bg-[#ffd738] pt-16 pb-8 px-4 md:px-8 lg:px-16 text-[#1e293b] font-sans">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: Contacts */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-bold text-lg uppercase tracking-wide mb-6 border-b-2 border-[#1e293b] w-fit pb-1">
                                Para dudas y preguntas:
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                                {CONTACTS.map((contact, index) => (
                                    <div key={index} className="flex flex-col gap-2">
                                        <h4 className="font-bold text-base uppercase">{contact.name}</h4>
                                        <p className="text-sm text-[#334155] leading-snug mb-1 min-h-[40px]">
                                            {contact.role}
                                        </p>
                                        <div className="flex flex-col gap-1 text-sm font-medium">
                                            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-[#193DBB] transition-colors">
                                                <Phone size={14} /> {contact.phone}
                                            </a>
                                            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-[#193DBB] transition-colors break-words">
                                                <Mail size={14} /> <span className="truncate">{contact.email}</span>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Subscribe */}
                    <div className="flex flex-col gap-6 lg:pl-12">
                        <h3 className="font-bold text-lg uppercase tracking-wide border-b-2 border-[#1e293b] w-fit pb-1">
                            Mantente al tanto del evento:
                        </h3>

                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="info@colombiatierraquerida.it"
                                className="flex-1 bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-[#193DBB] px-4 py-3 rounded-lg outline-none placeholder-[#1e293b]/50 transition-all font-medium"
                            />
                            <button className="bg-[#193DBB] text-white font-bold uppercase tracking-wide px-8 py-3 rounded-lg hover:bg-[#1e293b] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                                Suscribete
                            </button>
                        </form>

                        <div className="mt-8 flex flex-col gap-4">
                            <p className="font-bold text-sm">Siguenos en nuestras redes:</p>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/colombiatierraquerida.it/" target="_blank" rel="noopener noreferrer" className="bg-white/50 p-3 rounded-full hover:bg-white hover:text-[#E1306C] transition-all duration-300 group">
                                    <Instagram className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.facebook.com/eventocolombiatierraquerida" target="_blank" rel="noopener noreferrer" className="bg-white/50 p-3 rounded-full hover:bg-white hover:text-[#1877F2] transition-all duration-300 group">
                                    <Facebook className="group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-[#1e293b]/10 pt-8 text-center">
                    <p className="text-sm font-medium text-[#334155]">
                        © 2025 Colombia Tierra Querida - All rights reserved
                    </p>
                </div>

            </div>
        </footer>
    );
}
