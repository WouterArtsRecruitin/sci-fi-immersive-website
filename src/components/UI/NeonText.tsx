import { motion } from 'framer-motion';

interface Props {
  text: string;
  color?: 'cyan' | 'pink' | 'blue';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function NeonText({ text, color = 'cyan', size = 'lg' }: Props) {
  const colors = {
    cyan: '#00FFFF',
    pink: '#FF00FF',
    blue: '#0099FF',
  };

  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl md:text-7xl',
  };

  return (
    <motion.h1
      className={`${sizes[size]} font-display font-bold tracking-widest`}
      style={{
        color: colors[color],
        textShadow: `0 0 20px ${colors[color]}, 0 0 40px ${colors[color]}`,
      }}
      animate={{
        textShadow: [
          `0 0 20px ${colors[color]}`,
          `0 0 40px ${colors[color]}, 0 0 60px ${colors[color]}`,
          `0 0 20px ${colors[color]}`,
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      {text}
    </motion.h1>
  );
}
