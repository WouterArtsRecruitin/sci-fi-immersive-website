import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassmorphismCard({
  children,
  className,
  delay = 0,
  hover = true,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={clsx(
        'relative backdrop-blur-xl',
        'bg-white/5 border border-white/10 rounded-2xl',
        'p-6 shadow-2xl',
        hover && 'hover:bg-white/10 hover:border-white/20 transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
