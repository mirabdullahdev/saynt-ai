'use client'; 
import React from 'react';
import '../../../../public/sass/about_scss/about_partners.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Autoplay } from 'swiper/modules'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import logo1 from '../../../../public/images/slider_logo1.png'
import logo2 from '../../../../public/images/slider_logo2.png'
import logo3 from '../../../../public/images/slider_logo3.png'
import logo4 from '../../../../public/images/slider_logo4.png'

const AboutPartners = ({id}) => {
    return (
        <section className='about_partner_section' id={id}>
            <div className='parent_area'>
                <h3>What we do to come there</h3>
                <p>We collaborate with top companies and hold industry certifications</p>
                <div className='slider_area'>
                    <Swiper
                        modules={[ Autoplay]}
                        slidesPerView={4}
                        spaceBetween={30}
                        loop = {true}
                        speed={1000}
                        className="mySwiper"
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false, 
                        }}
                        breakpoints={{
                            1366: { slidesPerView: 4, },
                            1024: { slidesPerView: 4, },
                            768: { slidesPerView: 4, },
                            556: { slidesPerView: 3, },
                            360: { slidesPerView: 2, },
                        }}
                    >
                        <SwiperSlide>
                            <div className='slide_inner'>
                                <div className='logo_area'>
                                    <Image src={logo1} alt='...' title='...' priority/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide_inner'>
                                <div className='logo_area'>
                                    <Image src={logo2} alt='...' title='...' priority/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide_inner'>
                                <div className='logo_area'>
                                    <Image src={logo3} alt='...' title='...' priority/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide_inner'>
                                <div className='logo_area'>
                                    <Image src={logo4} alt='...' title='...' priority/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide_inner'>
                                <div className='logo_area'>
                                    <Image src={logo1} alt='...' title='...' priority/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide_inner'>
                                <div className='logo_area'>
                                    <Image src={logo2} alt='...' title='...' priority/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide_inner'>
                                <div className='logo_area'>
                                    <Image src={logo3} alt='...' title='...' priority/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide_inner'>
                                <div className='logo_area'>
                                    <Image src={logo4} alt='...' title='...' priority/>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default AboutPartners;
