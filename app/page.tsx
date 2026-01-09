import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Sponsors from '@/components/sections/Sponsors'
import Commemoration from '@/components/sections/Commemoration'
import Program from '@/components/sections/Program'
import Location from '@/components/sections/Location'
import Thematics from '@/components/sections/Thematics'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/layout/Footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Sponsors />
            <Commemoration />
            <Program />
            <Location />
            <Thematics />
            <FAQ />
            <Footer />
        </main>
    )
}
