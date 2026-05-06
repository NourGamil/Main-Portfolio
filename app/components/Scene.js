// components/Scene.js
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingGold() {
  const groupRef = useRef();
  // We create a vector once to reuse it for performance
  const vec = new THREE.Vector3();

  useFrame((state) => {
    if (!groupRef.current) return;

    /** 
     * THE MAGIC LOGIC:
     * state.mouse.x/y gives us a value from -1 to 1.
     * We lerp (Linear Interpolate) the position to make it smooth.
     */
    groupRef.current.position.lerp(
      vec.set(state.mouse.x * 1.5, state.mouse.y * 1.5, 0), 
      0.05 // This is the "smoothness" factor (lower is smoother)
    );

    // Subtle continuous rotation so they don't look static
    groupRef.current.rotation.y += 0.003;
    groupRef.current.rotation.x += 0.001;
  });

    const sphereColors = ["#fcff96", "#ff9696", "#96ffa1", "#96eaff", "#ffffff","green","red","blue","yellow","orange"];

  return (
    <group ref={groupRef}>
      {/* Main Masterpiece Sphere */}
      {/* <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.7, 64, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#365eff" 
            metalness={1} 
            roughness={0.1} 
          />
        </Sphere>
      </Float> */}

      {/* Smaller Accent Spheres */}


{[...Array(10)].map((_, i) => (
  <Float key={i} speed={3}>
    <Sphere 
      args={[0.25, 64, 64]} 
      position={[
        Math.sin(i) * 2, 
        Math.cos(i) * 2, 
        Math.sin(i * 2) * 2
      ]}
    >
      <meshStandardMaterial 
        color={sphereColors[i % sphereColors.length]} 
        metalness={1} 
        roughness={0.1} 
      />
    </Sphere>
  </Float>
))}

            {/* {[...Array(8)].map((_, i) => (
        <Float key={i} speed={3}>
          <Sphere 
            args={[0.25, 64, 64]} 
            position={[
              Math.sin(i) * 3, 
              Math.cos(i) * 3, 
              Math.sin(i * 2) * 2
            ]}
          >
            <meshStandardMaterial color="blue" metalness={1} roughness={0.1} />
          </Sphere>
        </Float>
      ))}

            {[...Array(8)].map((_, i) => (
        <Float key={i} speed={3}>
          <Sphere 
            args={[0.25, 64, 64]} 
            position={[
              Math.sin(i) * 3, 
              Math.cos(i) * 3, 
              Math.sin(i * 2) * 2
            ]}
          >
            <meshStandardMaterial color="green" metalness={1} roughness={0.1} />
          </Sphere>
        </Float>
      ))} */}
    </group>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full bg-[#ffffff]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        
        <FloatingGold />
        
        <Environment preset="night"/>
      </Canvas>
    </div>
  );
}