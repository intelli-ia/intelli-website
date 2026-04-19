import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRotatorProps {
  texts: string[];
  interval?: number;
  className?: string;
  motionProps?: HTMLMotionProps<"span">;
}

export function TextRotator({
  texts,
  interval = 2500,
  className,
  motionProps
}: TextRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  if (!texts || texts.length === 0) return null;

  return (
    <span className="relative inline-flex h-[1.15em] overflow-hidden align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index] || index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn("whitespace-nowrap inline-block", className)}
          {...motionProps}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
