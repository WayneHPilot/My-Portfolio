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
    
    // Check if we're at or near the bottom of the page
    const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
    
    // If we're near the bottom, activate the last section
    if (isNearBottom) {
        setActiveSection('contact');
        return;
    }

    // Check each section from last to first (reverse order)
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        
        if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        
        // For the last section, use a more generous detection
        if (i === sections.length - 1) {
            if (scrollPosition >= offsetTop - 100) {
            setActiveSection(section);
            break;
            }
        } else {
            // For other sections, use normal detection
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
            }
        }
        }
    }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial scroll check
    handleScroll();
    
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