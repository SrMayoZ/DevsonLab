import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DevsonPlanet() {
  const globeRef = useRef();
  const haloRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (globeRef.current) globeRef.current.rotation.y = t * 0.05;
    if (haloRef.current) haloRef.current.material.opacity = 0.3 + Math.sin(t) * 0.1;
  });

  return (
    <group>
      {/* 🌍 Planeta Digital */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color={"#0ea5e9"}
          emissive={"#06b6d4"}
          emissiveIntensity={0.3}
          roughness={0.8}
          metalness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* 🌌 Textura dinámica de red digital */}
      <mesh ref={haloRef} scale={[1.01, 1.01, 1.01]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color={"#00ffff"}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* 💫 Halo energético externo */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color={"#00ffff"}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
