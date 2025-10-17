'use client'
import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/contact_scss/industry.scss';
import Image from 'next/image';
import round from '../../../../public/images/round.svg';

const Contact_industry = ({ id, listData }) => {
    const data = listData
    const classArr = ['top_right', 'prev', 'active', 'next', 'bottom_right']
    const slidesRef = useRef([])
    let interval = 2500

    const resizeObservers = useRef([]);

    useEffect(() => {
        const updateClasses = () => {
            slidesRef.current.forEach((slide, index) => {
                if (slide) {
                    slide.classList.remove(...classArr);
                    const currentClass = classArr[(index + Math.floor(Date.now() / interval)) % classArr.length];
                    slide.classList.add(currentClass);

                    if (currentClass === 'active') {
                        let chip = slide.querySelector('.chip');
                        let desc = chip?.querySelector('.desc');

                        if (chip && desc) {
                            const adjustChipHeight = () => {
                                const slideHeight = Number(window.getComputedStyle(slide).height.replace('px', ''));
                                const descHeight = Number(window.getComputedStyle(desc).height.replace('px', ''));
                                chip.style.height = `${descHeight + slideHeight}px`;
                            };

                            adjustChipHeight();

                            const observer = new ResizeObserver(() => {
                                adjustChipHeight();
                            });
                            observer.observe(desc);

                            resizeObservers.current.forEach((obs) => obs.disconnect());
                            resizeObservers.current = [observer];
                        }
                    } else {
                        let chip = slide.querySelector('.chip');
                        if (chip) {
                            chip.style.height = '';
                        }
                    }
                }
            });
        };

        const intervalId = setInterval(updateClasses, interval);

        return () => {
            clearInterval(intervalId);

            resizeObservers.current.forEach((observer) => observer.disconnect());
            resizeObservers.current = [];
        };
    }, [classArr, interval]);

    return (
        <>
            <section className="industry" id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_area">
                                <Row className='row-gap-3 align-items-center'>
                                    <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                                        <div className="left">
                                            <div className="title">
                                                <h3>Why These <span>Solutions</span> Are Absolute Must-Haves</h3>
                                                {/* <h4>Solving Real Problems Across
                                                    Diverse Industries</h4>
                                                <p> Turning Industry Challenges into Success Stories with Smart, Tailored Solutions</p> */}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={7} lg={7} md={12} sm={12} xs={12}>
                                        <div className="right">
                                            <div className="slider_area">
                                                <div className="img_area">
                                                    <Image src={round} alt='...' title='...' fetchPriority='low' priority={false} />
                                                </div>
                                                {
                                                    data &&
                                                    data.map((item, i) => (
                                                        <div className='slide' key={i} ref={(el) => slidesRef.current[i] = el}>
                                                            <div className="chip">
                                                                <div className="title"><span>{item.title}</span></div>
                                                                <div className="desc">{item.desc}</div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
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

export default Contact_industry