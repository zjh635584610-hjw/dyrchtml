import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Background({ staticMode = false }: { staticMode?: boolean }) {
  const { scrollYProgress } = useScroll();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [leaves, setLeaves] = useState<Particle[]>([]);

  // Speed up based on scroll
  const speedMultiplier = useTransform(scrollYProgress, [0, 1], [1, 2]);

  useEffect(() => {
    if (staticMode) {
      setParticles([]);
      setLeaves([]);
      return;
    }
    // Generate gold particles
    const p = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(p);

    // Generate leaves
    const l = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      size: Math.random() * 40 + 20,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 10,
    }));
    setLeaves(l);
  }, [staticMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Bottom Layer: Radial Gradient */}
      <div className="absolute inset-0 bg-paper" />
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #4F6F52 0%, #1A4D2E 50%, #F5F0E6 100%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Paper Texture Overlay */}
      <div className="paper-texture" />

      {/* Mid Layer: Falling Leaves */}
      {!staticMode && leaves.map((leaf) => (
        <motion.div
          key={`leaf-${leaf.id}`}
          initial={{ y: `${leaf.y}%`, x: `${leaf.x}%`, rotate: 0, opacity: 0 }}
          animate={{ 
            y: '120%', 
            x: [`${leaf.x}%`, `${leaf.x + 10}%`, `${leaf.x - 5}%`],
            rotate: 360,
            opacity: [0, 0.06, 0.06, 0]
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "linear"
          }}
          className="absolute text-primary-light/20"
          style={{ width: leaf.size, height: leaf.size }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </motion.div>
      ))}

      {/* Top Layer: Gold Particles */}
      {!staticMode && particles.map((p) => (
        <motion.div
          key={`p-${p.id}`}
          initial={{ x: `${p.x}%`, y: `${p.y}%`, opacity: 0 }}
          animate={{ 
            y: [`${p.y}%`, `${p.y - 20}%`],
            opacity: [0, 0.3, 0] 
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          className="absolute bg-gold rounded-full blur-[1px]"
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
}
