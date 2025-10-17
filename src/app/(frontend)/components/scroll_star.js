'use client'
import React, { useEffect, useRef, useState } from 'react';
import '../../../../public/sass/pages/scroll_star.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Scroll_star = () => {
    const [allSections, setAllSections] = useState(0);
    const [active, setActive] = useState(0);
    const navRef = useRef([]);
    const pathname = usePathname()

    useEffect(() => {
        let sectionContainer = document.getElementById('section');
        let allChild = Array.from(sectionContainer.children)
        let count = sectionContainer.childElementCount;
        setAllSections(count)
        const options = {
            threshold: 0.7
        }
        const observer = new IntersectionObserver((enteries) => {
            enteries.forEach((entery) => {
                if (entery.isIntersecting) {
                    const index = allChild.indexOf(entery.target);
                    setActive(index)
                }
            })
        }, options)
        allChild.forEach((ele) => {
            observer.observe(ele)
        })
        return () => {
            allChild.forEach((ele) => {
                observer.unobserve(ele)
            })
        }
    }, [allSections, navRef, pathname])
    return (
        <>
            {
                allSections > 1 &&
                <div className="page_nav_main">
                    <div className="page_nav">
                        {
                            [...Array(allSections)].map((_, index) => (
                                <Link href={`#section_${index + 1}`} className={`nav_item ${active === index ? 'active' : ''}`} key={index} ref={(ele) => navRef.current[index] = ele}></Link>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Scroll_star