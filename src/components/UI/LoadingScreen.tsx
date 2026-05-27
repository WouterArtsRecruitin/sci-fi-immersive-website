import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900 z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-4 border-cyber-cyan border-t-transparent rounded-full mb-6"
      />
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-cyber-cyan font-display tracking-widest"
      >
        LOADING UNIVERSE...
      </motion.p>
    </div>
  );
}
