import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'

type Logos = {
    name: string
    logo: string
}

const LogoCloud = ({ logos }: { logos: Logos[] }) => {
    return (
        <section className='py-8 sm:py-16 lg:py-24 bg-white dark:bg-zinc-950'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
                    <MotionPreset
                        component='h2'
                        fade
                        slide={{ direction: 'up', offset: 30 }}
                        delay={0.2}
                    >
                        Sponsors Oficiales 2026
                    </MotionPreset>

                </div>

                <div className='grid grid-cols-1 border-zinc-100 dark:border-zinc-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                    {logos.map((logo, index) => (
                        <MotionPreset
                            key={index}
                            fade
                            delay={0.1 * (index % 5)}
                            className={cn('flex max-h-8 items-center justify-center px-9 py-12 border-zinc-100 dark:border-zinc-800', {
                                'lg:border-r': index % 5 !== 4,
                                'lg:border-b': index < 10,
                                'md:max-lg:border-r': index % 3 !== 2,
                                'md:max-lg:border-b': index < 12,
                                'sm:max-md:border-r': index % 2 !== 1,
                                'sm:max-md:border-b': index < 14,
                                'max-sm:border-b': index < logos.length - 1
                            })}
                        >
                            <img src={logo.logo} alt={logo.name} className='max-h-8 grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100' />
                        </MotionPreset>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LogoCloud
