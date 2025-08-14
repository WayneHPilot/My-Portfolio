import React from 'react';

const About = () => {
return (
    <section id="about" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        About Me
        </h2>
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
        <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
            Welcome to my digital space! I'm Wayne, a passionate Full Stack Developer on an exciting journey 
            into the world of modern web development. Currently mastering the powerful combination of JavaScript, 
            Python, React.js, and Flask to create stunning, responsive applications.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
            My approach combines technical precision with creative flair, ensuring every project not only functions 
            flawlessly but also delivers an exceptional user experience. I believe in writing clean, maintainable 
            code while pushing the boundaries of what's possible on the web.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-white/90">
            When I'm not coding, you'll find me exploring the latest web technologies, contributing to open-source 
            projects, or brainstorming the next big idea. Ready to bring your vision to life!
        </p>
        </div>
    </div>
    </section>
);
};

export default About;