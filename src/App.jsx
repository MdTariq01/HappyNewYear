import { useState, useEffect } from "react";
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

const friendsData = {
  arth: { name: "Arth", photoPath: "/src/assets/Arth.jpeg" },
  aakarsh: { name: "Aakarsh", photoPath: "/src/assets/Aakarsh.png" },
  tanya: { name: "Tanya", photoPath: "/src/assets/Tanya.jpeg" },
  kriti: { name: "Kriti", photoPath: "/src/assets/kriti.jpeg" }
};

function App() {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [friendName, setFriendName] = useState("Friend");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlFriend = params.get("friend")?.toLowerCase();
    
    if (urlFriend && friendsData[urlFriend]) {
      setFriendName(friendsData[urlFriend].name);
    }
  }, []);

  const getPhotoPath = () => {
    const params = new URLSearchParams(window.location.search);
    const urlFriend = params.get("friend")?.toLowerCase();
    
    if (urlFriend && friendsData[urlFriend]) {
      return friendsData[urlFriend].photoPath;
    }
    return "/src/assets/Arth.jpeg"; 
  };

  const handleNext = (nextStep) => {
    setShowConfetti(true);
    setTimeout(() => {
      setStep(nextStep);
      setShowConfetti(false);
    }, 1500);
  };

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <div className="fixed inset-0 bg-linear-to-br from-[#F5AFAF] via-[#FFB6C1] to-[#FFC0CB]" />
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

      <FloatingDecorations />
      <Confetti isActive={showConfetti} count={100} />
      <div className="relative h-full w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <Card key="card-1" friendName={friendName} onNext={() => handleNext(1)} />
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
            <WishingPage key="card-5" friendName={friendName} photoPath={getPhotoPath()} onNext={() => setStep(5)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
