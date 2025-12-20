
import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PERSONAL_INFO } from '../constants';
import * as THREE_LIB from 'three';

const PARTICLE_COUNT = 3240; // 粒子数量保持在 3240

/**
 * 使用 Math.pow(Math.random(), 1/3) 确保粒子在球体内部密度完全均匀
 */
const generateUniformSphericalPositions = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    // 体积均匀分布算法
    const r = radius * Math.pow(Math.random(), 1/3);
    
    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
};

const RotatingParticleSphere = () => {
  const ref = useRef<THREE_LIB.Points>(null);
  const sphereRadius = 3.42; // 大球体半径保持 3.42
  
  const positions = useMemo(() => generateUniformSphericalPositions(PARTICLE_COUNT, sphereRadius), []);
  
  const geometry = useMemo(() => {
    const geo = new THREE_LIB.BufferGeometry();
    geo.setAttribute('position', new THREE_LIB.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame((state, delta) => {
    if (ref.current) {
      // 1. 较快的自转速度
      ref.current.rotation.y += delta * 0.12;
      ref.current.rotation.x += delta * 0.035;
      
      // 2. 无鼠标跟随效果

      // 3. 极细微的呼吸感
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      ref.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#C5A059" // 香槟金
        size={0.0486}   // 粒子大小再次减小 50% (0.0972 * 0.5)
        sizeAttenuation={true}
        transparent={false} // 不透明
        depthWrite={true}
        // Three.js Points 默认渲染为填充正方形
        blending={THREE_LIB.NormalBlending}
      />
    </points>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen bg-[#F9F8F6] overflow-hidden">
      {/* 3D 粒子背景 */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={1.5} />
          <RotatingParticleSphere />
        </Canvas>
      </div>

      {/* 装饰性 1px 细线边框 */}
      <div className="absolute inset-6 md:inset-12 border border-[#C5A059]/10 pointer-events-none z-20"></div>

      {/* 文案内容布局 */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 pointer-events-none">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2.5, ease: "easeOut" }}
           className="max-w-6xl flex flex-col items-center"
        >
            {/* 顶部标签 */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mb-16"
            >
              <span className="text-[10px] md:text-xs text-[#C5A059] font-sans font-bold tracking-[0.8em] uppercase">
                {PERSONAL_INFO.portfolioTitle} · {PERSONAL_INFO.year}
              </span>
            </motion.div>
            
            {/* 英文超大姓名对比 */}
            <h1 className="text-7xl md:text-[13rem] font-serif text-[#1C1917] mb-8 tracking-tighter leading-none select-none">
              <motion.span
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {PERSONAL_INFO.enName}
              </motion.span>
            </h1>
            
            {/* 中文细长字体对比 - 极宽字间距 */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 2, delay: 1.2 }}
              className="text-3xl md:text-5xl text-[#1C1917] font-serif italic mb-14 font-extralight tracking-[1.2em] ml-[1.2em]"
            >
               {PERSONAL_INFO.name}
            </motion.p>

            {/* 垂直装饰短线 */}
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="w-[1px] h-16 bg-gradient-to-b from-[#C5A059] to-transparent mb-14"
            ></motion.div>

            {/* 底部副标题 */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.8 }}
              className="text-xs md:text-sm text-[#57534E] font-serif tracking-[0.5em] font-light uppercase"
            >
              {PERSONAL_INFO.title}
            </motion.p>
        </motion.div>
      </div>

      {/* 底部垂直滚动提示 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
        <motion.div 
          className="flex flex-col items-center gap-4 opacity-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
           <span className="font-serif text-[8px] tracking-[0.8em] uppercase text-[#1C1917] ml-[0.8em] mb-2">Scroll</span>
           <div className="w-[1px] h-20 bg-gradient-to-b from-[#1C1917] to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
