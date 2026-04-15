import React, { useState } from 'react';
import { motion } from 'motion/react';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export default function FlipCard({ front, back, className = "" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card h-full ${isFlipped ? 'is-flipped' : ''} ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front national-card h-full flex flex-col">
          {front}
          {/* Read indicator */}
          <div className="absolute top-2 right-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
             <div className="w-4 h-4 border border-gold rounded-full flex items-center justify-center">
               <div className="w-2 h-2 bg-gold rounded-full" />
             </div>
          </div>
        </div>
        <div className="flip-card-back national-card h-full flex flex-col p-6 overflow-y-auto">
          {back}
          <button className="mt-auto text-[10px] text-gold uppercase tracking-widest font-bold border-t border-gold/10 pt-4 hover:text-primary transition-colors">
            点击翻回 / BACK
          </button>
        </div>
      </div>
    </div>
  );
}
