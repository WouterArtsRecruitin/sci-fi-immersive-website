import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function GridBackground() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -3, -8]} rotation={[-Math.PI / 4, 0, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshStandardMaterial
        color="#00FFFF"
        emissive="#0099FF"
        emissiveIntensity={0.3}
        wireframe={true}
      />
    </mesh>
  );
}
