"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { text: "Nosotros", href: "#nosotros" },
  { text: "Programa", href: "#programa" },
  { text: "Temáticas", href: "#tematica" },
  { text: "Participa", href: "#participa" },
  { text: "Lugar", href: "#lugar" },
  { text: "FAQ", href: "#faq" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#193DB8]/95 backdrop-blur-sm z-50 h-[81px] flex items-center border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 w-full h-full flex justify-between items-center relative">
          {/* Logo (Left) */}
          <Link href="#" className="flex flex-col items-center leading-none group shrink-0 relative z-50">
            {/* Mobile Logo (28px) */}
            <div className="block md:hidden relative h-[28px] w-[88px]">
              <Image
                src="/logo-colombia-tierra-querida.avif"
                alt="Colombia Tierra Querida"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Desktop Logo (Default) */}
            <div className="hidden md:block relative h-16 w-[200px]">
              <Image
                src="/logo-colombia-tierra-querida.avif"
                alt="Colombia Tierra Querida"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu (Centered) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex gap-8 items-center">
              {links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className={`font-inter font-medium text-[15px] text-white hover:text-[#FFD738] transition-colors ${link.text === "Participa" ? "font-bold" : ""}`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button (Right - Desktop) */}
          <div className="hidden md:block shrink-0">
            <a
              href="https://wa.me/393669902415"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white hover:bg-white hover:text-[#193DB8] bg-transparent text-white font-inter font-medium text-[14px] px-6 py-2 rounded-full transition-all"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Toggle (Visible on mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none relative z-50 p-2"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#193DB8] flex flex-col justify-between pt-28 pb-12 px-8 transition-transform duration-300 ease-in-out md:hidden h-[100dvh] w-screen z-40 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Menu Items List */}
          <div className="flex flex-col gap-8 items-start mt-4">
            {links.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="font-inter font-bold text-[20px] text-white hover:text-[#FFD738] transition-colors tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* CTA Button Bottom */}
          <div className="w-full">
            <a
              href="https://wa.me/393669902415"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center border border-white bg-transparent text-white font-inter font-bold text-[16px] px-6 py-3.5 rounded-full hover:bg-white hover:text-[#193DB8] transition-all"
            >
              Contactar
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
