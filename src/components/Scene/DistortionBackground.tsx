import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { ShaderMaterial, Mesh } from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Flowing fbm-noise gradient in a deep cyber palette.
const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;

  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
          dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
      mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
          dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * 3.0 + uMouse * 0.4;

    float t = uTime * 0.06;
    float n = fbm(p + vec2(t, -t * 0.5));
    float n2 = fbm(p * 1.8 - vec2(n + t, n));

    // Palette: deep base -> electric blue -> neon magenta
    vec3 base = vec3(0.027, 0.035, 0.094);   // #07091a
    vec3 blue = vec3(0.0, 0.35, 0.85);       // electric blue
    vec3 magenta = vec3(0.55, 0.0, 0.65);    // neon magenta

    vec3 col = base;
    col = mix(col, blue, smoothstep(0.05, 0.7, n) * 0.85);
    col = mix(col, magenta, smoothstep(0.35, 0.95, n2) * 0.7);

    // iridescent highlight where the two noise fields peak together
    float irid = smoothstep(0.6, 0.95, n * n2 + 0.5);
    col += irid * vec3(0.25, 0.1, 0.35);

    // subtle scan-flow band
    float band = sin((uv.y * 14.0) + uTime * 0.8) * 0.5 + 0.5;
    col += band * 0.02;

    // vignette
    float d = distance(uv, vec2(0.5));
    col *= smoothstep(1.05, 0.25, d);

    gl_FragColor = vec4(col, 1.0);
  }
`;

export default function DistortionBackground() {
  const meshRef = useRef<Mesh>(null);
  const matRef = useRef<ShaderMaterial>(null);
  const { mouse } = useThree();

  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uMouse: { value: [0, 0] as [number, number] } }),
    []
  );

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = clock.getElapsedTime();
      matRef.current.uniforms.uMouse.value = [mouse.x, mouse.y];
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -16]}>
      <planeGeometry args={[140, 80]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}
