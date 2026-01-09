"use client";

import { useState } from "react";

const PRESS_SCHEDULE = [
    {
        time: "12:00",
        title: "Apertura Oficial del evento Civico Cultural",
        description: "Apertura de puertas del evento civico cultural con el tradicional Corte de Cinta junto con el comite organizador y las autoridades presentes."
    },
    {
        time: "13:00",
        title: "Apertura área expositiva",
        description: "Apertura de los stand gastronómicos y expositores comerciales"
    },
    {
        time: "13:10",
        title: "Saludos y presentaciones oficiales",
        description: "Saludos de bienvenida y presentación de los patrocinadores"
    },
    {
        time: "14:00",
        title: "Acto cívico",
        description: "Himno Nacional de Colombia e Himno Nacional de Italia"
    },
    {
        time: "14:30",
        title: "Desfile de grupos de danza folclórica",
        description: ""
    },
    {
        time: "16:00",
        title: "Presentación de los grupos folclóricos",
        description: ""
    },
    {
        time: "19:00",
        title: "Presentación de artistas colombianos",
        description: ""
    },
    {
        time: "22:00",
        title: "Cierre del evento",
        description: ""
    }
];

const MAIN_SCHEDULE = [
    {
        time: "12:00",
        title: "Apertura de la Fiesta Nacional",
        description: "Apertura de puertas del evento civico cultural con el tradicional Corte de Cinta junto con el comite organizador y las autoridades presentes."
    },
    {
        time: "13:00",
        title: "Apertura del área gastronómica",
        description: "Apertura area gastronomica y comercial"
    },
    {
        time: "13:10",
        title: "Saludos y presentaciones oficiales",
        description: "Saludos de bienvenida y presentación de los patrocinadores"
    },
    {
        time: "14:00",
        title: "Acto cívico",
        description: "Himno Nacional de Colombia e Himno Nacional de Italia"
    },
    {
        time: "14:30",
        title: "Desfile de grupos de danza folclórica",
        description: ""
    },
    {
        time: "16:00",
        title: "Presentación de los grupos folclóricos",
        description: ""
    },
    {
        time: "19:00",
        title: "Presentación de artistas colombianos",
        description: ""
    },
    {
        time: "22:00",
        title: "Cierre del evento",
        description: ""
    }
];



export default function Program() {
    const [activeTab, setActiveTab] = useState<'press' | 'main'>('main');

    const displayedSchedule = activeTab === 'press' ? PRESS_SCHEDULE : MAIN_SCHEDULE;

    return (
        <section id="programa" className="w-full bg-[#193DBB] py-20 px-4 md:px-8 lg:px-16 text-white font-sans">
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">

                {/* Header */}
                <div className="text-center flex flex-col gap-2">
                    <h4 className="text-sm font-bold tracking-widest uppercase opacity-90">
                        COMO SE LLEVARÁ A CABO EL EVENTO
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase">
                        PROGRAMA OFICIAL DEL EVENTO
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Sidebar (Tabs) */}
                    <div className="flex flex-col gap-4 w-full lg:w-1/4 shrink-0">
                        <button
                            onClick={() => setActiveTab('press')}
                            className={`font-bold py-4 px-6 rounded-lg text-left uppercase text-sm leading-tight transition-all ${activeTab === 'press'
                                ? 'bg-[#ffd738] text-[#1e293b]'
                                : 'bg-transparent text-white border border-white/20 hover:bg-white/10'
                                }`}
                        >
                            CONFERENCIA PRENSA
                            <span className={`block text-xs font-normal mt-1 ${activeTab === 'press' ? 'text-[#334155]' : 'text-white/70'
                                }`}>
                                18 de Julio 2025
                            </span>
                        </button>

                        <button
                            onClick={() => setActiveTab('main')}
                            className={`font-bold py-4 px-6 rounded-lg text-left uppercase text-sm leading-tight transition-all ${activeTab === 'main'
                                ? 'bg-[#ffd738] text-[#1e293b]'
                                : 'bg-transparent text-white border border-white/20 hover:bg-white/10'
                                }`}
                        >
                            DIA PRINCIPAL DEL EVENTO
                            <span className={`block text-xs font-normal mt-1 ${activeTab === 'main' ? 'text-[#334155]' : 'text-white/70'
                                }`}>
                                20 de julio 2025
                            </span>
                        </button>
                    </div>

                    {/* Right Content (Schedule) */}
                    <div className="flex flex-col gap-4 w-full lg:w-3/4">
                        {displayedSchedule.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#ffd738] text-[#1e293b] rounded-lg p-6 flex flex-col md:flex-row gap-4 md:gap-8 items-start shadow-lg hover:translate-x-1 transition-transform"
                            >
                                <div className="font-bold text-xl min-w-[80px] pt-1">
                                    {item.time}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold text-lg leading-tight uppercase">
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p className="text-[#334155] text-sm md:text-base leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

