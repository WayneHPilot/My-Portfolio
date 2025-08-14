import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ 
texts = [], 
speed = 100, 
deleteSpeed = 50, 
delay = 2000,
className = "",
cursor = true 
}) => {
const [currentTextIndex, setCurrentTextIndex] = useState(0);
const [currentText, setCurrentText] = useState('');
const [isDeleting, setIsDeleting] = useState(false);
const [showCursor, setShowCursor] = useState(true);

useEffect(() => {
    const text = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
    if (!isDeleting) {
        // Typing
        if (currentText.length < text.length) {
        setCurrentText(text.substring(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
        setTimeout(() => setIsDeleting(true), delay);
        }
    } else {
        // Deleting
        if (currentText.length > 0) {
        setCurrentText(text.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
    }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
}, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delay]);

  // Cursor blinking effect
useEffect(() => {
    const cursorInterval = setInterval(() => {
    setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
}, []);

return (
    <span className={className}>
    {currentText}
    {cursor && (
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
        </span>
    )}
    </span>
);
};

export default TypingAnimation;