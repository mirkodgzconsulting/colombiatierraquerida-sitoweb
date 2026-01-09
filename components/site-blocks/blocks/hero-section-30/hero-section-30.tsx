import { ArrowRightIcon, PlayIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { MotionPreset } from '@/components/ui/motion-preset'

export default function HeroSection() {
    return (
        <section className='relative min-h-[90vh] w-full overflow-hidden'>
            {/* Video Background */}
            <div className='absolute inset-0 z-0'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='h-full w-full object-cover'
                >
                    <source src='https://res.cloudinary.com/dskliu1ig/video/upload/v1767955813/ColombiaHero-BG_lnkfet.mp4' type='video/mp4' />
                </video>
                {/* Dark Overlay */}
                <div className='absolute inset-0 bg-black/60' />
            </div>

            <div className='relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 pb-20 pt-32 text-center sm:px-6 lg:px-8'>
                <div className='space-y-8'>
                    <MotionPreset
                        component='p'
                        fade
                        slide={{ direction: 'down', offset: 30 }}
                        className='text-sm font-bold uppercase tracking-[0.2em] text-[#ffd738]'
                    >
                        Celebremos juntos el 20 de Julio en el corazón de Milán
                    </MotionPreset>

                    <MotionPreset
                        component='h1'
                        fade
                        slide={{ direction: 'down', offset: 50 }}
                        delay={0.3}
                        className='text-white text-[50px] font-anton uppercase tracking-tight leading-[1.1]'
                    >
                        COLOMBIA, TIERRA QUERIDA
                    </MotionPreset>

                    <MotionPreset
                        component='p'
                        fade
                        slide={{ direction: 'up', offset: 30 }}
                        delay={0.6}
                        className='mx-auto max-w-3xl text-[18px] font-semibold text-[#ddd6fe] leading-relaxed'
                    >
                        El domingo 20 de julio, celebremos con orgullo y patriotismo nuestra Fiesta Nacional en el Idroscalo de la Ciudad de Milán. Entrada gratuita para todos. ¡No faltes!
                    </MotionPreset>

                    <MotionPreset
                        fade
                        slide={{ direction: 'up', offset: 50 }}
                        delay={0.9}
                        className='flex flex-wrap items-center justify-center gap-4 pt-4'
                    >
                        <Button
                            className='group h-12 rounded-full bg-[#d11736] px-8 text-base font-bold text-white hover:bg-[#b0122b]'
                        >
                            Ver Programa
                            <ArrowRightIcon className='ml-2 size-4 transition-transform group-hover:translate-x-1' />
                        </Button>
                        <Button
                            variant='outline'
                            className='h-12 rounded-full border-2 border-white bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm hover:bg-white hover:text-[#193db8]'
                        >
                            Sponsors
                        </Button>
                    </MotionPreset>
                </div>

                {/* Scroll Indicator or Extra visual element */}
                <div className='absolute bottom-10 left-1/2 -translate-x-1/2'>
                    <div className='flex flex-col items-center gap-2'>
                        <div className='h-12 w-[2px] bg-gradient-to-b from-white to-transparent' />
                    </div>
                </div>
            </div>

            {/* Visual bottom transition */}
            <div className='absolute bottom-0 h-24 w-full bg-gradient-to-t from-white to-transparent dark:from-zinc-950' />
        </section>
    )
}
