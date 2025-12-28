import { motion } from "framer-motion";
import Button from "../Button/Button";
import React from 'react'
const MessageCard = ({ onNext }) => {
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

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-gradient-to-br from-[#FFF0F5] via-[#FFE4E1] to-[#FFD6E8] h-72 w-[42vw] min-w-[320px] rounded-3xl shadow-2xl border-2 border-white p-10 backdrop-blur-sm hover:shadow-[0_20px_50px_rgba(255,192,203,0.4)] transition-all duration-500"
    >
      <div className="flex items-center justify-center h-full">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-center text-[#7A2E4D] leading-relaxed font-medium"
        >
          <motion.div variants={lineVariants}>
            This year had highs, lows,<br />
          </motion.div>
          <motion.div variants={lineVariants}>
            chaos, laughter, silence…<br />
          </motion.div>
          <motion.div variants={lineVariants}>
            But somehow,<br />
          </motion.div>
          <motion.div variants={lineVariants}>
            you were one of the constants 🌱
          </motion.div>
        </motion.div>
      </div>
      <div className="pl-[12vw] pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button text="Continue" onClick={onNext} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MessageCard;
