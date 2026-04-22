import { motion, useTransform } from "framer-motion";

interface RoughCircleProps {
  progress: any;
  range: [number, number];
  color?: string;
}

export function RoughCircle({ progress, range, color = "#BFFF00" }: RoughCircleProps) {
  const opacity = useTransform(progress, [range[0], range[0] + 0.05], [0, 1]);

  return (
    <svg
      viewBox="0 0 200 100"
      className="absolute -left-5 -right-7 md:-inset-x-14 -top-1 md:-top-1 -bottom-2 md:-bottom-7 w-[calc(100%+3rem)] md:w-[calc(100%+7rem)] h-[calc(100%+1rem)] md:h-[calc(100%+2rem)] pointer-events-none z-[-1]"
      preserveAspectRatio="none"
    >
      {/* First stroke */}
      <motion.path
        d="M 190,45 C 190,70 145,90 95,90 C 45,90 10,70 10,45 C 10,20 55,10 105,10 C 155,10 190,25 190,45"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          pathLength: useTransform(progress, range, [0, 1]),
          opacity,
        }}
      />
      {/* Second stroke - slightly offset and faster */}
      <motion.path
        d="M 185,55 C 185,80 150,95 100,95 C 50,95 15,75 15,50 C 15,25 60,5 110,5 C 160,5 185,30 185,55"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          pathLength: useTransform(progress, [range[0] + 0.1, range[1]], [0, 1]),
          opacity: useTransform(progress, [range[0] + 0.1, range[0] + 0.15], [0, 1]),
        }}
      />
      {/* Third stroke - more "scribbly" and even more offset */}
      <motion.path
        d="M 195,50 C 195,72 155,88 105,88 C 55,88 5,68 5,48 C 5,28 45,8 95,8 C 145,8 195,28 195,50"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{
          pathLength: useTransform(progress, [range[0] + 0.2, range[1]], [0, 1]),
          opacity: useTransform(progress, [range[0] + 0.2, range[0] + 0.25], [0, 1]),
        }}
      />
    </svg>
  );
}
