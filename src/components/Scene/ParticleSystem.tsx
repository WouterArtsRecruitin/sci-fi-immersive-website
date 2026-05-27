import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, BufferGeometry, Float32BufferAttribute, ShaderMaterial } from 'three';

const vertexShader = `
  uniform float uTime;
  attribute float aScale;

  void main() {
    vec3 newPosition = position;
    newPosition.y += sin(uTime + position.x * 0.5) * 0.5;
    newPosition.x += cos(uTime * 0.5 + position.y * 0.3) * 0.3;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    gl_PointSize = aScale * (50.0 / -mvPosition.z);
  }
`;

const fragmentShader = `
  uniform float uTime;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    if (d > 0.5) discard;

    float alpha = 1.0 - smoothstep(0.0, 0.5, d);
    vec3 color = mix(
      vec3(0.0, 0.6, 1.0),
      vec3(1.0, 0.0, 1.0),
      sin(uTime) * 0.5 + 0.5
    );

    gl_FragColor = vec4(color, alpha * 0.8);
  }
`;

export default function ParticleSystem() {
  const pointsRef = useRef<Points>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  const { positions, scales } = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      scales[i] = Math.random() * 2 + 0.5;
    }

    return { positions, scales };
  }, []);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={scales.length}
          array={scales}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ uTime: { value: 0 } }}
        transparent
        depthWrite={false}
      />
    </points>
  );
}
