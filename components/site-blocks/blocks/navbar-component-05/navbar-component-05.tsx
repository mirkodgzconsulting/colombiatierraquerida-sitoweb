'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import Logo from '@/components/site-blocks/logo'
import { cn } from '@/lib/utils'

const navItems = [
    { title: 'Nosotros', href: '#features' },
    { title: 'Programa', href: '#agenda' },
    { title: 'Temáticas', href: '#tematicas' },
    { title: 'Participa', href: '#participa' },
    { title: 'Lugar', href: '#venue' },
    { title: 'FAQ', href: '#faq' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className='sticky top-0 z-50 w-full border-b border-white/10 bg-[#193db8] shadow-md'>
            <div className='mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center gap-8'>
                    <a href='/' className='flex items-center'>
                        <Logo />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden items-center gap-8 md:flex'>
                    {navItems.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            className='text-sm font-semibold text-white/90 transition-colors hover:text-white hover:underline underline-offset-4'
                        >
                            {item.title}
                        </a>
                    ))}
                    <Button
                        className='rounded-full bg-white text-[#193db8] hover:bg-[#ffd738] hover:text-[#193db8] font-bold px-8 shadow-sm transition-all'
                    >
                        Contactar
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className='flex size-10 items-center justify-center rounded-md text-white md:hidden'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <XIcon className='size-6' /> : <MenuIcon className='size-6' />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className='absolute inset-x-0 top-full border-b border-white/10 bg-[#193db8] p-4 shadow-lg md:hidden animate-in slide-in-from-top-2'>
                    <nav className='flex flex-col gap-4'>
                        {navItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className='text-base font-semibold text-white/90 transition-colors hover:text-white'
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                        <Button
                            variant='outline'
                            className='w-full rounded-full border-2 border-white text-white hover:bg-white hover:text-[#193db8] font-bold'
                        >
                            Contactar
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
