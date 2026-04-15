import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: '研究背景', href: '#background' },
  { label: '核心发现', href: '#findings' },
  { label: '群体画像', href: '#persona' },
  { label: '影响机制', href: '#mechanism' },
  { label: '对策建议', href: '#policy' },
  { label: '数据看板', href: '#data' },
];

export default function Navbar({ staticMode, setStaticMode }: { staticMode: boolean, setStaticMode: (v: boolean) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-primary/80 backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-gold flex items-center justify-center text-gold font-serif text-lg">蓉</div>
          <span className={`text-xs tracking-[4px] font-bold ${isScrolled ? 'text-white' : 'text-primary'}`}>
            短映蓉城
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[10px] uppercase tracking-widest font-bold transition-colors relative group ${
                isScrolled ? 'text-white/70 hover:text-gold' : 'text-primary/70 hover:text-primary'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          {/* Static Mode Toggle */}
          <button 
            onClick={() => setStaticMode(!staticMode)}
            className={`text-[9px] uppercase tracking-tighter font-bold border px-2 py-1 transition-all ${
              staticMode 
                ? 'bg-gold text-white border-gold' 
                : isScrolled ? 'text-white/50 border-white/20 hover:border-gold' : 'text-primary/50 border-primary/20 hover:border-gold'
            }`}
          >
            {staticMode ? '动态开启' : '静态模式'}
          </button>
        </div>

        <button className="btn-geometric">
          下载报告
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold/10">
        <motion.div 
          className="h-full bg-gold relative" 
          style={{ scaleX, transformOrigin: "0%" }}
        >
          {/* Mini Rong Bao on progress bar */}
          <motion.div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-gold rounded-full flex items-center justify-center overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/panda/20/20" 
              alt="Rong Bao" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}
