import React from 'react'
import '../../../../public/sass/about_scss/about_vision.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import visionImg1 from '../../../../public/images/vision_img1.png';
import visionImg2 from '../../../../public/images/vision_img2.png';
import visionImg3 from '../../../../public/images/vision_img3.png';


const AboutVision = () => {
    return (
        <section className='about_vision_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <h3>Our <span>Vision</span></h3>
                            <p>We’re not just another dev shop cranking out code. We see ourselves as partners in y our success, harnessing cutting-edge tech to help you</p>
                            <div className='inner_area'>
                                <Row>
                                    <Col xxl={5} xl={5} lg={5} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <div className='image_area'>
                                                <Image src={visionImg1} alt='...' title='...' priority />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={7} lg={7} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <h4>Empower Innovation</h4>
                                            <p>Unlock new possibilities by integrating cutting-edge AI to drive creativity and transformative solutions across industries</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='inner_area even'>
                                <Row>
                                    
                                    <Col xxl={7} xl={7} lg={7} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <h4>Future-Ready Businessesn</h4>
                                            <p>Equip organizations with scalable, adaptive technologies that evolve with their needs, ensuring long-term success in a dynamic market.</p>
                                        </div>
                                    </Col>
                                    <Col xxl={5} xl={5} lg={5} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <div className='image_area'>
                                                <Image src={visionImg2} alt='...' title='...' priority />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='inner_area'>
                                <Row>
                                    <Col xxl={5} xl={5} lg={5} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <div className='image_area'>
                                                <Image src={visionImg3} alt='...' title='...' priority />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={7} lg={7} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <h4>Global Impact</h4>
                                            <p>Transform the global business ecosystem by democratizing access to AI-driven tools and insights, leveling the playing field for all</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutVision