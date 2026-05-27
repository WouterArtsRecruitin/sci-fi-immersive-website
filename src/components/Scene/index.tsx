import { Stars } from '@react-three/drei';
import DistortionBackground from './DistortionBackground';
import ParticleSystem from './ParticleSystem';
import CameraController from './CameraController';

export default function Scene() {
  return (
    <>
      <CameraController />

      {/* Atmospheric flowing background */}
      <DistortionBackground />

      {/* Depth particles */}
      <Stars radius={80} depth={40} count={2200} factor={3} saturation={0} fade speed={0.4} />
      <ParticleSystem />

      <ambientLight intensity={0.6} />
    </>
  );
}
