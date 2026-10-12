"use client";

import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export function SculpturalObject() {
  const rootGroupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useFrame((state, delta) => {
    if (!rootGroupRef.current) return;

    // Prevent delta spikes (e.g. after tab blur, scroll interruptions, or frame drops)
    const safeDelta = Math.min(delta, 0.05);

    // Pointer response: smooth lerping towards mouse/pointer coordinates
    const pointerX = state.pointer?.x ?? 0;
    const pointerY = state.pointer?.y ?? 0;
    const targetRotX = pointerY * 0.45;
    const targetRotY = pointerX * 0.65;

    rootGroupRef.current.rotation.x = THREE.MathUtils.damp(
      rootGroupRef.current.rotation.x,
      targetRotX,
      3.5,
      safeDelta
    );
    rootGroupRef.current.rotation.y = THREE.MathUtils.damp(
      rootGroupRef.current.rotation.y,
      targetRotY,
      3.5,
      safeDelta
    );

    // If user prefers reduced motion, skip continuous revolutions
    if (reducedMotion) return;

    const time = state.clock.getElapsedTime();

    // Gentle orbital rotations for interlocking rings with safeDelta scaling
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += safeDelta * 0.22;
      ring1Ref.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= safeDelta * 0.28;
      ring2Ref.current.rotation.z = Math.cos(time * 0.35) * 0.25;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += safeDelta * 0.32;
      ring3Ref.current.rotation.y += safeDelta * 0.15;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += safeDelta * 0.4;
      coreRef.current.rotation.x -= safeDelta * 0.25;
    }
  });

  return (
    <group ref={rootGroupRef}>
      <Float
        speed={reducedMotion ? 0 : 2}
        rotationIntensity={reducedMotion ? 0 : 0.4}
        floatIntensity={reducedMotion ? 0 : 0.6}
      >
        {/* Outer Ring 1: Primary Metallic Orbital Ring */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.0, 0.05, 24, 64]} />
          <meshStandardMaterial
            color="#2a2e3d"
            emissive="#151722"
            roughness={0.2}
            metalness={0.92}
          />
        </mesh>

        {/* Outer Ring 2: Interlocking Lavender Specular Ring */}
        <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[1.65, 0.045, 24, 64]} />
          <meshStandardMaterial
            color="#9c76eb"
            emissive="#3b2075"
            emissiveIntensity={0.35}
            roughness={0.25}
            metalness={0.88}
          />
        </mesh>

        {/* Inner Ring 3: Deep Charcoal Counter-Ring */}
        <mesh ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 6, Math.PI / 2]}>
          <torusGeometry args={[1.3, 0.04, 20, 48]} />
          <meshStandardMaterial
            color="#524578"
            roughness={0.3}
            metalness={0.85}
          />
        </mesh>

        {/* Central Geometric Metallic Core: Faceted Icosahedron */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.65, 0]} />
          <meshStandardMaterial
            color="#181c2a"
            emissive="#9c76eb"
            emissiveIntensity={0.2}
            roughness={0.15}
            metalness={0.95}
            wireframe={false}
          />
        </mesh>

        {/* Inner Core Wireframe Accent */}
        <mesh>
          <icosahedronGeometry args={[0.72, 0]} />
          <meshStandardMaterial
            color="#b89ef1"
            wireframe
            roughness={0.2}
            metalness={0.9}
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Orbital Satellite Nodes */}
        <group rotation={[0.4, 0.2, 0]}>
          <mesh position={[2.0, 0, 0]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial
              color="#e6dcfa"
              emissive="#9c76eb"
              emissiveIntensity={0.8}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
          <mesh position={[-2.0, 0, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color="#b89ef1"
              emissive="#8353df"
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.9}
            />
          </mesh>
          <mesh position={[0, 1.65, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color="#d3c2f7"
              emissive="#9c76eb"
              emissiveIntensity={0.7}
              roughness={0.15}
              metalness={0.9}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
}
