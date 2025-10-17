import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/about_scss/about_banner.scss';
import logo from '../../../../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const About_banner = ({ id }) => {
    return (
        <section className='about_banner_section' id={id}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12} className='h-100'>
                        <div className='parent_area'>
                            {/* <div className='button_area'>
                                <Link href="/contact">
                                    <div className='logo_area'>
                                        <Image
                                            src={logo}
                                            alt="..."
                                            title="..."
                                            priority
                                        />
                                    </div>
                                    <span>Contact Us</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div> */}
                            <div className='left'>
                                <h3>OutSpace Competition with breakthrough Technology
                                </h3>
                                <h4>It is what we do</h4>
                            </div>
                            <div className="right">
                                <p>Cost-efficient, compliant, and tailored AI tools for your business.</p>
                                <div className='intro_btn'>
                                    <Link href="/about_us">
                                        <span>About Us</span>
                                        <div className='icon_area'>
                                            <i className="bi bi-play-fill"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About_banner