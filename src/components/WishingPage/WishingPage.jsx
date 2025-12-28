import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Confetti from "../Confetti/Confetti";

const WishingPage = ({ onNext }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [audioStarted, setAudioStarted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const fullText = `Happy New Year, Arth! 💖

May this year bring you:
✨ peace when things get loud
✨ strength when things get hard
✨ joy even in small moments

I'm really glad you exist 🌷`;

  // Typewriter effect
  useEffect(() => {
    if (!isClicked) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isClicked]);

  // Start background music on first click
  useEffect(() => {
    if (isClicked && !audioStarted) {
      setAudioStarted(true);
      // Optional: Add background music here
      // You can add an audio element if you have a music file
    }
  }, [isClicked, audioStarted]);

  const handlePhotoClick = () => {
    setIsClicked(true);
  };

  const handleContinueClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  // Floating hearts component
  const FloatingHeart = ({ delay, duration, x }) => (
    <motion.div
      className="absolute text-2xl"
      initial={{ y: "100vh", x, opacity: 0 }}
      animate={{ y: "-100vh", opacity: [0, 1, 0] }}
      transition={{ delay, duration, ease: "linear", repeat: Infinity }}
    >
      💖
    </motion.div>
  );

  // Floating sparkles component
  const FloatingSparkle = ({ delay, duration, x }) => (
    <motion.div
      className="absolute text-xl"
      initial={{ y: "100vh", x, opacity: 0 }}
      animate={{ y: "-100vh", opacity: [0, 1, 0] }}
      transition={{ delay, duration, ease: "linear", repeat: Infinity }}
    >
      ✨
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Confetti effect */}
      <Confetti isActive={showConfetti} count={100} />
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-red-100" />

      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <FloatingHeart key={`heart-${i}`} delay={i * 3.1} duration={5}
            x={(Math.random() - 0.5) * window.innerWidth * 1.5} />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <FloatingSparkle
            key={`sparkle-${i}`}
            delay={i * 3}
            duration={5}
            x={(Math.random() - 0.5) * window.innerWidth * 1.5}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-10 px-4"
      >
        {/* Photo with blur to clear animation */}
        <motion.div
          className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer hover:shadow-[0_20px_60px_rgba(255,182,193,0.6)] transition-all duration-500"
          onClick={handlePhotoClick}
          whileHover={{ scale: 1.03, rotateY: 5 }}
          whileTap={{ scale: 0.98 }}
        >
            
          {/* Placeholder gradient - replace with actual photo */}
          <motion.div
            className="w-full  h-full bg-gradient-to-br from-rose-300 via-pink-300 to-red-300 flex items-center justify-center text-white text-xl"
            animate={{
              filter: isClicked ? "blur(0px)" : "blur(10px)",
              scale: isClicked ? 1.05 : 1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img className="w-full h-full object-contain" src="/src/assets/Arth.jpeg" alt="Special photo" />
          </motion.div>

          {/* Click overlay text (before click) */}
          {!isClicked && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm text-white text-center rounded-3xl"
              exit={{ opacity: 0 }}
              animate={{
                backgroundColor: ["rgba(0,0,0,0.4)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.4)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <p className="text-lg font-bold px-6">Click to reveal 💝</p>
            </motion.div>
          )}
        </motion.div>

        {/* Wishes text with typewriter effect */}
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl text-center"
          >
            <motion.div
              className="bg-gradient-to-r from-white/90 via-pink-50/90 to-white/90 backdrop-blur-md rounded-2xl p-10 shadow-xl border-2 border-white"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255,182,193,0.3)",
                  "0 0 40px rgba(255,182,193,0.5)",
                  "0 0 20px rgba(255,182,193,0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <p className="text-lg md:text-xl text-[#7A2E4D] whitespace-pre-line leading-relaxed font-serif ">
                {displayedText}
                {displayedText.length < fullText.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="inline-block ml-1 text-[#8B4513]"
                  >
                    |
                  </motion.span>
                )}
              </p>
            </motion.div>
          </motion.div>
        )}

      
     
      </motion.div>
    </motion.div>
  );
};

export default WishingPage;
