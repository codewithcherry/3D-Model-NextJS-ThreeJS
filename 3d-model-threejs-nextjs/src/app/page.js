"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Character from "../../components/Character";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three"; // Import THREE

export default function Home() {
  const [animations, setAnimations] = useState([
    "sit",
    "Pose",
    "walking",
    "cough",
    "salute",
    "shakehand",
  ]);

  const [activeAnimation, setActiveAnimation] = useState("salute");

  const changeAnimation = (animation) => {
    setActiveAnimation(animation);
  };

  return (
    <div className="h-[100vh]">
      <Canvas shadows gl={{ toneMapping: THREE.ACESFilmicToneMapping }}>
        <color attach="background" args={["#f0f0f0"]} />
        <OrbitControls />
        <ambientLight intensity={1} />
        <pointLight position={[2, 5, 2]} intensity={0.8} />
        <directionalLight
          position={[-5, 5, 20]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
        />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <hemisphereLight
          skyColor="#ffffff"
          groundColor="#cccccc"
          intensity={0.5}
        />
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>
        <Character animation={activeAnimation} />
      </Canvas>

      <div className="absolute top-0 right-3 flex flex-col">
        {animations.map((animation, index) => {
          return (
            <button
              className="m-2 p-2 bg-blue-400 text-black rounded-md hover:bg-blue-500"
              key={index}
              onClick={() => changeAnimation(animation)} // Fixed onClick handler
            >
              {animation}
            </button>
          );
        })}
      </div>
    </div>
  );
}