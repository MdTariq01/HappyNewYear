import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import React from 'react'
import Card from "./components/Card/Card";
import MessageCard from "./components/Card/MessageCard";
import MessageCard2 from "./components/Card/MessageCard2";
import Button from "./components/Button/Button";
import MessageCard3 from "./components/Card/MessageCard3";
import WishingPage from "./components/WishingPage/WishingPage";
import Balloons from "./components/Bullons/Balloons";
import Confetti from "./components/Confetti/Confetti";
import FloatingDecorations from "./components/FloatingDecorations/FloatingDecorations";

function App() {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNext = (nextStep) => {
    setShowConfetti(true);
    setTimeout(() => {
      setStep(nextStep);
      setShowConfetti(false);
    }, 1500);
  };

  return (
    <div className="h-screen w-full overflow-hidden relative">
      {/* Enhanced background with animated gradient */}
      <div className="fixed inset-0 bg-linear-to-br from-[#F5AFAF] via-[#FFB6C1] to-[#FFC0CB]" />
      
      {/* Additional decorative overlay */}
      <motion.div
        className="fixed inset-0 bg-linear-to-t from-[#FFE4E1] via-transparent to-transparent opacity-40"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating decorations - visible on all pages */}
      <FloatingDecorations />
      
      {/* Confetti overlay */}
      <Confetti isActive={showConfetti} count={100} />
      
      <div className="relative h-full w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <Card key="card-1" onNext={() => handleNext(1)} />
          )}

          {step === 1 && (
            <MessageCard key="card-2"  onNext={() => handleNext(2)}/>
          )}

          {step === 2 && (
            <MessageCard2 key="card-3" onNext={() => handleNext(3)}/>
          )}

          {step === 3 && (
            <MessageCard3 key="card-4" onNext={() => handleNext(4)}/>
          )}
          {step === 4 && (
            <Balloons key="balloons" />
          )}
          {step === 4 && (
            <WishingPage key="card-5" onNext={() => setStep(5)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
