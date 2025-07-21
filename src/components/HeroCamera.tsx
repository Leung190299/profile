import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';
import type * as THREE from 'three';

const HeroCamera = ({ isMobile=false, children }: { isMobile: boolean; children: React.ReactNode }) => {
  const group = useRef<THREE.Group | null>(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 5], 0.5, delta);

	  if (!isMobile && group.current) {
      easing.dampE(group.current.rotation, [-state.pointer.y / 15, state.pointer.x / 10, 0], 0.5, delta);
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;