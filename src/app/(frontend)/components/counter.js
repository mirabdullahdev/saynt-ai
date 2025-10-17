'use client';
import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';

const Counter = ({ start, end, duration }) => {
    const [roundedValue, setRoundedValue] = useState(start);
    const countRef = useRef(null);
    const count = useMotionValue(start);

    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const controls = animate(count, end, {
                        duration,
                        onUpdate: (latest) => setRoundedValue(Math.round(latest)),
                    });

                    return () => controls.stop();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, { root: null, rootMargin: '0px', threshold: 1.0 });
        if (countRef.current) observer.observe(countRef.current);

        return () => {
            if (countRef.current) observer.unobserve(countRef.current);
        };
    }, [count, end, duration]);

    return (
        <motion.h3 aria-live="polite" ref={countRef}>
            {roundedValue}+
        </motion.h3>
    );
};

export default Counter;
