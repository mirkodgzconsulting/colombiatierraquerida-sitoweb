"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-start pt-28 pb-20 md:pt-32 md:pb-40 bg-[#193DBB] overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                autoPlay
                loop
                muted
                playsInline
                poster="/colombiavideo.mp4"
            >
                <source src="/colombiavideo.mp4" type="video/mp4" />
            </video>

            <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Text Content Wrapper */}
                <div className="max-w-3xl w-full flex flex-col items-center">
                    {/* Subheading */}
                    <p className="font-inter font-bold text-[13px] md:text-[14px] text-[#FFD738] mb-2 animate-slide-up uppercase tracking-wide">
                        Celebremos juntos el 20 de Julio en el corazón de Milán
                    </p>

                    {/* Main Title */}
                    <h1 className="font-anton text-[42px] sm:text-[56px] md:text-[72px] lg:text-[80px] text-white tracking-wide leading-[0.9] mb-4 uppercase drop-shadow-sm animate-fade-in whitespace-normal md:whitespace-nowrap">
                        COLOMBIA, TIERRA QUERIDA
                    </h1>

                    {/* Event Details */}
                    <p className="font-inter font-medium text-white/90 text-[15px] md:text-[18px] mb-8 leading-relaxed animate-slide-up max-w-xl px-2 md:px-0">
                        El domingo 20 de julio, celebremos con orgullo y patriotismo
                        nuestra Fiesta Nacional en el Idroscalo de la Ciudad de Milán.<br className="hidden md:block" />
                        Entrada gratuita para todos. ¡No faltes!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-row gap-4 md:gap-6 w-full justify-center items-center animate-slide-up mb-8 relative z-40">
                        <a
                            href="https://participa.colombiatierraquerida.it"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 md:px-8 md:py-3 bg-[#DB1533] text-white font-inter font-bold text-[15px] rounded-full hover:brightness-110 transition-all hover:scale-105 shadow-md flex items-center gap-2 group"
                        >
                            Sponsors
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="#agenda"
                            className="text-white font-inter font-medium text-[15px] hover:underline underline-offset-4 transition-all"
                        >
                            Ver Programa
                        </a>
                    </div>
                </div>

                {/* Overlapping Interactive Cards (x4) */}
                <div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 w-full relative z-30 px-2 lg:px-0 mt-4 md:mt-8"
                    style={{ perspective: "1200px" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    {/* Card 1: Mobile TL 80px | Desktop TL 100px -> BR 100px */}
                    <div className={`h-[160px] md:h-[400px] lg:h-[420px] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative shadow-2xl hover:-translate-y-2 rounded-tr-[4px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[80px] ${isHovered ? 'md:rounded-tl-[4px] md:rounded-br-[100px]' : 'md:rounded-tl-[100px] md:rounded-br-[4px]'}`}>
                        <Image
                            src="/img-hero1.avif"
                            alt="Musica"
                            fill
                            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : ''}`}
                        />
                    </div>

                    {/* Card 2: Mobile BL 80px | Desktop BL 100px -> TR 100px */}
                    <div className={`h-[160px] md:h-[400px] lg:h-[420px] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative shadow-2xl hover:-translate-y-2 rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[80px] ${isHovered ? 'md:rounded-bl-[4px] md:rounded-tr-[100px]' : 'md:rounded-bl-[100px] md:rounded-tr-[4px]'}`}>
                        <Image
                            src="/img-hero2.avif"
                            alt="Gente"
                            fill
                            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : ''}`}
                        />
                    </div>

                    {/* Play Button Overlay - Centered Absolute */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center pointer-events-none">
                        <div
                            className="relative w-24 h-24 md:w-24 md:h-24 bg-[#DB1533]/90 backdrop-blur-[4px] rounded-full flex items-center justify-center shadow-2xl animate-slow-spin-hover cursor-pointer pointer-events-auto hover:scale-110 transition-transform ring-4 ring-white/20"
                            onClick={() => setShowVideo(true)}
                        >
                            {/* Rotating Text */}
                            <svg className="absolute w-full h-full p-1.5 animate-spin-slow" viewBox="0 0 100 100">
                                <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                <text className="text-[10px] font-bold uppercase fill-white tracking-[0.18em]">
                                    <textPath xlinkHref="#textPath" startOffset="50%" textAnchor="middle">
                                        VER VIDEO DE PRESENTACION •
                                    </textPath>
                                </text>
                            </svg>
                            {/* Play Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-0.5 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 3: Mobile TR 80px | Desktop TR 100px -> BL 100px */}
                    <div className={`h-[160px] md:h-[400px] lg:h-[420px] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative shadow-2xl hover:-translate-y-2 rounded-tl-[4px] rounded-bl-[4px] rounded-br-[4px] rounded-tr-[80px] ${isHovered ? 'md:rounded-tr-[4px] md:rounded-bl-[100px]' : 'md:rounded-tr-[100px] md:rounded-bl-[4px]'}`}>
                        <Image
                            src="/img-hero3.avif"
                            alt="Video"
                            fill
                            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : ''}`}
                        />
                    </div>

                    {/* Card 4: Mobile BR 80px | Desktop BR 100px -> TL 100px */}
                    <div className={`h-[160px] md:h-[400px] lg:h-[420px] transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative shadow-2xl hover:-translate-y-2 rounded-tr-[4px] rounded-tl-[4px] rounded-bl-[4px] rounded-br-[80px] ${isHovered ? 'md:rounded-br-[4px] md:rounded-tl-[100px]' : 'md:rounded-br-[100px] md:rounded-tl-[4px]'}`}>
                        <Image
                            src="/img-hero4.avif"
                            alt="Danza"
                            fill
                            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : ''}`}
                        />
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {showVideo && (
                <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 lg:p-12 animate-fade-in">
                    <div className="relative w-full max-w-6xl aspect-video rounded-2xl shadow-2xl bg-black">
                        {/* Custom Rotating Close Button */}
                        <div
                            className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-50 w-20 h-20 md:w-28 md:h-28 bg-[#DB1533] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#b01633] hover:scale-105 transition-all group"
                            onClick={() => setShowVideo(false)}
                        >
                            {/* Rotating Text */}
                            <svg className="absolute w-full h-full p-2 animate-spin-slow" viewBox="0 0 100 100">
                                <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                <text className="text-[10px] sm:text-[11px] font-bold uppercase fill-white tracking-[0.15em]">
                                    <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                                        CLOSE THIS AWESOME VIDEO •
                                    </textPath>
                                </text>
                            </svg>
                            {/* Close Icon */}
                            <X className="text-white w-8 h-8 md:w-10 md:h-10 drop-shadow-md group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
                        </div>

                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/w4zgS7RVhG4?autoplay=1&rel=0"
                            title="Colombia Tierra Querida Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-2xl"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    )
}
