import React from 'react';
import { skillsData } from '../data/skills';
import FadeInAnimation from './FadeinAnimation';
import AnimatedCounter from './AnimatedCounter';

const Skills = () => {
return (
    <section id="skills" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
        <FadeInAnimation direction="up" delay={200}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
        </h2>
        <p className="text-center text-white/70 mb-16 text-lg">
            Constantly learning and evolving my technical expertise
        </p>
        </FadeInAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
            <FadeInAnimation 
            key={skill.name}
            direction="up" 
              delay={index * 100}
            className="group"
            >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 hover:bg-white/10">
                <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={24} className="text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold group-hover:text-purple-300 transition-colors duration-300">
                    {skill.name}
                    </h3>
                </div>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-3 mb-3 overflow-hidden">
                <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-2000 ease-out transform origin-left hover:scale-x-105`}
                    style={{ 
                    width: `${skill.level}%`,
                      animation: `slideIn 2s ease-out ${index * 0.1}s both`
                    }}
                />
                </div>
                
                <div className="flex justify-between items-center">
                <span className="text-sm text-white/70">Proficiency</span>
                <span className="text-lg font-bold text-white/90">
                    <AnimatedCounter 
                    end={skill.level} 
                      duration={2000 + (index * 100)}
                    suffix="%" 
                    />
                </span>
                </div>
            </div>
            </FadeInAnimation>
        ))}
        </div>
    </div>
    
    <style jsx>{`
        @keyframes slideIn {
        from {
            transform: scaleX(0);
        }
        to {
            transform: scaleX(1);
        }
        }
    `}</style>
    </section>
);
};

export default Skills;