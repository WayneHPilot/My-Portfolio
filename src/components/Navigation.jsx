import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection }) => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
};

return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Wayne.dev
        </div>
        
          {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
            {navItems.map((section) => (
            <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                activeSection === section ? 'text-purple-400 font-semibold' : 'text-white/80'
                }`}
            >
                {section}
            </button>
            ))}
        </div>

          {/* Mobile Menu Button */}
        <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
        <div className="md:hidden pb-4">
            {navItems.map((section) => (
            <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="block w-full text-left py-2 capitalize hover:text-purple-400 transition-colors"
            >
                {section}
            </button>
            ))}
        </div>
        )}
    </div>
    </nav>
);
};

export default Navigation;