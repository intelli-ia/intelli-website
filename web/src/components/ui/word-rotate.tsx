import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface WordRotateProps {
  words: string[];
  className?: string;
  duration?: number;
}

export function WordRotate({ words, className, duration = 3000 }: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={className}
          style={{ display: "block" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
