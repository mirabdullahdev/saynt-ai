'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../../public/sass/pages/solution_ai.scss';


const Solution_ai = ({id}) => {
    const text = ['Protection', 'Optimization', 'Automation', 'Progression', 'Innovation', 'Transformation', 'Evolution',];
    const classes = ['gallery_1', 'gallery_2', 'gallery_3', 'gallery_4', 'gallery_5', 'gallery_6', 'gallery_7'];
    const slidesRef = useRef([]);
    let interval = 1500

    useEffect(() => {
        const updateClasses = () => {
            slidesRef.current.forEach((slide, index) => {
                if (slide) {
                    slide.classList.remove(...classes);
                    const currentClass = classes[(index + Math.floor(Date.now() / interval)) % classes.length];
                    slide.classList.add(currentClass);
                }
            });
        };

        const intervalId = setInterval(updateClasses, interval);

        return () => clearInterval(intervalId);
    }, [classes, interval]);


    return (
        <>
            <section className="integration_section" id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_area">
                                <Row className='row-gap-3'>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className="left">
                                            <h3>
                                                Scroll through <span className='d-inline-block d-md-block'>Endless possibilities</span> with AI Integration
                                            </h3>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className="right">
                                            {/* <h3>Quick Tip!</h3> */}
                                            <p>
                                                We offer AI-driven solutions designed to optimize processes, enhance security, and drive growth across industries. Our tools streamline operations, making your business smarter and more efficient.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <div className="center">
                                            <div className="text">
                                                Solutions <span>For</span>
                                                <div className='slider'>
                                                    {
                                                        text &&
                                                        text.map((item, i) => {
                                                            return (
                                                                <div
                                                                    className={`inner_text `}
                                                                    key={i} ref={(el) => slidesRef.current[i] = el}>
                                                                    {item}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Solution_ai