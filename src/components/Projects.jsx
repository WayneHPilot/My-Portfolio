import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';
import FadeInAnimation from './FadeinAnimation';

const Projects = () => {
return (
    <section id="projects" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
        <FadeInAnimation direction="up" delay={200}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
        </h2>
        <p className="text-center text-white/70 mb-16 text-lg">
            A showcase of my latest work and creative solutions
        </p>
        </FadeInAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
            <FadeInAnimation 
            key={project.title}
            direction="up" 
              delay={300 + (index * 150)}
            >
            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-t from-white to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                    </h3>
                </div>
                </div>
                
                <div className="p-6">
                <p className="text-white/80 mb-4 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/90 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                        style={{ 
                          animationDelay: `${(index * 150) + (techIndex * 50)}ms`,
                        animation: 'fadeInScale 0.5s ease-out both'
                        }}
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                
                <div className="flex gap-4">
                    <a
                    href={project.github}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group/link hover:scale-110 transform"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Github size={18} className="group-hover/link:scale-110 group-hover/link:rotate-12 transition-transform duration-300" />
                    <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                    href={project.live}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group/link hover:scale-110 transform"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <ExternalLink size={18} className="group-hover/link:scale-110 group-hover/link:rotate-12 transition-transform duration-300" />
                    <span className="text-sm font-medium">Live Demo</span>
                    </a>
                </div>
                </div>
            </div>
            </FadeInAnimation>
        ))}
        </div>
    </div>
    
    <style jsx>{`
        @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
        }
    `}</style>
    </section>
);
};

export default Projects;