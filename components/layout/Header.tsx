"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { text: "Nosotros", href: "#nosotros" },
  { text: "Programa", href: "#programa" },
  { text: "Temáticas", href: "#tematica" },
  { text: "Lugar", href: "#lugar" },
  { text: "FAQ", href: "#faq" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#193DB8]/95 backdrop-blur-sm z-50 h-[81px] flex items-center border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 w-full h-full flex justify-between items-center relative">
          {/* Logo (Left) */}
          <Link href="#" className="flex flex-col items-center leading-none group shrink-0">
            <Image
              src="/logo-colombia-tierra-querida.avif"
              alt="Colombia Tierra Querida"
              width={200}
              height={64}
              className="h-12 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu (Centered) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex gap-8 items-center">
              {links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className={`font-inter font-medium text-[15px] text-white hover:text-[#FFD738] transition-colors ${link.text === "Participa" ? "font-bold text-white" : ""
                      }`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="font-inter font-medium text-[15px] text-white hover:text-[#FFD738] transition-colors"
                >
                  Participa
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Button (Right) */}
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
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#193DB8]/95 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden top-0 left-0 h-screen w-screen z-40 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {links.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="font-anton text-4xl text-white hover:text-[#d11736] uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <a
            href="https://tickets.colombiatierraquerida.it"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffd738] text-[#193DB8] font-anton uppercase text-xl px-8 py-3 rounded-full mt-4"
          >
            Participa
          </a>
        </div>
      </nav>
    </>
  )
}
