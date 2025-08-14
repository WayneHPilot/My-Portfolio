import { useState, useEffect } from 'react';

export const useScrollAnimation = () => {
const [isVisible, setIsVisible] = useState(false);
const [activeSection, setActiveSection] = useState('home');
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
        }
        }
    });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', handleScroll);
    };
}, []);

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
};

return {
    isVisible,
    activeSection,
    mousePosition,
    scrollToSection
};
};