import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col overflow-hidden rounded-xl",
            // light styles
            "bg-white [border:1px_solid_rgba(0,0,0,.1)] shadow-[0_-20px_80px_-20px_#ffffff1f_inset]",
            className,
        )}
    >
        <div className="absolute inset-0 z-0">{background}</div>
        <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-intelli-green/5 to-transparent pointer-events-none" />

        {/* Hover overlay for readability */}
        {/* Hover overlay for readability */}
        <div className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-white via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[1]" />

        <div className="absolute inset-x-0 bottom-0 z-10 flex transform-gpu flex-col p-6 pb-8 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left transform-gpu text-intelli-blue transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-semibold text-intelli-blue leading-tight mt-2">
                {name}
            </h3>
            <div className="max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 overflow-hidden">
                <p className="max-w-lg text-intelli-blue/60 pt-3 text-sm">
                    {description}
                </p>
            </div>
        </div>

        <div
            className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
                <a href={href}>
                    {cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
    </div>
);

export { BentoCard, BentoGrid };
