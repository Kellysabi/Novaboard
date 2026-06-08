'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  useEffect(() => {
    // Simulate loading time (2.5 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const bars = [
    { height: 40, color: 'from-[#F43F5E] to-[#E11D48]', delay: 0 },
    { height: 70, color: 'from-[#F97316] to-[#EA580C]', delay: 0.15 },
    { height: 50, color: 'from-[#0EA5E9] to-[#0284C7]', delay: 0.3 },
    { height: 90, color: 'from-[#A855F7] to-[#9333EA]', delay: 0.45 },
  ];

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EAF2F5]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <div className="relative flex items-end gap-3 h-32 mb-8 perspective-[1000px]">
        {bars.map((bar, index) => (
          <motion.div
            key={index}
            className={`w-10 rounded-t-lg bg-gradient-to-t ${bar.color} shadow-lg relative`}
            style={{ 
              boxShadow: '-4px 0 15px rgba(0,0,0,0.1), inset -2px 0 5px rgba(0,0,0,0.1), inset 2px 0 5px rgba(255,255,255,0.3)',
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: `${bar.height}%`, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: bar.delay, 
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: 0.4, delay: bar.delay }
            }}
          >
            {/* 3D Top Cap effect */}
            <motion.div 
              className="absolute -top-2 left-0 w-full h-4 rounded-[50%] bg-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: bar.delay + 0.3 }}
            />
          </motion.div>
        ))}
        
        {/* Base line */}
        <motion.div 
          className="absolute -bottom-2 -left-4 -right-4 h-4 bg-gray-200 rounded-[50%] blur-[2px]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight mb-2 flex items-center gap-2">
          <svg viewBox="0 0 100 100" className="w-6 h-6">
            <path 
              d="M 15,85 C 15,87 18,90 22,90 L 78,90 C 82,90 85,87 85,85 L 85,50 C 85,30 70,15 50,15 C 30,15 15,30 15,50 Z" 
              fill="#0D9488" 
            />
            <circle cx="82" cy="18" r="6" fill="#0D9488" />
          </svg>
          NovaBoard
        </h2>
        <div className="flex items-center gap-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-[#0D9488] rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-[#0D9488] rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-[#0D9488] rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
