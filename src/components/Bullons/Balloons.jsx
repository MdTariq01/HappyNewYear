import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const colors = [
  "hsl(38 90% 60%)",    // Gold
  "hsl(340 60% 68%)",   // Rose
  "hsl(30 85% 60%)",    // Amber
  "hsl(280 65% 68%)",   // Lavender
  "hsl(200 75% 62%)",   // Sky blue
  "hsl(0 100% 65%)",    // Red
  "hsl(280 80% 72%)",   // Purple
];

const Balloons = ({ count = 18 }) => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const newBalloons = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 16,
      size: Math.random() * 35 + 45,
      wobble: Math.random() * 20 - 10,
    }));
    setBalloons(newBalloons);
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute animate-float-up drop-shadow-xl"
          style={{
            left: `${balloon.x}%`,
            bottom: "-100px",
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
          }}
          animate={{
            x: [0, balloon.wobble, -balloon.wobble, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg
            width={balloon.size}
            height={balloon.size * 1.35}
            viewBox="0 0 50 70"
            fill="none"
          >
            {/* Outer balloon glow */}
            <defs>
              <filter id={`glow-${balloon.id}`}>
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              </filter>
              <linearGradient
                id={`grad-${balloon.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={balloon.color} stopOpacity="1" />
                <stop offset="100%" stopColor={balloon.color} stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Balloon body with gradient */}
            <ellipse
              cx="25"
              cy="22"
              rx="22"
              ry="24"
              fill={`url(#grad-${balloon.id})`}
              opacity="0.95"
              filter={`url(#glow-${balloon.id})`}
            />

            {/* Shine effect */}
            <ellipse
              cx="17"
              cy="12"
              rx="7"
              ry="10"
              fill="white"
              opacity="0.4"
            />

            {/* Secondary shine */}
            <ellipse
              cx="32"
              cy="28"
              rx="4"
              ry="6"
              fill="white"
              opacity="0.15"
            />

            {/* Knot */}
            <polygon points="25,46 22,50 28,50" fill={balloon.color} />

            {/* String */}
            <path
              d="M25 50 Q23 58 25 68"
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default Balloons;
