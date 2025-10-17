import React from 'react'
import '../../../../public/sass/home_scss/home_hero_section.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import logo from '../../../../public/images/logo.svg'
import dotted from '../../../../public/images/dotted.svg'
import container from '../../../../public/images/container.png'
import layer from '../../../../public/images/layer.png'
import Image from 'next/image';


const Home_hero = ({ id }) => {
    return (
        <>
            <section className='home_hero_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                            <div className='parent_area'>
                                <Row className='align-items-center'>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xm={12}>
                                        <div className='left_area'>
                                            <h3>
                                                Outpace Outperform Outlast
                                            </h3>
                                            <div className='desc'>Say Hello to Smarter Business: AI-Powered Automation for Any Industry</div>
                                            {/* <p>At <strong>SAYNT AI</strong>, we build custom software, automate workflows, and deliver real-time intelligence so you can focus on the bigger picture. Forget the stress—let us handle the heavy lifting under the hood.</p> */}
                                            <div className='buttons_area'>
                                                <Link href='https://wa.me/923299346077' className='btn-primary btn-green'>Request a Demo</Link>
                                                {/* <Link href='/solutions' className='btn-primary btn-light'>Learn More</Link> */}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xm={12}>
                                        <div className='right_area'>
                                            {/* <div className='circles_img'>
                                                <Image
                                                    src={circleImg}
                                                    alt="..."
                                                    title="..."
                                                    priority
                                                />
                                            </div> */}
                                            <div className="logo_grd"></div>
                                            <div className="outer_circle">
                                                <div className="rotate_img first">
                                                    <Image src={container} alt='...' title='...' fetchPriority='low' priority={false} />
                                                </div>
                                                <div className="rotate_img layer">
                                                    <Image src={layer} alt='...' title='...' fetchPriority='low' priority={false} />
                                                </div>
                                                <div className="dotted">
                                                    <Image src={dotted} alt="..."
                                                        title="..."
                                                        priority />
                                                    <div className='logo_area'>
                                                        <Image
                                                            src={logo}
                                                            alt="..."
                                                            title="..."
                                                            priority
                                                        />
                                                    </div>
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

export default Home_hero