import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { PERSONAL_INFO } from '../constants';
import * as THREE from 'three';

const generateSpherePositions = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = Math.cbrt(Math.random()) * radius;
    const sinPhi = Math.sin(phi);
    const x = r * sinPhi * Math.cos(theta);
    const y = r * sinPhi * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
};

const ParticleWave = () => {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => generateSpherePositions(2000, 1.5), []);
  
  // Explicitly create geometry to ensure stability with R3F renderer
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(sphere, 3));
    return geo;
  }, [sphere]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Gentle wave breathing effect
      const t = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref} geometry={geometry}>
        <pointsMaterial
          transparent
          color="#C5A059"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </points>
    </group>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen bg-[#F9F8F6] overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
          <ParticleWave />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 pointer-events-none">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="max-w-5xl"
        >
            <p className="text-sm md:text-base text-[#C5A059] font-serif tracking-[0.4em] uppercase mb-8">
              个人作品集 2024
            </p>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#1C1917] mb-6 tracking-tight leading-none">
              {PERSONAL_INFO.enName}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#1C1917] font-serif italic opacity-60 mb-12">
               {PERSONAL_INFO.name}
            </p>

            <div className="h-[1px] w-24 bg-[#C5A059] mx-auto mb-8 opacity-60"></div>

            <p className="text-lg text-[#57534E] font-sans font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.title}
            </p>
        </motion.div>
      </div>

      {/* Scroll Text */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-[#1C1917] z-10 opacity-40 mix-blend-multiply"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
         <span className="font-serif text-xs tracking-[0.2em] uppercase">滑动探索</span>
      </motion.div>
    </section>
  );
};

export default Hero;