'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/about_scss/current_work.scss';
import Image from 'next/image';
import img1 from '../../../../public/images/logistics_bg.png';

const About_current_work = ({id}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <section className="current_work" id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_area">
                                <Row className='row-gap-3 row-gap-md-4 align-items-lg-start align-items-end'>
                                    <Col xxl={7} xl={7} lg={7} md={7} sm={12} xs={12} className='h-100'>
                                        <div className="left">
                                            <div className="top">
                                                <div className="title">
                                                    <h3>Our Current Work</h3>
                                                    <p>Few Of Many Solutions Listed here,<span> Don&apos;t Worry</span> if your solution isn&apos;t listed, Just reach us out and we will get you the solution you need.</p>
                                                </div>
                                                <div className="button_area">
                                                    <Link href={'/solutions'} className='btn btn_blue'>
                                                        <span> Custom Solution</span>
                                                        <i className="bi bi-arrow-right right_arr"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <div className="sliding_area">
                                                    <Swiper
                                                        onSwiper={setThumbsSwiper}
                                                        spaceBetween={10}
                                                        slidesPerView={1}
                                                        freeMode={true}
                                                        watchSlidesProgress={true}
                                                        modules={[FreeMode, Navigation, Thumbs]}
                                                        className="mySwiper"
                                                        breakpoints={{
                                                            0: {
                                                                slidesPerView: 2
                                                            },
                                                            576:{
                                                                slidesPerView: 4
                                                            },
                                                            768:{
                                                                slidesPerView: 3
                                                            },
                                                            1024: {
                                                                slidesPerView: 4
                                                            }
                                                        }}
                                                    >
                                                        {
                                                            ["Assistant", "Manager", "Designer", "Developer"].map((item, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className="card_item">
                                                                        <div className="img_area">
                                                                            <Image src={img1} alt='...' title='...' fetchPriority='low' priority={false} />
                                                                        </div>
                                                                        <div className="txt">{item}</div>
                                                                        {/* <div className="icon"><i className="bi bi-heart"></i></div> */}
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={5} xl={5} lg={5} md={5} sm={12} xs={12} className='h-100'>
                                        <div className="right">
                                            <div className="slider">
                                                <Swiper
                                                    spaceBetween={10}
                                                    navigation={{ nextEl: '.next', prevEl: '.prev' }}
                                                    pagination={{
                                                        clickable: true, el: '.bullet', renderBullet: function (index, className) {
                                                            return '<span class="' + className + '"></span>';
                                                        }
                                                    }}
                                                    thumbs={{ swiper: thumbsSwiper }}
                                                    modules={[FreeMode, Navigation, Pagination, Thumbs]}
                                                    className="mySwiper2"
                                                >
                                                    {
                                                        [...Array(4)].map((item, i) => (
                                                            <SwiperSlide key={i}>
                                                                <div className="card_item">
                                                                    <div className="img_area">
                                                                        <Image src={img1} alt='...' title='...' fetchPriority='low' priority={false} />
                                                                    </div>
                                                                    <div className="txt">Find Information Quickly and Easily </div>
                                                                    {/* <div className="icon"><i className="bi bi-heart"></i></div> */}
                                                                </div>
                                                            </SwiperSlide>
                                                        ))
                                                    }
                                                </Swiper>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <div className="center">
                                            <div className="prev next-prev"><i className="bi bi-chevron-left"></i></div>
                                            <div className="bullet"></div>
                                            <div className="next next-prev"><i className="bi bi-chevron-right"></i></div>
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

export default About_current_work