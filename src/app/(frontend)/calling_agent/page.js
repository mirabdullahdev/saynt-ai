'use client'
import React, { useEffect, useState } from 'react'
import CallingAgentHeroSection from '../components/CallingAgentHeroSection'
import Calling_Service from '../components/Calling_Service'
import Calling_meet from '../components/Calling_meet'
import Calling_support from '../components/Calling_support'
import Calling_impact from '../components/Calling_impact'
import Calling_result from '../components/Calling_result'
import Calling_outreach from '../components/Calling_outreach'

const page = () => {
    const comp = [ 
        CallingAgentHeroSection,
        Calling_Service,
        Calling_meet,
        Calling_support,
        Calling_impact,
        Calling_result,
        Calling_outreach
    ]
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 2000); // Simulating a 2s loading time
            return () => clearTimeout(timer);
            
        }, []);

    useEffect(() => {
          if (typeof window === "undefined") return; // Prevents errors during SSR
      
          const elements = document.querySelectorAll(".animate_up");
          if (!elements.length) return;
      
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                  entry.target.classList.add("trigger");
                }
              });
            },
            { threshold: 0.5 }
          );
      
          elements.forEach((el) => observer.observe(el));
          return () => observer.disconnect();
        }, [loading]);
    return (

        <>
            {
                comp && comp.map((Section,index)=>(
                    <Section id={`section_${index + 1}`} key={index}/>
                ))
            }
        </>
    )
}

export default page