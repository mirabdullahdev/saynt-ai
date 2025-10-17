'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/about_scss/about_meet_team.scss'
import  { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs , Controller} from 'swiper/modules';


import img1 from '../../../../public/images/hassan.jpeg'
import img2 from '../../../../public/images/talpur.jpeg'
import img3 from '../../../../public/images/safi2.jpeg'
import img4 from '../../../../public/images/khan.jpeg'
import img5 from '../../../../public/images/abbass.jpeg'
import logo from '../../../../public/images/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const About_meet_team = ({id}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [controlledSwiper, setControlledSwiper] = useState(null);
    return (
        <section className='about_meet_team_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <Row>
                                <Col xxl={8} xl={8} lg={8} md={7} sm={7} xs={12}>
                                    <div className='left_area'>
                                        <div className='upper_area'>
                                            <div className='button_area'>
                                                {/* <Link href='/' className='btn-primary'>
                                                        <div className='logo_area'>
                                                            <Image 
                                                                src={logo}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    <span>Saynt AI</span>
                                                </Link> */}
                                            </div>
                                            <h2>Meet The Team</h2>
                                        </div>
                                        <div className='slider_area'>
                                            <Swiper
                                                loop={true}
                                                spaceBetween={10}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                modules={[FreeMode,  Thumbs , Controller]}
                                                className="mySwiper2"
                                                onSwiper={setControlledSwiper}
                                                allowTouchMove={false}
                                            >
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <h3>Ali Hassan</h3>
                                                        <div className='text'> Chief Executive Officer (CEO)
                                                        </div>
                                                        <p>
                                                        Ali Hassan, as the Chief Executive Officer, oversees the company’s vision, strategy, and overall direction. He ensures the organization remains innovative, competitive, and financially successful. His leadership drives decision-making across all departments, fostering collaboration and long-term growth. By identifying new business opportunities, forming strategic alliances, and maintaining investor relations, he ensures the company’s sustainability. His ability to manage risks and adapt to industry changes positions the company for continued success.

                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <h3>Mir Abdullah </h3>
                                                        <div className='text'>Chief Operating Officer (COO)
                                                        </div>
                                                        <p>
                                                        Mir Abdullah, as the Chief Operating Officer, manages the company’s daily operations and ensures seamless execution of business strategies. He optimizes internal processes, enhances operational efficiency, and ensures alignment between departments. His focus on productivity, cost management, and workflow optimization keeps the organization running smoothly. He also oversees project implementation and resource allocation, ensuring deadlines are met without compromising quality. His ability to execute strategic plans strengthens the company’s overall performance.
                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <h3>Safi Hassan</h3>
                                                        <div className='text'>Chief Marketing Officer (CMO)
                                                        </div>
                                                        <p>
                                                        Safi Hassan, as the Chief Marketing Officer, leads the company’s marketing strategies, ensuring brand visibility and customer engagement. He develops and executes campaigns that enhance customer acquisition, retention, and loyalty. By leveraging data-driven insights, he optimizes marketing efforts across digital and traditional channels. His expertise in market trends, consumer behavior, and strategic partnerships enables the company to grow its audience, increase sales, and maintain a competitive edge in the market.

                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <h3>Saaim Khan</h3>
                                                        <div className='text'> Chief Creative Officer (CCO)
                                                        </div>
                                                        <p>
                                                        Saaim Khan, as the Chief Creative Officer, drives the company’s creative vision by blending innovation with strategic design. He oversees branding, content creation, and visual storytelling to ensure a compelling and cohesive brand identity. His leadership fosters a culture of creativity, inspiring teams to push boundaries in design and marketing. By integrating emerging trends and consumer psychology, he ensures the company’s brand remains engaging, modern, and influential in the industry.

                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <h3>Hasan Abbas </h3>
                                                        <div className='text'>Chief Research Officer (CRO)</div>
                                                        <p>
                                                        Hasan Abbas, as the Chief Research and Development Officer, drives innovation by leading research initiatives and technological advancements. He ensures the company stays ahead by developing new products, improving existing ones, and integrating emerging technologies. His role involves identifying market needs, fostering a culture of experimentation, and collaborating with technical teams to create cutting-edge solutions. Through continuous R&D efforts, he ensures the company remains a leader in its industry by adapting to evolving trends.
                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={5} sm={5} xs={12}>
                                    <div className='right_area'>
                                        <div className='slider_area'>
                                            <Swiper
                                                loop={true}
                                                spaceBetween={10}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                navigation={{
                                                    nextEl: '.next-btn',
                                                    prevEl: '.prev-btn',
                                                }}
                                                modules={[FreeMode, Thumbs , Controller , Navigation]}
                                                controller={{ control: controlledSwiper }}
                                                className="mySwiper2"
                                            >
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <div className='image_area'>
                                                            <Image 
                                                                src={img1}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <div className='image_area'>
                                                            <Image 
                                                                src={img2}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <div className='image_area'>
                                                            <Image 
                                                                src={img3}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <div className='image_area'>
                                                            <Image 
                                                                src={img4}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <div className='image_area'>
                                                            <Image 
                                                                src={img5}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="custom-navigation">
                                                <div className="prev-btn">
                                                    <i className="bi bi-arrow-left"></i>
                                                </div>
                                                <div className="next-btn">
                                                    <i className="bi bi-arrow-right"></i>
                                                </div>
                                            </div>
                                            <div className='thumb_slider'>
                                                <Swiper
                                                    onSwiper={setThumbsSwiper}
                                                    loop={true}
                                                    spaceBetween={10}
                                                    slidesPerView={4}
                                                    freeMode={true}
                                                    watchSlidesProgress={true}
                                                    modules={[FreeMode,  Thumbs]}
                                                    className="mySwiper"
                                                >
                                                    <SwiperSlide>
                                                        <div className='slide_inner'>
                                                            <div className='image_area'>
                                                                <Image 
                                                                    src={img1}
                                                                    alt='...'
                                                                    title='...'
                                                                    priority
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='slide_inner'>
                                                            <div className='image_area'>
                                                                <Image 
                                                                    src={img2}
                                                                    alt='...'
                                                                    title='...'
                                                                    priority
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='slide_inner'>
                                                            <div className='image_area'>
                                                                <Image 
                                                                    src={img3}
                                                                    alt='...'
                                                                    title='...'
                                                                    priority
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='slide_inner'>
                                                            <div className='image_area'>
                                                                <Image 
                                                                    src={img4}
                                                                    alt='...'
                                                                    title='...'
                                                                    priority
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='slide_inner'>
                                                            <div className='image_area'>
                                                                <Image 
                                                                    src={img5}
                                                                    alt='...'
                                                                    title='...'
                                                                    priority
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
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
    )
}

export default About_meet_team