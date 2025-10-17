'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/contact_scss/contact_expertise.scss'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from '../../../../public/images/big_logo.png'

import 'swiper/css';


import Link from 'next/link';
import Image from 'next/image';

const Contact_expertise = ({ id, title, subtitle }) => {
    return (
        <>
            <section className='contact_expertise_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>{title} <strong>{subtitle}</strong></h3>
                                <div className='slider_area'>
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={0}
                                        centeredSlides={true}
                                        loop={true}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        speed={500}
                                        modules={[Autoplay]}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        className="mySwiper"
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1,
                                                centeredSlides: true,
                                                spaceBetween: 20,
                                            },
                                            556: {
                                                slidesPerView: 3,
                                                spaceBetween: 0,
                                            },
                                            768: {
                                                slidesPerView: 3,
                                                spaceBetween: 0,
                                            },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <div className='slide_inner'>
                                                <div className='logo_area'>
                                                    <Image
                                                        src={logo}
                                                        alt='...'
                                                        title='...'
                                                        priority='...'
                                                    />
                                                </div>
                                                <h3>
                                                    Multi-Channel Customer Concierge
                                                </h3>
                                                <p>
                                                    Overwhelmed by customer messages? Our Concierge unifies everything, providing smart, consistent support
                                                </p>
                                                <Link href='/' className='btn-primary btn-green'>Learn More <i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='slide_inner'>
                                                <div className='logo_area'>
                                                    <Image
                                                        src={logo}
                                                        alt='...'
                                                        title='...'
                                                        priority='...'
                                                    />
                                                </div>
                                                <h3>
                                                    AI Calling Agent
                                                </h3>
                                                <p>
                                                    Tired of overwhelmed support lines?  Our AI Calling Agent handles the load, ensuring callers get instant, accurate help
                                                </p>
                                                <Link href='/' className='btn-primary btn-green'>Learn More <i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='slide_inner'>
                                                <div className='logo_area'>
                                                    <Image
                                                        src={logo}
                                                        alt='...'
                                                        title='...'
                                                        priority='...'
                                                    />
                                                </div>
                                                <h3>
                                                    Smart AI Assistant
                                                </h3>
                                                <p>
                                                    Data silos, generic AI, inconsistent messaging, security risks.  Your business deserves a smarter AI assistant
                                                </p>
                                                <Link href='/' className='btn-primary btn-green'>Learn More <i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='slide_inner'>
                                                <div className='logo_area'>
                                                    <Image
                                                        src={logo}
                                                        alt='...'
                                                        title='...'
                                                        priority='...'
                                                    />
                                                </div>
                                                <h3>
                                                    Software Development
                                                </h3>
                                                <p>
                                                    Full-stack development, scalable architectures, and cloud services.
                                                </p>
                                                <Link href='/' className='btn-primary btn-green'>Learn More <i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="contact_gradient"></div>
            </section>
        </>
    )
}

export default Contact_expertise