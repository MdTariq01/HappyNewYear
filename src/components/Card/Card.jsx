import { motion } from "framer-motion";
import Button from "../Button/Button";
import React from 'react'
const Card = ({ onNext }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      rotateX: 90,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.6,
      rotateX: -90,
      x: 100,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-10"
    >
      <motion.div variants={cardVariants}>
        <div className="bg-gradient-to-br from-[#FBEFEF] to-[#FFE4E1] h-64 w-[35vw] min-w-[300px] rounded-3xl shadow-2xl border-2 border-white p-8 backdrop-blur-sm hover:shadow-[0_20px_50px_rgba(255,182,193,0.4)] transition-all duration-500">
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4">
              <motion.p
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Hey Arth ✨
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-[#654321] font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Before this year ends…
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-[#654321] font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                I made something just for you 💖
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.6, duration: 0.5 },
          },
        }}
      >
        <Button text="Start →" onClick={onNext} />
      </motion.div>
    </motion.div>
  );
};

export default Card;
