import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

export default function ProceduralEnvironment() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const cubes = [];
  const gridSize = 4;

  for (let x = -gridSize; x <= gridSize; x++) {
    for (let y = -gridSize; y <= gridSize; y++) {
      const distance = Math.sqrt(x * x + y * y);
      if (distance > gridSize) continue;

      cubes.push(
        <FloatingCube
          key={`${x}-${y}`}
          position={[x * 1.5, y * 1.5, Math.sin(x + y) * 2]}
          color={distance < 2 ? '#FF00FF' : '#0099FF'}
        />
      );
    }
  }

  return <group ref={groupRef}>{cubes}</group>;
}

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        wireframe={false}
      />
    </mesh>
  );
}
