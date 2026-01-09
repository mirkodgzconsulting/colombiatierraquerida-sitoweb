import Navbar from '@/components/site-blocks/blocks/navbar-component-05/navbar-component-05'
import Hero from '@/components/site-blocks/blocks/hero-section-30/hero-section-30'
import Features from '@/components/site-blocks/blocks/features-section-08/features-section-08'
import LogoCloud from '@/components/site-blocks/blocks/logo-cloud-02/logo-cloud-02'
import FAQ from '@/components/site-blocks/blocks/faq-component-11/faq-component-11'
import Footer from '@/components/site-blocks/blocks/footer-component-05/footer-component-05'

const brandLogos = [
    {
        name: 'Sponsor 01',
        logo: '/logo-01.avif'
    },
    {
        name: 'Sponsor 02',
        logo: '/logo-02.avif'
    },
    {
        name: 'Sponsor 03',
        logo: '/logo-03.png'
    },
    {
        name: 'Walmart',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/walmart-logo.png'
    },
    {
        name: 'Microsoft',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-logo.png'
    },
    {
        name: 'FedEx',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/fedex-logo.png'
    },
    {
        name: 'Airbnb',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-logo.png'
    },
    {
        name: 'Adobe',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/adobe-logo.png'
    },
    {
        name: 'Shopify',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/shopify-logo.png'
    },
    {
        name: 'Gatsby',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/gatsby-logo.png'
    },
    {
        name: 'PayPal',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal-logo.png'
    },
    {
        name: 'Huawei',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/huawei-logo.png'
    },
    {
        name: 'Ola',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/ola-logo.png'
    },
    {
        name: 'Deloitte',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/deloitte-logo.png'
    },
    {
        name: 'BookMyShow',
        logo: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/bookmyshow-logo.png'
    }
]

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Features />
            <LogoCloud logos={brandLogos} />
            <FAQ />
            <Footer />
        </main>
    )
}
