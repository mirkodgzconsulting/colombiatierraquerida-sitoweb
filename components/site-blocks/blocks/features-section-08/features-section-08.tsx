import { UsersIcon, HeartIcon, Building2Icon, StoreIcon, ArrowRightIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'

const featuresData = [
    {
        icon: StoreIcon,
        title: '25 Expositores',
        description: 'Expositores gastronómicos y comerciales ofreciendo lo mejor de nuestra tierra.',
        color: 'text-white bg-[#193db8]'
    },
    {
        icon: UsersIcon,
        title: '+5000 Personas',
        description: 'Colombianos, latinos e italianos unidos en una sola celebración.',
        color: 'text-[#193db8] bg-[#ffd738]'
    },
    {
        icon: Building2Icon,
        title: '+15 Asociaciones',
        description: 'Asociaciones e instituciones presentes apoyando nuestra cultura.',
        color: 'text-white bg-[#d11736]'
    },
    {
        icon: HeartIcon,
        title: '+15 Empresas',
        description: 'Empresas presentes que hacen posible este gran evento nacional.',
        color: 'text-white bg-indigo-600'
    }
]

const Features = () => {
    return (
        <section id="features" className='bg-zinc-50 dark:bg-zinc-950/50 py-16 sm:py-24 lg:py-32'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 items-start gap-12 sm:gap-16 md:grid-cols-2 lg:gap-24'>
                    <div className='space-y-6'>
                        <MotionPreset
                            component='p'
                            className='text-[#d11736] text-sm font-bold uppercase tracking-widest'
                            fade
                            slide={{ direction: 'left', offset: 30 }}
                        >
                            FIESTA NACIONAL DE COLOMBIA EN ITALIA 2026
                        </MotionPreset>
                        <MotionPreset
                            component='h2'
                            fade
                            slide={{ direction: 'left', offset: 50 }}
                            delay={0.2}
                        >
                            Conmemoración del Primer Grito de Independencia
                        </MotionPreset>
                        <MotionPreset
                            component='p'
                            className='text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed'
                            fade
                            slide={{ direction: 'left', offset: 50 }}
                            delay={0.4}
                        >
                            El evento cívico-cultural "Colombia Tierra Querida" se fundó con el fin de celebrar y conmemorar la fiesta nacional de Colombia, difundiendo la tradición, la cultura y la gastronomía de nuestro país en Italia. ¡Prepárate para vivir una experiencia única!
                        </MotionPreset>

                        <MotionPreset
                            fade
                            slide={{ direction: 'up', offset: 30 }}
                            delay={0.6}
                        >
                            <Button
                                className='group rounded-full bg-[#d11736] hover:bg-[#b0122b] text-white font-bold h-12 px-8'
                                size='lg'
                                asChild
                            >
                                <a href='https://www.instagram.com/colombiatierraquerida.it/' target="_blank" rel="noopener noreferrer">
                                    Siguenos en Instagram
                                    <ArrowRightIcon className='ml-2 transition-transform duration-200 group-hover:translate-x-1' />
                                </a>
                            </Button>
                        </MotionPreset>
                    </div>

                    <div className='grid gap-6 sm:grid-cols-2 lg:mt-8'>
                        {featuresData.map((item, index) => {
                            const IconComponent = item.icon

                            return (
                                <MotionPreset
                                    key={index}
                                    fade
                                    slide={{ direction: 'up', offset: 50 }}
                                    delay={0.3 + index * 0.1}
                                >
                                    <Card className='shadow-sm border-zinc-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-zinc-900 overflow-hidden h-full'>
                                        <CardContent className="p-6">
                                            <Avatar className='mb-6 size-12 rounded-xl shadow-lg'>
                                                <AvatarFallback className={cn('rounded-xl [&>svg]:size-6 font-bold', item.color)}>
                                                    <IconComponent />
                                                </AvatarFallback>
                                            </Avatar>
                                            <CardTitle className='mb-3 text-2xl font-black text-zinc-900 dark:text-white'>
                                                {item.title}
                                            </CardTitle>
                                            <CardDescription className="text-zinc-500 dark:text-zinc-400 text-base font-medium">
                                                {item.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </MotionPreset>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
