'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/calling_agent/calling_agent.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImg1 from '../../../../public/images/ai_slider_img1.png'
import sliderImg2 from '../../../../public/images/ai_slider_img2.png'
import sliderImg3 from '../../../../public/images/ai_slider_img3.png'
import sliderImg4 from '../../../../public/images/ai_slider_img4.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const Calling_support = () => {
    return (
        <section className='calling_support_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <h3 className='animate_up'>Our AI <span>Calling</span> Agent is here to <span>revolutionize</span> outreach and support</h3>
                            <div className='slider_area animate_up'>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    breakpoints={{
                                        0:{
                                            spaceBetween: 20,
                                            slidesPerView: 1,
                                        },
                                        640: {
                                          slidesPerView: 2,
                                          spaceBetween: 20,
                                        },
                                        768: {
                                          slidesPerView: 3,
                                          spaceBetween: 20,
                                        },
                                        1024: {
                                          slidesPerView: 4,
                                          spaceBetween: 20,
                                        },
                                      }}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='slide_inner'>
                                            <div className='content_area'>
                                                <p>24/7 Availability</p>
                                            </div>
                                            <div className='image_area'>
                                                <Image
                                                    src={sliderImg1}
                                                    alt="..."
                                                    title="..."
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slide_inner'>
                                            <div className='content_area'>
                                                <p>Delivers precise, up-to-date info using your brand’s voice, every time</p>
                                            </div>
                                            <div className='image_area'>
                                                <Image
                                                    src={sliderImg2}
                                                    alt="..."
                                                    title="..."
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slide_inner'>
                                            <div className='content_area'>
                                                <p>Handle Surges with Ease</p>
                                            </div>
                                            <div className='image_area'>
                                                <Image
                                                    src={sliderImg3}
                                                    alt="..."
                                                    title="..."
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slide_inner'>
                                            <div className='content_area'>
                                                <p>Smart Context Awareness</p>
                                            </div>
                                            <div className='image_area'>
                                                <Image
                                                    src={sliderImg4}
                                                    alt="..."
                                                    title="..."
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Calling_support