import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Heart, MessageSquare } from 'lucide-react';

const messages = [
  "成都烟火，与竹同香",
  "深耕研究，步履不停",
  "和我一起，漫步蓉城",
  "锦官城外，绿竹青青",
  "探索发现，就在脚下"
];

interface RongBaoProps {
  onOpenChat: () => void;
  feedCount: number;
  onFeed: () => void;
}

export default function RongBao({ onOpenChat, feedCount, onFeed }: RongBaoProps) {
  const [isFeeding, setIsFeeding] = useState(false);
  const [message, setMessage] = useState("");
  const [showBubble, setShowBubble] = useState(false);

  const handleFeed = () => {
    setIsFeeding(true);
    onFeed();
    
    // Easter eggs based on count
    let msg = messages[Math.floor(Math.random() * messages.length)];
    if (feedCount + 1 === 5) msg = "研究发现，地方依恋是核心中介。";
    if (feedCount + 1 === 10) msg = "数据看板已解锁深度学术解析。";
    if (feedCount + 1 === 20) msg = "感谢您对成都学术研究的关注。";
    
    setMessage(msg);
    setShowBubble(true);
    
    setTimeout(() => setIsFeeding(false), 1000);
    setTimeout(() => setShowBubble(false), 4000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
      {/* Speech Bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white/80 backdrop-blur-sm border border-gold/30 p-3 rounded-xl shadow-sm relative mb-2 max-w-[180px]"
          >
            <p className="text-[10px] text-primary font-medium leading-relaxed">{message}</p>
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white/80 border-r border-b border-gold/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group">
        {/* Rong Bao Character */}
        <motion.div
          animate={isFeeding ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : { scale: [1, 1.02, 1] }}
          transition={isFeeding ? { duration: 0.5 } : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-16 cursor-pointer relative"
          onClick={handleFeed}
        >
          {/* Minimalist Linear Panda SVG */}
          <svg viewBox="0 0 120 80" className="w-full h-full drop-shadow-none">
            {/* Panda Body - Lying down (Bamboo Green) */}
            <path 
              d="M30,60 C40,40 80,40 100,60" 
              fill="none" 
              stroke="#4F6F52" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
            />
            {/* Head (Bamboo Green) */}
            <circle 
              cx="35" cy="45" r="12" 
              fill="none" 
              stroke="#4F6F52" 
              strokeWidth="1.5" 
            />
            {/* Ears (Bamboo Green) */}
            <circle cx="26" cy="36" r="3" fill="none" stroke="#4F6F52" strokeWidth="1.5" />
            {/* Eyes (Bamboo Green) */}
            <ellipse cx="31" cy="45" rx="2" ry="3" fill="none" stroke="#4F6F52" strokeWidth="1" />
            <ellipse cx="39" cy="45" rx="2" ry="3" fill="none" stroke="#4F6F52" strokeWidth="1" />
            
            {/* Bamboo - Light Gold */}
            <motion.path 
              animate={isFeeding ? { rotate: [0, -5, 5, 0] } : {}}
              d="M35,55 L85,35" 
              fill="none" 
              stroke="#E6C229" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />
            {/* Bamboo Nodes (Light Gold) */}
            <line x1="50" y1="49" x2="52" y2="48" stroke="#E6C229" strokeWidth="1" />
            <line x1="70" y1="41" x2="72" y2="40" stroke="#E6C229" strokeWidth="1" />
            
            {/* Paws holding bamboo (Bamboo Green) */}
            <path d="M42,52 Q45,55 48,52" fill="none" stroke="#4F6F52" strokeWidth="1.2" />
          </svg>
          
          {/* Feed Effect */}
          <AnimatePresence>
            {isFeeding && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -30 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 text-gold"
              >
                <Heart size={16} fill="currentColor" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Interaction Buttons */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handleFeed}
            className="w-8 h-8 bg-white border border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all shadow-lg"
            title="喂食竹子"
          >
            <div className="w-4 h-1 bg-current rounded-full rotate-45" />
          </button>
          <button 
            onClick={onOpenChat}
            className="w-8 h-8 bg-white border border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all shadow-lg"
            title="蓉宝问答"
          >
            <MessageSquare size={14} />
          </button>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="bg-white/40 backdrop-blur-md border border-gold/20 px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
        <div className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
        <span className="text-[8px] text-bronze font-medium uppercase tracking-[0.2em]">研究探索度: {Math.min(100, feedCount * 5)}%</span>
      </div>
    </div>
  );
}
