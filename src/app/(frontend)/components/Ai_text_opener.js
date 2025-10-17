'use client'
import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/ai_scss/ai.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);


const Ai_text_opener = () => {

    const wrapperRef = useRef(null);

    useGSAP(() => {
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "center center",
                end: "bottom center",
                scrub: 1,
                pin: true,
                // markers: true,
                // pinSpacing: false
            }
        });

        tl2.to(".wrapper .wrapper_top", {
            y: '-100%'
        }, "b")
            .to(".wrapper .wrapper_bottom", {
                bottom: '-50%'
            }, "b")
            .to(".wrapper .wrapper_center .inner_area", {
                y: '-150%'
            }, "b");

    }, []);
    return (
        <section className='text_opener_section'>
            <div className="academy_gradient"></div>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className="wrapper" ref={wrapperRef}>
                                <div className="wrapper_top">
                                    <h1>revolution in Education</h1>
                                </div>
                                <div className='wrapper_center'>
                                    <div className='inner_area'>
                                        <h4>Education remains out of reach for many students</h4>
                                        <p>With private tutoring costs soaring, many families are forced to allocate a significant portion of their income to afford quality education. </p>
                                    </div>
                                </div>
                                <div className="wrapper_bottom">
                                    <h1>is here</h1>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ai_text_opener