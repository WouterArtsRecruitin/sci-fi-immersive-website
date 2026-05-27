import { motion } from 'framer-motion';
import FloatingPanels from './FloatingPanels';

const CATEGORIES = ['WEBSITES', 'EXPERIENCES', 'IMMERSIVE 3D', 'MOTION', 'AI / GENERATIVE'];

export default function UI() {
  return (
    <div className="ui-root absolute inset-0 z-10 pointer-events-none select-none">
      {/* Atmosphere overlays */}
      <div className="overlay-grain" />
      <div className="overlay-scanlines" />
      <div className="overlay-vignette" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 pointer-events-auto"
      >
        <div className="font-mono text-xs tracking-[0.25em] text-white/80">
          RECRUITIN<span className="text-cyber-pink">°</span>STUDIO
          <span className="text-white/35"> — CREATIVE DIGITAL EXPERIENCES</span>
        </div>
        <nav className="flex gap-1 font-mono text-[11px] tracking-[0.2em]">
          {['INDEX', 'ABOUT', 'CONTACT'].map((item) => (
            <button
              key={item}
              className="px-3 py-1 rounded-full border border-white/15 text-white/70 hover:text-cyber-cyan hover:border-cyber-cyan/60 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </motion.header>

      {/* Orange spark accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4, rotate: -40 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
        className="absolute top-[16%] right-[14%]"
      >
        <Spark />
      </motion.div>

      {/* Left category menu */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
        className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-auto"
      >
        <div className="font-mono text-[10px] tracking-[0.3em] text-white/35 mb-4">
          WHAT ARE YOU LOOKING FOR?
        </div>
        <ul className="space-y-2">
          {CATEGORIES.map((c, i) => (
            <li key={c}>
              <button className="group flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-white/55 hover:text-white transition-colors">
                <span className="text-cyber-cyan/50 group-hover:text-cyber-cyan tabular-nums">
                  0{i + 1}
                </span>
                <span className="relative">
                  {c}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-cyber-pink transition-all duration-300 group-hover:w-full" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Backdrop glitch headline (behind panels) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="glitch font-display font-bold leading-[0.85] tracking-tighter text-white text-center whitespace-nowrap"
          data-text="ENTER THE UNKNOWN"
          style={{ fontSize: 'clamp(3rem, 12vw, 11rem)' }}
        >
          ENTER THE UNKNOWN
        </motion.h1>
      </div>

      {/* Floating frosted-glass panel gallery */}
      <FloatingPanels />

      {/* Centered eyebrow + CTA (front layer) */}
      <div className="absolute left-0 right-0 bottom-24 flex flex-col items-center gap-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="font-mono text-[11px] tracking-[0.5em] text-cyber-cyan/80"
        >
          ⟡ NEXT-GEN DIGITAL UNIVERSE ⟡
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="pointer-events-auto px-10 py-3 rounded-full font-mono text-xs tracking-[0.25em] text-white border border-white/25 backdrop-blur-md bg-white/[0.03] hover:border-cyber-cyan hover:text-cyber-cyan transition-colors"
        >
          ENTER EXPERIENCE
        </motion.button>
      </div>

      {/* Bottom meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-6 font-mono text-[10px] tracking-[0.25em] text-white/35"
      >
        <span>EST. 2026 · DOESBURG NL</span>
        <span className="flex items-center gap-2">
          SCROLL TO EXPLORE
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </span>
      </motion.div>
    </div>
  );
}

function Spark() {
  return (
    <motion.svg
      width="92"
      height="92"
      viewBox="0 0 100 100"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      style={{ filter: 'drop-shadow(0 0 18px rgba(239,125,0,0.55))' }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x="48"
          y="6"
          width="4"
          height="34"
          rx="2"
          fill="#EF7D00"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
    </motion.svg>
  );
}
