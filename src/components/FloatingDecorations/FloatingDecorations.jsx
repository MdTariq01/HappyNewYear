import { motion } from "framer-motion";
import React from 'react'
const FloatingDecorations = () => {
  const FloatingHeart = ({ delay, duration, x }) => (
    <motion.div
      className="absolute text-3xl drop-shadow-lg"
      initial={{ y: "100vh", x, opacity: 0 }}
      animate={{ y: "-100vh", opacity: [0, 1, 0.8, 0] }}
      transition={{ delay, duration, ease: "linear", repeat: Infinity }}
    >
      💖
    </motion.div>
  );

  const FloatingSparkle = ({ delay, duration, x }) => (
    <motion.div
      className="absolute text-2xl drop-shadow-lg"
      initial={{ y: "100vh", x, opacity: 0 }}
      animate={{ y: "-100vh", opacity: [0, 1, 0.8, 0] }}
      transition={{ delay, duration, ease: "linear", repeat: Infinity }}
    >
      ✨
    </motion.div>
  );

  const FloatingFlower = ({ delay, duration, x }) => (
    <motion.div
      className="absolute text-2xl drop-shadow-lg"
      initial={{ y: "100vh", x, opacity: 0 }}
      animate={{ y: "-100vh", opacity: [0, 1, 0.8, 0], rotate: [0, 180, 360] }}
      transition={{ delay, duration, ease: "linear", repeat: Infinity }}
    >
      🌸
    </motion.div>
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {[0, 1, 2, 3, 4].map((i) => (
        <FloatingHeart
          key={`heart-${i}`}
          delay={i * 2.5}
          duration={6}
          x={(Math.random() - 0.5) * window.innerWidth * 1.2}
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <FloatingSparkle
          key={`sparkle-${i}`}
          delay={i * 2.3}
          duration={6.5}
          x={(Math.random() - 0.5) * window.innerWidth * 1.3}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <FloatingFlower
          key={`flower-${i}`}
          delay={i * 3}
          duration={7}
          x={(Math.random() - 0.5) * window.innerWidth * 1.1}
        />
      ))}
    </div>
  );
};

export default FloatingDecorations;
