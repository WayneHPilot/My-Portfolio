import React, { useState, useEffect, useRef } from 'react';

const FadeInAnimation = ({ 
children, 
direction = 'up', 
delay = 0, 
duration = 'duration-1000',
className = '' 
}) => {
const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

const directions = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
    scale: 'scale-95'
};

useEffect(() => {
    const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
        setTimeout(() => {
            setIsVisible(true);
        }, delay);
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
}, [delay]);

return (
    <div
    ref={ref}
    className={`transform transition-all ${duration} ${
        isVisible 
        ? 'translate-y-0 translate-x-0 scale-100 opacity-100' 
        : `${directions[direction]} opacity-0`
    } ${className}`}
    >
    {children}
    </div>
);
};

export default FadeInAnimation;