import { cn } from "@/lib/utils"

export function Navbar({ className }: { className?: string }) {
    return (
        <nav className={cn("w-full py-6 absolute top-0 left-0 z-50", className)}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <div className="text-intelli-green font-bold text-2xl tracking-tighter">
                    intelli.
                </div>
            </div>
        </nav>
    )
}
