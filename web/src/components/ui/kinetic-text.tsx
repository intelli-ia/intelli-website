import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { RoughCircle } from "./rough-circle";

interface KineticTextProps {
  text: string;
  className?: string;
  color?: string;
  progress?: any;
  notationWord?: string;
  notationColor?: string;
}

export function KineticText({ 
  text, 
  className, 
  color = "text-[#0A0E27]", 
  progress: externalProgress,
  notationWord,
  notationColor
}: KineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");
  
  const { scrollYProgress: internalProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const scrollYProgress = externalProgress || internalProgress;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = (i + 1) / words.length;
          const isNotated = !!(notationWord && word.toLowerCase().includes(notationWord.toLowerCase()));
          
          return (
            <Word 
              key={i} 
              progress={scrollYProgress} 
              range={[start, end]} 
              color={color}
              isNotated={isNotated}
              notationColor={notationColor}
            >
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  color: string;
  className?: string;
  isNotated?: boolean;
  notationColor?: string;
}

function Word({ children, progress, range, color, className, isNotated, notationColor }: WordProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <span className="relative inline-block">
      {isNotated && (
        <RoughCircle progress={progress} range={range} color={notationColor} />
      )}
      <motion.span style={{ opacity }} className={cn(color, className)}>
        {children}
      </motion.span>
    </span>
  );
}
