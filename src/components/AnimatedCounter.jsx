import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "", className = "" }) => {
const [count, setCount] = useState(0);
const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
        }
    },
    { threshold: 0.1 }
    );

    if (ref.current) {
    observer.observe(ref.current);
    }

    return () => {
    if (ref.current) {
        observer.unobserve(ref.current);
    }
    };
}, [isVisible]);

useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    
      setCount(Math.floor(progress * end));
    
    if (progress < 1) {
        requestAnimationFrame(animate);
    }
    };

    requestAnimationFrame(animate);
}, [end, duration, isVisible]);

return (
    <span ref={ref} className={className}>
    {count}{suffix}
    </span>
);
};

export default AnimatedCounter;