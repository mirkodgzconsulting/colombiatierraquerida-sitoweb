import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { MotionPreset } from '@/components/ui/motion-preset'

type FAQs = {
    question: string
    answer: string
}[]

const faqItems: FAQs = [
    {
        question: '¿La entrada al evento es gratuita?',
        answer: 'Sí, la entrada al Idroscalo de Milán para celebrar el Día de la Independencia de Colombia es totalmente gratuita para todos los asistentes.'
    },
    {
        question: '¿Cómo puedo llegar al Idroscalo de Milán?',
        answer: 'Puedes llegar fácilmente utilizando el transporte público: Toma la línea M4 (Azul) hasta la parada "Linate Aeroporto" y luego utiliza los autobuses de conexión hacia la entrada del Idroscalo.'
    },
    {
        question: 'Soy un expositor, ¿cómo puedo participar?',
        answer: 'Para información sobre stands comerciales o gastronómicos, por favor contáctanos directamente a través de nuestro correo oficial o por WhatsApp al número de contacto de la organización.'
    },
    {
        question: '¿Habrá parqueadero disponible?',
        answer: 'El Idroscalo cuenta con amplias zonas de parqueadero gestionadas por el recinto, aunque recomendamos el uso de transporte público debido a la alta afluencia de personas.'
    }
]

const FAQ = () => {
    return (
        <section id="faq" className='py-16 sm:py-24 lg:py-32 bg-white dark:bg-zinc-950'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 items-center'>
                    <MotionPreset
                        fade
                        slide={{ direction: 'left', offset: 50 }}
                        className='h-full min-h-[400px] overflow-hidden rounded-3xl'
                    >
                        <img
                            src='/features-06.avif'
                            alt='Colombia Tierra Querida Evento'
                            className='h-full w-full object-cover'
                        />
                    </MotionPreset>

                    <div className='space-y-8'>
                        <div>
                            <MotionPreset
                                fade
                                slide={{ direction: 'down', offset: 20 }}
                            >
                                <Badge className='bg-[#193db8]/10 text-[#193db8] mb-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wider border-none'>
                                    Información
                                </Badge>
                            </MotionPreset>
                            <MotionPreset
                                component='h2'
                                fade
                                slide={{ direction: 'up', offset: 30 }}
                                delay={0.2}
                            >
                                Preguntas frecuentes
                            </MotionPreset>
                        </div>

                        <MotionPreset
                            fade
                            slide={{ direction: 'up', offset: 50 }}
                            delay={0.4}
                        >
                            <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
                                {faqItems.map((item, index) => (
                                    <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-zinc-100 dark:border-zinc-800">
                                        <AccordionTrigger className='text-lg font-bold text-zinc-900 dark:text-white hover:text-[#193db8] transition-colors'>
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className='text-zinc-500 dark:text-zinc-400 text-base leading-relaxed'>
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </MotionPreset>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
