import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import { CASE_STUDIES, CHINESE_PAINTINGS, SKETCHES, DESIGN_WORKS } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1917] antialiased selection:bg-[#C5A059] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        
        {/* Projects Section */}
        <section id="projects">
            <div className="bg-[#F9F8F6] pt-32 pb-16 text-center">
                <p className="text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mb-4">精选作品</p>
                <h2 className="text-4xl md:text-5xl font-serif text-[#1C1917]">项目展示</h2>
            </div>
            {CASE_STUDIES.map((project, index) => (
            <ProjectCaseStudy key={project.id} project={project} index={index} />
            ))}
        </section>

        {/* Artworks */}
        <GallerySection 
            id="chinese-painting" 
            title="国画作品"
            subtitle="笔墨与气韵"
            items={CHINESE_PAINTINGS} 
            bgColor="bg-[#F5F2EB]"
            columns={3}
        />
        
        <GallerySection 
            id="sketches" 
            title="素描作品" 
            subtitle="观察与造型"
            items={SKETCHES} 
            bgColor="bg-[#F9F8F6]"
            columns={3}
        />
        
        <GallerySection 
            id="design" 
            title="设计作品" 
            subtitle="视觉传达"
            items={DESIGN_WORKS} 
            bgColor="bg-[#F5F2EB]"
            columns={2}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;