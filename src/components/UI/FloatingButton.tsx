import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  text: string;
  onClick: () => void;
  color?: 'cyan' | 'pink' | 'blue';
}

export default function FloatingButton({ text, onClick, color = 'cyan' }: Props) {
  const colors = {
    cyan: { border: '#00FFFF', text: '#00FFFF', bg: 'rgba(0, 255, 255, 0.1)' },
    pink: { border: '#FF00FF', text: '#FF00FF', bg: 'rgba(255, 0, 255, 0.1)' },
    blue: { border: '#0099FF', text: '#0099FF', bg: 'rgba(0, 153, 255, 0.1)' },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-8 py-3 rounded-lg font-bold tracking-wider transition-all duration-300 cursor-pointer"
      style={{
        border: `2px solid ${colors[color].border}`,
        color: colors[color].text,
        backgroundColor: 'transparent',
        boxShadow: `0 0 20px ${colors[color].border}40`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = colors[color].bg;
        e.currentTarget.style.boxShadow = `0 0 30px ${colors[color].border}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.boxShadow = `0 0 20px ${colors[color].border}40`;
      }}
    >
      {text}
    </motion.button>
  );
}
