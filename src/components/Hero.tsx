import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-paper border-b-2 border-primary">
      {/* Sun Bird Background SVG */}
      <svg className="sun-bird-bg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M50 20 Q60 35 50 50 Q40 65 50 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M20 50 Q35 60 50 50 Q65 40 80 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="title-group"
        >
          <h1 className="text-5xl md:text-8xl font-serif text-primary mb-6 relative inline-block tracking-[8px] leading-tight">
            短映蓉城，频连脚步
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 1.5 }}
              className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-gold via-cinnabar to-transparent" 
            />
          </h1>
          <p className="text-lg md:text-xl font-sans text-primary-light tracking-[1px] mb-12 max-w-3xl mx-auto font-light">
            短视频影响下在蓉留学生城市探索行为与空间感知研究
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <button className="btn-geometric">
            核心数据看板
          </button>
          <button className="px-6 py-2.5 border border-gold bg-transparent text-primary text-sm uppercase tracking-wider cursor-pointer hover:bg-primary/5 transition-all">
            研究报告原文
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
