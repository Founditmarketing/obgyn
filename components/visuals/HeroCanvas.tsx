"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const count = 150;
const initialParticles = Array.from({ length: count }).map(() => ({
  t: Math.random() * 100,
  factor: 0.5 + Math.random(),
  speed: 0.005 + Math.random() / 300,
  xFactor: -40 + Math.random() * 80,
  yFactor: -40 + Math.random() * 80,
  zFactor: -40 + Math.random() * 80,
  mx: 0,
  my: 0
}));

function BiophilicParticles() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => initialParticles, []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = 1 + Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} castShadow receiveShadow>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshPhysicalMaterial 
        color="#E8EFE9" 
        transmission={0.8} 
        opacity={0.6} 
        transparent 
        roughness={0.1} 
        thickness={1.5} 
        envMapIntensity={1}
      />
    </instancedMesh>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-50">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#F9F7F3" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8B9D8B" />
        <BiophilicParticles />
      </Canvas>
    </div>
  );
}
