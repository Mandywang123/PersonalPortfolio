
import React, { useRef, useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PERSONAL_INFO } from '../constants';
import * as THREE_LIB from 'three';

const PARTICLE_COUNT = 3240;

const generateUniformSphericalPositions = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.pow(Math.random(), 1/3);
    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
};

const RotatingParticleSphere = () => {
  const ref = useRef<THREE_LIB.Points>(null);
  const { viewport } = useThree();
  
  // Responsive radius based on viewport width
  const isMobile = viewport.width < 5;
  const sphereRadius = isMobile ? 1.8 : 3.42;

  const positions = useMemo(() => generateUniformSphericalPositions(PARTICLE_COUNT, sphereRadius), [sphereRadius]);
  const geometry = useMemo(() => {
    const geo = new THREE_LIB.BufferGeometry();
    geo.setAttribute('position', new THREE_LIB.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.12;
      ref.current.rotation.x += delta * 0.035;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      ref.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#C5A059"
        size={isMobile ? 0.03 : 0.0486}
        sizeAttenuation={true}
        transparent={false}
        depthWrite={true}
        blending={THREE_LIB.NormalBlending}
      />
    </points>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen bg-[#F9F8F6] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={1.5} />
          <RotatingParticleSphere />
        </Canvas>
      </div>

      <div className="absolute inset-4 md:inset-12 border border-[#C5A059]/10 pointer-events-none z-20"></div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 pointer-events-none">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2.5, ease: "easeOut" }}
           className="max-w-6xl flex flex-col items-center w-full"
        >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mb-8 md:mb-16"
            >
              <span className="text-[8px] md:text-xs text-[#C5A059] font-sans font-bold tracking-[0.6em] md:tracking-[0.8em] uppercase">
                {PERSONAL_INFO.portfolioTitle} · {PERSONAL_INFO.year}
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-[6.6rem] font-serif text-[#1C1917] mb-8 md:mb-16 tracking-tighter leading-tight select-none whitespace-nowrap overflow-visible">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {PERSONAL_INFO.enName}
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 2, delay: 1.2 }}
              className="text-2xl sm:text-3xl md:text-5xl text-[#1C1917] font-serif italic mb-12 md:mb-24 font-extralight tracking-[0.8em] md:tracking-[1.2em] ml-[0.8em] md:ml-[1.2em]"
            >
               {PERSONAL_INFO.name}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.8 }}
              className="text-[10px] md:text-sm text-[#57534E] font-serif tracking-[0.3em] md:tracking-[0.5em] font-light uppercase max-w-[280px] md:max-w-none"
            >
              {PERSONAL_INFO.title}
            </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
        <motion.div 
          className="flex flex-col items-center gap-2 md:gap-4 opacity-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
           <span className="font-serif text-[7px] md:text-[8px] tracking-[0.8em] uppercase text-[#1C1917] ml-[0.8em] mb-1">Scroll</span>
           <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-[#1C1917] to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
