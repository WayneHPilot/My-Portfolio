import React from 'react';
import { ChevronDown } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const Hero = ({ isVisible, scrollToSection }) => {
const technologies = ['JavaScript', 'Python', 'TypeScript', 'React.js', 'Node.js', 'Tailwind', 'Flask'];
const typingTexts = [
    'Full Stack Developer',
    'React Enthusiast', 
    'Python Developer',
    'Problem Solver',
    'Creative Coder'
];

return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        Hi I'm Wayne
        </h1>
        
        {/* Typing Animation */}
        <div className="text-2xl md:text-3xl mb-8 text-white/90 h-12 flex items-center justify-center">
        <TypingAnimation 
            texts={typingTexts}
            speed={150}
            deleteSpeed={100}
            delay={2000}
            className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        />
        </div>
        
        <p className="text-lg md:text-xl mb-8 text-white/70 max-w-2xl mx-auto leading-relaxed">
        Crafting beautiful, functional web experiences with modern technologies
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
        {technologies.map((tech, index) => (
            <span
            key={tech}
            className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-sm font-semibold border border-purple-400/30 backdrop-blur-sm animate-bounce hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
            {tech}
            </span>
        ))}
        </div>
        
        <button
        onClick={() => scrollToSection('about')}
        className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95"
        >
        <span className="group-hover:mr-2 transition-all duration-300">Explore My Work</span>
        <ChevronDown className="inline-block ml-2 group-hover:animate-bounce group-hover:translate-y-1 transition-transform duration-300" size={20} />
        </button>
    </div>
    </section>
);
};

export default Hero;