"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
    {
        question: "La entrada es gratuita?",
        answer: (
            <p>
                Si, nos emociona invitarlos a un evento único con ingreso gratuito para todos, donde celebraremos la rica cultura y tradiciones colombianas. Nuestro objetivo es fomentar la inclusión y la diversidad, por lo que este evento está diseñado para que personas de todas las nacionalidades puedan disfrutar juntas.
            </p>
        )
    },
    {
        question: "Como Llegar ?",
        answer: (
            <div className="flex flex-col gap-2">
                <p>Como llegar al Idroscalo para celebrar juntos nuestra fiesta Ncional</p>
                <ul className="list-none flex flex-col gap-1 mt-1">
                    <li className="flex gap-2 items-center">
                        <span>🚇</span> Metropolitana M4 - Linate
                    </li>
                    <li>y tres líneas de buses a disposición</li>
                    <li className="flex gap-2 items-center">
                        <span>🚌</span> Buses: 183 - 973 - 923 Parada Idroscalo Porta Maggiore.
                    </li>
                </ul>
            </div>
        )
    },
    {
        question: "Como ser expositor?",
        answer: (
            <div className="flex flex-col gap-2">
                <p>Si deseas participar como expositor en el evento cívico-cultural Colombia Tierra Querida, te invitamos a comunicarte a los siguientes números:</p>
                <ul className="flex flex-col gap-1 font-semibold text-[#1e293b]">
                    <li>📞 +39 349 719 2810</li>
                    <li>📞 +39 351 165 5805</li>
                    <li>📞 +39 380 697 5600</li>
                    <li>📞 +39 366 990 2415</li>
                </ul>
                <div className="mt-2">
                    <p>También puedes escribirnos un correo a:</p>
                    <a href="mailto:info@colombiatierraquerida.it" className="text-blue-600 font-bold hover:underline">
                        📧 info@colombiatierraquerida.it
                    </a>
                </div>
                <p className="mt-2 text-sm italic">¡No pierdas la oportunidad de ser parte de este gran evento y compartir la riqueza de nuestra cultura!</p>
            </div>
        )
    },
    {
        question: "Quieres ser sponsor?",
        answer: (
            <div className="flex flex-col gap-2">
                <p>Si deseas convertirte en Sponsor oficial del evento cívico-cultural Colombia Tierra Querida, comunícate con nuestro responsable comercial al:</p>
                <p className="font-semibold text-[#1e293b]">📞 366 990 2415</p>
                <div className="mt-1">
                    <p>O envía un correo a:</p>
                    <a href="mailto:info@mediacomgroup.it" className="text-blue-600 font-bold hover:underline">
                        📧 info@mediacomgroup.it
                    </a>
                </div>
                <p className="mt-2 text-sm italic">¡Únete a nosotros y haz parte de esta celebración promoviendo tu marca!</p>
            </div>
        )
    }
];

export default function FAQ() {
    // State to track which item is open. null means all closed.
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full bg-[#193DBB] py-20 px-4 md:px-8 lg:px-16 font-sans">
            <div className="w-full max-w-5xl mx-auto flex flex-col gap-10">

                {/* Header */}
                <div className="text-center flex flex-col gap-2">
                    <h4 className="text-[#ea580c] font-bold text-sm tracking-widest uppercase">
                        PREGUNTAS FRECUENTES
                    </h4>
                    <h2 className="text-white text-3xl md:text-5xl font-bold">
                        Preguntas frecuentes
                    </h2>
                </div>

                {/* FAQ Card */}
                <div className="bg-[#f8f9fc] rounded-2xl p-6 md:p-10 shadow-xl">
                    <div className="flex flex-col divide-y divide-gray-200/60">
                        {FAQS.map((faq, index) => (
                            <div key={index} className="py-2">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center gap-4 py-4 text-left group"
                                >
                                    <span className="text-[#D91B3E] shrink-0 transform transition-transform duration-300">
                                        {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                    </span>
                                    <span className="text-[#1e293b] font-bold text-lg md:text-xl group-hover:text-[#193DBB] transition-colors">
                                        {faq.question}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="pl-10 text-[#475569] leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
