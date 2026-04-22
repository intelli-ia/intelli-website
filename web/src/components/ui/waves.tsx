import { motion } from "framer-motion";

export function Waves() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
      <svg
        className="absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          animate={{
            d: [
              "M0 200C240 100 480 300 720 200C960 100 1200 300 1440 200V400H0V200Z",
              "M0 200C240 300 480 100 720 200C960 300 1200 100 1440 200V400H0V200Z",
              "M0 200C240 100 480 300 720 200C960 100 1200 300 1440 200V400H0V200Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          fill="#BFFF00"
          fillOpacity="0.2"
        />
        <motion.path
          animate={{
            d: [
              "M0 250C240 350 480 150 720 250C960 350 1200 150 1440 250V400H0V250Z",
              "M0 250C240 150 480 350 720 250C960 150 1200 350 1440 250V400H0V250Z",
              "M0 250C240 350 480 150 720 250C960 350 1200 150 1440 250V400H0V250Z",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          fill="#0A0E27"
          fillOpacity="0.1"
        />
      </svg>
    </div>
  );
}
