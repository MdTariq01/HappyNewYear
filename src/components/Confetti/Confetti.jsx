import { useEffect, useState } from "react";
import React from 'react'
const colors = [
  "hsl(38 90% 60%)",
  "hsl(340 60% 65%)",
  "hsl(30 80% 55%)",
  "hsl(45 100% 75%)",
  "hsl(280 60% 65%)",
  "hsl(180 70% 60%)",
  "hsl(0 100% 70%)",
  "hsl(60 100% 70%)",
];

const Confetti = ({ isActive, count = 60 }) => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (isActive) {
      const newPieces = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.3,
        duration: Math.random() * 2.5 + 2,
        size: Math.random() * 12 + 7,
        rotation: Math.random() * 360,
        isRound: Math.random() > 0.5,
      }));
      setPieces(newPieces);
    }
  }, [isActive, count]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti drop-shadow-lg"
          style={{
            left: `${piece.x}%`,
            top: "-30px",
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: piece.isRound ? "50%" : "3px",
            boxShadow: `0 0 ${piece.size}px rgba(255, 182, 193, 0.8)`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
