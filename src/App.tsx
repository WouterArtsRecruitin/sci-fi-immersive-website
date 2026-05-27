import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import Scene from './components/Scene';
import UI from './components/UI';
import LoadingScreen from './components/UI/LoadingScreen';

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-dark-900">
      {/* 3D Canvas Layer */}
      <Suspense fallback={<LoadingScreen />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
        >
          <Scene />
          <Preload all />
        </Canvas>
      </Suspense>

      {/* UI Overlay */}
      <UI />
    </div>
  );
}
