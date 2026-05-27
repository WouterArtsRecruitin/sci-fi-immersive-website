import React from 'react';
import { Stars } from '@react-three/drei';
import ProceduralEnvironment from './ProceduralEnvironment';
import ParticleSystem from './ParticleSystem';
import CameraController from './CameraController';
import GridBackground from './GridBackground';

export default function Scene() {
  return (
    <>
      <CameraController />

      {/* Stars background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      {/* Main visuals */}
      <ProceduralEnvironment />
      <ParticleSystem />
      <GridBackground />

      {/* Lighting */}
      <ambientLight intensity={0.4} color="#0099ff" />
      <pointLight position={[10, 10, 5]} intensity={0.5} color="#ff00ff" />
      <pointLight position={[-10, -10, 5]} intensity={0.3} color="#00ffff" />
      <pointLight position={[0, 5, -5]} intensity={0.4} color="#0099ff" />
    </>
  );
}
