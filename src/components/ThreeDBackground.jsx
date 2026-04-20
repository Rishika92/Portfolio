"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SubtleParticles() {
  const count = 200; // Small array for optimization
  const mesh = useRef(null);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 25;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 25;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x -= delta / 30;
      mesh.current.rotation.y -= delta / 40;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#06B6D4" 
        transparent 
        opacity={0.3} 
        sizeAttenuation={true} 
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
}

function SubtleVioletParticles() {
  const count = 100;
  const mesh = useRef(null);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 20;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 20;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta / 25;
      mesh.current.rotation.y += delta / 35;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.08} 
        color="#7C3AED" 
        transparent 
        opacity={0.2} 
        sizeAttenuation={true} 
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
}

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#0B0B0F]">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
        <SubtleParticles />
        <SubtleVioletParticles />
      </Canvas>
    </div>
  );
}
