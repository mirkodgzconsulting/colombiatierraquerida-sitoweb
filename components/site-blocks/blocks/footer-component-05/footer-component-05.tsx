import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'

import Logo from '@/components/site-blocks/logo'

export default function Footer() {
    return (
        <footer className='border-t border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-7xl'>
                <div className='grid grid-cols-1 gap-12 lg:grid-cols-4'>
                    {/* Brand Info */}
                    <div className='col-span-1 lg:col-span-1 space-y-6'>
                        <Logo />
                        <p className='text-zinc-500 text-sm leading-relaxed'>
                            Celebrando la identidad, cultura y patriotismo de Colombia en el corazón de Milán. Un evento para toda la comunidad latina e italiana.
                        </p>
                        <div className='flex gap-4'>
                            <a
                                href='https://www.facebook.com/eventocolombiatierraquerida'
                                target="_blank"
                                rel="noopener noreferrer"
                                className='group flex size-10 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:bg-[#193db8] hover:text-white dark:bg-zinc-900'
                            >
                                <FacebookIcon className='size-5' />
                            </a>
                            <a
                                href='https://www.instagram.com/colombiatierraquerida.it/'
                                target="_blank"
                                rel="noopener noreferrer"
                                className='group flex size-10 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:bg-[#d11736] hover:text-white dark:bg-zinc-900'
                            >
                                <InstagramIcon className='size-5' />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className='grid grid-cols-2 gap-8 col-span-1 lg:col-span-2'>
                        <div>
                            <h4 className='text-sm font-bold uppercase tracking-widest text-[#193db8] mb-6'>Evento</h4>
                            <ul className='space-y-4 text-sm text-zinc-500'>
                                <li><a href='#features' className='hover:text-zinc-900 transition-colors'>Nosotros</a></li>
                                <li><a href='#agenda' className='hover:text-zinc-900 transition-colors'>Programa</a></li>
                                <li><a href='#venue' className='hover:text-zinc-900 transition-colors'>Ubicación</a></li>
                                <li><a href='#faq' className='hover:text-zinc-900 transition-colors'>Preguntas</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-sm font-bold uppercase tracking-widest text-[#d11736] mb-6'>Participar</h4>
                            <ul className='space-y-4 text-sm text-zinc-500'>
                                <li><a href='#' className='hover:text-zinc-900 transition-colors'>Expositores</a></li>
                                <li><a href='#' className='hover:text-zinc-900 transition-colors'>Patrocinios</a></li>
                                <li><a href='#' className='hover:text-zinc-900 transition-colors'>Voluntariado</a></li>
                                <li><a href='#' className='hover:text-zinc-900 transition-colors'>Prensa</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className='col-span-1 space-y-6'>
                        <h4 className='text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white mb-6'>Contacto</h4>
                        <ul className='space-y-4 text-sm text-zinc-500'>
                            <li className='flex items-start gap-3'>
                                <MapPinIcon className='size-5 shrink-0 text-[#193db8]' />
                                <span>Idroscalo, Milan, Italia</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <MailIcon className='size-5 shrink-0 text-[#d11736]' />
                                <a href='mailto:info@eventocolombiatierraquerida.it' className='hover:text-zinc-900 transition-colors'>info@eventocolombiatierraquerida.it</a>
                            </li>
                            <li className='flex items-center gap-3'>
                                <PhoneIcon className='size-5 shrink-0 text-emerald-600' />
                                <span>+39 345 678 9012</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400'>
                    <p>© 2026 Colombia Tierra Querida. Todos los derechos reservados.</p>
                    <div className='flex gap-6'>
                        <a href='#' className='hover:text-zinc-900 transition-colors'>Privacidad</a>
                        <a href='#' className='hover:text-zinc-900 transition-colors'>Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
