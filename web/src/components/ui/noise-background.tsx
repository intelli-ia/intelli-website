import React from "react";
import { cn } from "@/lib/utils";

interface NoiseBackgroundProps {
    children: React.ReactNode;
    containerClassName?: string;
    gradientColors?: string[];
    noiseOpacity?: number;
}

export const NoiseBackground = ({
    children,
    containerClassName,
    gradientColors = ["#BFFF00", "#ffffff", "#0A0E27", "#BFFF00"],
    noiseOpacity = 0.4,
}: NoiseBackgroundProps) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden group p-[3px] rounded-full",
                containerClassName
            )}
        >
            {/* Smooth Rotating Gradient Background */}
            <div
                className="absolute -inset-[200%] z-0 animate-rotate-full"
                style={{
                    background: `conic-gradient(from 0deg, ${gradientColors.join(", ")})`,
                }}
            />

            {/* Noise Texture Layer */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    opacity: noiseOpacity,
                }}
            />

            <div className="relative z-10 w-full h-full bg-inherit rounded-full">
                {children}
            </div>
        </div>
    );
};
