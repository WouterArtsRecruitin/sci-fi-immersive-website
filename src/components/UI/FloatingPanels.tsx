import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type Panel = {
  title: string;
  tag: string;
  index: string;
  depth: number; // parallax strength
  left: string;
  top: string;
  w: number;
  h: number;
  gradient: string;
  rotate: number;
};

const PANELS: Panel[] = [
  { title: 'NEBULA', tag: 'IMMERSIVE WEB', index: '01', depth: 1.4, left: '20%', top: '30%', w: 300, h: 380, rotate: -4, gradient: 'from-cyber-blue/40 via-cyber-purple/20 to-transparent' },
  { title: 'PROMETHEUS', tag: 'REAL-TIME 3D', index: '02', depth: 0.7, left: '40%', top: '24%', w: 360, h: 250, rotate: 2, gradient: 'from-cyber-pink/35 via-cyber-purple/20 to-transparent' },
  { title: 'AURORA', tag: 'GENERATIVE AI', index: '03', depth: 2.0, left: '56%', top: '46%', w: 280, h: 320, rotate: 5, gradient: 'from-cyber-cyan/30 via-cyber-blue/20 to-transparent' },
  { title: 'VANTA', tag: 'MOTION SYSTEM', index: '04', depth: 1.0, left: '14%', top: '52%', w: 230, h: 180, rotate: -2, gradient: 'from-cyber-purple/35 via-cyber-pink/15 to-transparent' },
];

export default function FloatingPanels() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-full h-full max-w-6xl mx-auto">
        {PANELS.map((p, i) => (
          <FloatingPanel key={p.title} panel={p} sx={sx} sy={sy} order={i} />
        ))}
      </div>
    </div>
  );
}

function FloatingPanel({
  panel,
  sx,
  sy,
  order,
}: {
  panel: Panel;
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
  order: number;
}) {
  const tx = useTransform(sx, (v) => v * panel.depth * 26);
  const ty = useTransform(sy, (v) => v * panel.depth * 26);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5 + order * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        left: panel.left,
        top: panel.top,
        width: panel.w,
        height: panel.h,
        x: tx,
        y: ty,
        rotate: panel.rotate,
      }}
      whileHover={{ scale: 1.03 }}
      className="pointer-events-auto group"
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
        {/* iridescent thumbnail */}
        <div className={`absolute inset-0 bg-gradient-to-br ${panel.gradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5" />

        {/* top meta */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-white/55">
          <span>{panel.tag}</span>
          <span className="text-cyber-cyan/70">{panel.index}</span>
        </div>

        {/* glitch title */}
        <div className="absolute bottom-5 left-4 right-4">
          <span
            className="glitch block font-display font-bold text-white leading-none"
            data-text={panel.title}
            style={{ fontSize: 'clamp(1.2rem, 2vw, 2rem)' }}
          >
            {panel.title}
          </span>
          <div className="mt-2 h-px w-0 bg-cyber-pink transition-all duration-500 group-hover:w-full" />
        </div>

        {/* corner ticks */}
        <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-white/30" />
        <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-white/30" />
      </div>
    </motion.div>
  );
}
