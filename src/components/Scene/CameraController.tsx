import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

export default function CameraController() {
  const { camera, mouse } = useThree();
  const targetPos = useRef(new Vector3(0, 0, 8));

  useFrame(() => {
    targetPos.current.x = mouse.x * 2;
    targetPos.current.y = mouse.y * 1.5;

    camera.position.lerp(targetPos.current, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
