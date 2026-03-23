import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

interface FloatingElement {
  id: number;
  type: 'heart' | 'sparkle' | 'star';
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export function FloatingBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate random elements once mounted
    const newElements: FloatingElement[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      type: ['heart', 'heart', 'sparkle', 'star'][Math.floor(Math.random() * 4)] as 'heart' | 'sparkle' | 'star',
      size: Math.random() * 20 + 10,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100 + 100, // start below screen
      duration: Math.random() * 15 + 15, // long gentle float
      delay: Math.random() * -20, // random start time (even in the past)
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => {
        const Icon = el.type === 'heart' ? Heart : el.type === 'sparkle' ? Sparkles : Star;
        return (
          <motion.div
            key={el.id}
            className="absolute text-pink-300/40"
            initial={{ 
              x: `${el.x}vw`, 
              y: '110vh',
              rotate: 0,
              opacity: 0
            }}
            animate={{ 
              y: '-10vh',
              rotate: 360,
              opacity: [0, 0.8, 0.8, 0],
              x: [`${el.x}vw`, `${el.x - 5}vw`, `${el.x + 5}vw`, `${el.x}vw`]
            }}
            transition={{ 
              duration: el.duration,
              repeat: Infinity,
              ease: "linear",
              delay: el.delay
            }}
            style={{ width: el.size, height: el.size }}
          >
            <Icon 
              size={el.size} 
              fill={el.type === 'heart' ? 'currentColor' : 'none'} 
              strokeWidth={1.5}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
