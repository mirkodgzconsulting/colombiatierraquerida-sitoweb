import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colombia Tierra Querida - 20 Julio 2026",
  description: "Celebra el Día de la Independencia de Colombia en Milán (Idroscalo). La fiesta nacional más grande en Italia con música, gastronomía y cultura colombiana. ¡Entrada gratuita!",
  keywords: [
    "Colombia Tierra Querida",
    "20 de Julio Milán",
    "Independencia de Colombia Italia",
    "Evento Colombiano Idroscalo",
    "Fiesta Nacional de Colombia 2026",
    "Cultura Colombiana Milán",
    "Gastronomía Colombiana Italia",
    "Festival Colombiano Milán"
  ],
  authors: [{ name: "Colombia Tierra Querida" }],
  icons: {
    icon: "/logo-colombia-tierra-querida.avif",
  },
  openGraph: {
    title: "Colombia Tierra Querida - 20 Julio 2026",
    description: "La celebración oficial de la Independencia de Colombia en el Idroscalo de Milán. Un evento cívico-cultural imperdible.",
    url: "https://colombiatierraquerida.it",
    siteName: "Colombia Tierra Querida",
    images: [
      {
        url: "/features-06.avif",
        width: 1200,
        height: 630,
        alt: "Colombia Tierra Querida Evento Milán",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colombia Tierra Querida - 20 Julio 2026",
    description: "Fiesta de la Independencia de Colombia en Milán. Música, sabor y orgullo colombiano.",
    images: ["/features-06.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${anton.variable} ${inter.variable} antialiased bg-white text-zinc-900 selection:bg-yellow-400 selection:text-black font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
