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
    if (feedCount + 1 === 5) msg = "哇！我已经感受到成都的热情了！解锁了‘深度探索’勋章哦！";
    if (feedCount + 1 === 10) msg = "太棒了！你对我们的研究支持让蓉宝充满动力！数据看板有惊喜哈！";
    if (feedCount + 1 === 20) msg = "你简直是成都通！蓉宝送你一朵小红花！";
    
    setMessage(msg);
    setShowBubble(true);
    
    setTimeout(() => setIsFeeding(false), 1000);
    setTimeout(() => setShowBubble(false), 4000);
  };

  // Easter egg visual: Rong Bao gets a "crown" or glow at high feed counts
  const isCrowned = feedCount >= 10;

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
      {/* Speech Bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white border border-gold p-3 rounded-2xl shadow-xl relative mb-2 max-w-[180px]"
          >
            <p className="text-[10px] text-primary font-bold leading-relaxed">{message}</p>
            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-r border-b border-gold rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group">
        {/* Rong Bao Character */}
        <motion.div
          animate={isFeeding ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : { y: [0, -5, 0] }}
          transition={isFeeding ? { duration: 0.5 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 cursor-pointer relative"
          onClick={handleFeed}
        >
          <div className={`absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full border ${isCrowned ? 'border-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'border-gold/20'}`} />
          
          {/* Crown Easter Egg */}
          {isCrowned && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold z-20"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5,16L3,5L8.5,10L12,4L15.5,10L21,5L19,16H5M19,19C19,19.6 18.6,20 18,20H6C5.4,20 5,19.6 5,19V18H19V19Z" />
                </svg>
              </div>
            </motion.div>
          )}

          <img 
            src="https://picsum.photos/seed/panda-ink/100/100" 
            alt="Rong Bao" 
            className={`w-full h-full object-contain relative z-10 transition-all duration-500 ${isFeeding ? 'brightness-110' : 'grayscale-[0.3]'}`}
            referrerPolicy="no-referrer"
          />
          
          {/* Feed Effect */}
          <AnimatePresence>
            {isFeeding && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -40 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 text-gold"
              >
                <Heart size={20} fill="currentColor" />
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
      <div className="bg-primary/90 backdrop-blur-md border border-gold px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
        <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
        <span className="text-[9px] text-white font-bold uppercase tracking-widest">探索进度: {Math.min(100, feedCount * 5)}%</span>
      </div>
    </div>
  );
}
