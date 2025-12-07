import React from 'react';
import { CaseStudy } from '../types';
import ProjectPhase from './ProjectPhase';
import { motion } from 'framer-motion';

interface Props {
  project: CaseStudy;
  index: number;
}

const ProjectCaseStudy: React.FC<Props> = ({ project, index }) => {
  return (
    <div className="py-32 bg-[#F9F8F6] border-t border-[#E7E5E4]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <motion.div 
            className="mb-24 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-4 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 border border-[#D6D3D1] text-[#78716c] text-[10px] uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-4xl md:text-6xl font-serif text-[#1C1917] mb-6">{project.title}</h3>
          <h4 className="text-xl md:text-2xl text-[#C5A059] font-serif italic mb-10">{project.subtitle}</h4>
          <p className="text-[#57534E] leading-loose text-lg font-light font-sans">{project.description}</p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
             {/* Vertical Line for connection on desktop */}
            <div className="hidden lg:block absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-[#E7E5E4] -z-10 transform -translate-x-1/2"></div>
            
            <ProjectPhase phase={project.phases.inspiration} index={0} />
            <ProjectPhase phase={project.phases.brainstorm} index={1} />
            <ProjectPhase phase={project.phases.research} index={2} />
            <ProjectPhase phase={project.phases.experiments} index={3} />
            <ProjectPhase phase={project.phases.application} index={4} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;