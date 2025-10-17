'use client'
import React, { useState } from 'react'
import '../../../../public/sass/about_scss/about_make_different_section.scss'
import { Col, Container, Row } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slideImg1 from '../../../../public/images/slide_bg_img1.png'
import slideImg2 from '../../../../public/images/slide_bg_img2.png'
import slideImg3 from '../../../../public/images/slide_bg_img3.png'
import { Autoplay, Thumbs } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import Image from 'next/image';


const AboutMakeSection = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <section className='about_make_different_section' id={props.id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <h3>What Makes Us <strong>Different</strong></h3>
                            <div className='slider_area'>
                                <Swiper className="mySwiper"
                                     thumbs={{ swiper: thumbsSwiper }}
                                     modules={[ Thumbs, Autoplay]}
                                     speed={2000} 
                                      autoplay={{
                                        delay: 3000, // 3 seconds
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className='slide_inner'>
                                            <div className='image_area'>
                                                <Image src={slideImg1} alt='...' title='...' priority/>
                                            </div>
                                            <div className='content_area'>
                                                <h4>Human-Centered Approach</h4>
                                                <h5>We believe in understanding you first, then  designing solutions that truly fit your needs</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slide_inner'>
                                            <div className='image_area'>
                                                <Image src={slideImg2} alt='...' title='...' priority/>
                                            </div>
                                            <div className='content_area'>
                                                <h4>Tech Wizards, Business Brains</h4>
                                                <h5>Our team merges deep technical expertise with real-world business acumen, ensuring we build solutions that actually move the needle</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slide_inner'>
                                            <div className='image_area'>
                                                <Image src={slideImg3} alt='...' title='...' priority/>
                                            </div>
                                            <div className='content_area'>
                                                <h4>Obsessed with Value</h4>
                                                <h5>Everything we create, from quick prototypes to enterprise-grade solutions, is measured against one question: “Is this delivering serious value to our client?”</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className='thumbs_area'>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={3}
                                watchSlidesProgress={true}
                                modules={[ Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='inner_area'>
                                        <h3>01</h3>
                                        <p>Human Centered Approach</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='inner_area'>
                                        <h3>02</h3>
                                        <p>Tech Wizards, Business Brain</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='inner_area border-0'>
                                        <h3>03</h3>
                                        <p>Obsessed With Value</p>
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

export default AboutMakeSection