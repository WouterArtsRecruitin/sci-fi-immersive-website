import React from 'react';
import { motion } from 'framer-motion';
import GlassmorphismCard from './GlassmorphismCard';
import NeonText from './NeonText';
import FloatingButton from './FloatingButton';

export default function UI() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 pointer-events-auto"
      >
        <NeonText text="DIGITAL UNIVERSE" color="cyan" size="md" />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-8 right-8 flex gap-6 pointer-events-auto"
      >
        <button className="text-white/70 hover:text-cyber-cyan transition-colors">
          Explore
        </button>
        <button className="text-white/70 hover:text-cyber-cyan transition-colors">
          About
        </button>
        <button className="text-white/70 hover:text-cyber-cyan transition-colors">
          Contact
        </button>
      </motion.nav>

      {/* Hero Section */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl text-center pointer-events-auto"
        >
          <NeonText text="WELCOME TO THE FUTURE" color="pink" size="xl" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-white/70 text-lg mt-6 mb-8 font-light tracking-wide"
          >
            Experience cutting-edge 3D interactions and cinematic visuals
            in a next-generation digital universe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <FloatingButton text="EXPLORE" color="cyan" onClick={() => {}} />
            <FloatingButton text="LEARN MORE" color="pink" onClick={() => {}} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4 pointer-events-auto"
      >
        <GlassmorphismCard delay={1.6}>
          <h3 className="text-cyber-cyan font-bold mb-2">IMMERSIVE</h3>
          <p className="text-white/60 text-sm">
            WebGL-powered visuals that respond to your every move
          </p>
        </GlassmorphismCard>

        <GlassmorphismCard delay={1.8}>
          <h3 className="text-cyber-pink font-bold mb-2">CINEMATIC</h3>
          <p className="text-white/60 text-sm">
            Particle systems and shader effects for stunning atmospheres
          </p>
        </GlassmorphismCard>

        <GlassmorphismCard delay={2.0}>
          <h3 className="text-cyber-blue font-bold mb-2">EXPERIMENTAL</h3>
          <p className="text-white/60 text-sm">
            Next-gen UI interactions that feel alive and interactive
          </p>
        </GlassmorphismCard>
      </motion.div>
    </div>
  );
}
