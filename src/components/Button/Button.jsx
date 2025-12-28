import { motion } from "framer-motion";
import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(122, 46, 77, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-8 py-3 rounded-full bg-gradient-to-r from-white to-[#FFE4E1] 
                 text-[#7A2E4D] text-lg font-semibold shadow-xl
                 transition-all duration-300 border-2 border-white
                 hover:border-[#7A2E4D] active:shadow-md"
    >
      <span className="relative z-10">{text}</span>
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFB6D9] to-[#FFC0CB] opacity-0"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default Button;
