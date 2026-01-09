import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2.5', className)}>
            <img
                src="/Logotipo-ColombiaTieraQuerida-Logo.webp"
                alt="Colombia Tierra Querida"
                className="h-14 w-auto object-contain"
            />
        </div>
    )
}

export default Logo
